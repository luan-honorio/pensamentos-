const express = require('express');
const ThoughtsController = require('../controllers/ThoughtsController');

const router = express.Router();

router.get("/thoughts/dashboard", ThoughtsController.dashboard);
router.get('/thought-create', ThoughtsController.registerThought)
router.get('/thoughts/edit/:id', ThoughtsController.showPageEditThought);
router.get('/thoughts/remove/:id', ThoughtsController.removeThoughts);

router.post('/thoughts/create', ThoughtsController.createThoughts);
router.post('/thoughts/update/:id', ThoughtsController.updateThought);


module.exports = router;