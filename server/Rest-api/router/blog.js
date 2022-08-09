const express = require('express');
const router = express.Router();
const { blogController } = require('../controllers');
const { auth } = require('../utils');

router.get('/comments', blogController.getComments);
router.post('/comments', auth(), blogController.postComment);

module.exports = router