const express = require('express');
const { getUsers, getUserById } = require('../controllers/userController');
const router = express.Router();

// @route    GET api/users
// @desc     Get all users
// @access   Public
router.get('/', getUsers);

// @route    GET api/users/:id
// @desc     Get user by ID
// @access   Public
router.get('/:id', getUserById);

module.exports = router;
