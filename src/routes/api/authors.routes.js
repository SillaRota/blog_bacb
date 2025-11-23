const router = require('express').Router();

const {
    getAll,
    getAuthorByName,
    createAuthor, 
    getPostsByAuthorID
} = require('../../controllers/authors.controller');


// Define your routes here
router.get('/',getAll);
router.get('/:name/:surname', getAuthorByName);
router.get('/:id/posts', getPostsByAuthorID);

router.post('/',createAuthor); 
module.exports = router;
