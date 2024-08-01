const express = require('express');
const { addBook, getBooks, getBookById, updateBook, deleteBook } = require('../controllers/bookController');
const router = express.Router();

// @route    POST api/books
// @desc     Add a new book
// @access   Public
router.post('/', addBook);

// @route    GET api/books
// @desc     Get all books
// @access   Public
router.get('/', getBooks);

// @route    GET api/books/:id
// @desc     Get book by ID
// @access   Public
router.get('/:id', getBookById);

// @route    PUT api/books/:id
// @desc     Update book details
// @access   Public
router.put('/:id', updateBook);

// @route    DELETE api/books/:id
// @desc     Delete a book
// @access   Public
router.delete('/:id', deleteBook);

module.exports = router;
