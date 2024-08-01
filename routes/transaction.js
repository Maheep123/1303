const express = require('express');
const { borrowBook, returnBook, getTransactions } = require('../controllers/transactionController');
const router = express.Router();

// @route    POST api/transactions/borrow
// @desc     Borrow a book
// @access   Public
router.post('/borrow', borrowBook);

// @route    POST api/transactions/return
// @desc     Return a book
// @access   Public
router.post('/return', returnBook);

// @route    GET api/transactions
// @desc     Get all transactions
// @access   Public
router.get('/', getTransactions);

module.exports = router;
