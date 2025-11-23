const router = require('express').Router();

const { 
    getAll, 
    getPostById, 
    createPost 
} = require('../../controllers/posts.controller');

const { checkPost} = require('../../middleware/posts.middleware');

// Métodos GET
router.get('/', getAll );
router.get('/:id',checkPost, getPostById);
// Métodos POST
router.post('/', createPost);

module.exports = router;
