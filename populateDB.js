const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const connectDB = require('./config/db');
const Book = require('./models/Book');
const User = require('./models/User');

connectDB();

const createBooks = async () => {
    const books = [
        { title: '1984', author: 'George Orwell', genre: 'Dystopian', availability: true },
        { title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Fiction', availability: true },
        { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Fiction', availability: true },
        { title: 'The Catcher in the Rye', author: 'J.D. Salinger', genre: 'Fiction', availability: true },
        { title: 'Moby-Dick', author: 'Herman Melville', genre: 'Adventure', availability: true }
    ];

    try {
        await Book.deleteMany({});
        await Book.insertMany(books);
        console.log('Books added to the database');
    } catch (err) {
        console.error(err);
    }
};

const createUsers = async () => {
    const users = [
        { name: 'John Doe', email: 'john@example.com', password: '123456' },
        { name: 'Jane Smith', email: 'jane@example.com', password: '123456' },
        { name: 'Alice Johnson', email: 'alice@example.com', password: '123456' },
        { name: 'Bob Brown', email: 'bob@example.com', password: '123456' }
    ];

    try {
        await User.deleteMany({});

        for (let user of users) {
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(user.password, salt);
            await User.create(user);
        }
        
        console.log('Users added to the database');
    } catch (err) {
        console.error(err);
    }
};

const populateDB = async () => {
    await createBooks();
    await createUsers();
    mongoose.connection.close();
};

populateDB();
