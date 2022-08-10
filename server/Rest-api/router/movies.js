const express = require('express');
const router = express.Router();
const { auth, isOwner, isNotOwner, isNotLiked, isLiked } = require('../utils');
const movieController = require('../controllers/movieController');

// middleware that is specific to this router

// router.get('/latestMovies', movieController.getLatestMovies);
// router.post('/search', movieController.searchMovie);

router.get('/details/:movieId', movieController.getMovie);
router.get('/catalog', movieController.getMovies);

router.get('/myMovies', auth(), movieController.getMyMovies);
router.post('/create', auth(), movieController.createMovie);

router.get('/:movieId/like', auth(), isNotOwner(), isNotLiked(), movieController.likeMovie);
router.get('/:movieId/dislike', auth(), isNotOwner(), isLiked(), movieController.dislikeMovie);

router.put('/:movieId/edit', auth(), isOwner(), movieController.editMovie);
router.delete('/:movieId/delete', auth(), isOwner(), movieController.deleteMovie);

// router.get('/my-trips/:id/reservations', auth(), themeController.getReservations);

module.exports = router