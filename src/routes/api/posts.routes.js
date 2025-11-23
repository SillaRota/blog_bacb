const router = require('express').Router();

const { 
    getAll, 
    getPostById, 
    createPost 
} = require('../../controllers/posts.controller');


// Métodos GET
router.get('/', getAll );
router.get('/:id', getPostById);
// Métodos POST
router.post('/', createPost) 

module.exports = router;
