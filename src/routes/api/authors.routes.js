const router = require('express').Router();

const {
    getAll,
    getAuthorByName,
    createAuthor, 
    getPostsByAuthor
} = require('../../controllers/authors.controller');

const { checkAuthorCreate, checkAuthor } = require('../../middleware/authors.middelware');

// Define your routes here
router.get('/',getAll);
router.get('/:name/:surname/posts',checkAuthor, getPostsByAuthor);
router.get('/:name/:surname',checkAuthor ,getAuthorByName);

router.post('/', checkAuthorCreate, createAuthor); 
module.exports = router;
