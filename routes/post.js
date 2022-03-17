const express = require('express');
const { createPost, getPosts } = require('../controllers/post');
const validator = require('../validator');

const router = express.Router();
router.get('/', getPosts);
router.post('/post', validator.createPostValidator, createPost);


module.exports = router;

