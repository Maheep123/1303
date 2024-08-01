const Book = require('../models/Book');

// Add a new book
exports.addBook = async (req, res) => {
    const { title, author, genre } = req.body;
    try {
        const newBook = new Book({
            title,
            author,
            genre,
            availability: true
        });
        const book = await newBook.save();
        res.json(book);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// Get all books
exports.getBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// Get book by ID
exports.getBookById = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) {
            return res.status(404).json({ msg: 'Book not found' });
        }
        res.json(book);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// Update book details
exports.updateBook = async (req, res) => {
    const { title, author, genre, availability } = req.body;
    try {
        let book = await Book.findById(req.params.id);
        if (!book) {
            return res.status(404).json({ msg: 'Book not found' });
        }

        book.title = title || book.title;
        book.author = author || book.author;
        book.genre = genre || book.genre;
        book.availability = availability !== undefined ? availability : book.availability;

        await book.save();
        res.json(book);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// Delete a book
exports.deleteBook = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) {
            return res.status(404).json({ msg: 'Book not found' });
        }
        await book.remove();
        res.json({ msg: 'Book removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
