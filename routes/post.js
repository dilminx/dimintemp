const express = require('express');
const Posts = require('../models/post');
const postController = require('../controllers/postController');

const router = express.Router();

router.post('/save',postController.createPost);
router.put('/update/:postId', postController.updatePost);
router.delete('/delete/:postId', postController.deletePost);
router.get('/', postController.getPosts);


module.exports =router;
