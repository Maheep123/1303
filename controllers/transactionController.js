const Transaction = require('../models/Transaction');
const Book = require('../models/Book');

// Borrow a book
exports.borrowBook = async (req, res) => {
    const { userId, bookId, dueDate } = req.body;
    try {
        let book = await Book.findById(bookId);
        if (!book || !book.availability) {
            return res.status(400).json({ msg: 'Book not available' });
        }

        const newTransaction = new Transaction({
            userId,
            bookId,
            dueDate
        });

        book.availability = false;
        await book.save();
        await newTransaction.save();

        res.json(newTransaction);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// Return a book
exports.returnBook = async (req, res) => {
    const { transactionId, returnDate } = req.body;
    try {
        let transaction = await Transaction.findById(transactionId);
        if (!transaction || transaction.returnDate) {
            return res.status(400).json({ msg: 'Transaction not valid or already returned' });
        }

        let book = await Book.findById(transaction.bookId);
        if (!book) {
            return res.status(400).json({ msg: 'Book not found' });
        }

        transaction.returnDate = returnDate;
        transaction.fine = calculateFine(transaction.dueDate, returnDate);
        book.availability = true;

        await transaction.save();
        await book.save();

        res.json(transaction);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// Get all transactions
exports.getTransactions = async (req, res) => {
    try {
        const transactions = await Transaction.find().populate('userId bookId');
        res.json(transactions);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// Helper function to calculate fine
const calculateFine = (dueDate, returnDate) => {
    const due = new Date(dueDate);
    const returned = new Date(returnDate);
    const diffTime = Math.abs(returned - due);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const finePerDay = 1; // Example: $1 per day
    return diffDays > 0 ? diffDays * finePerDay : 0;
};
