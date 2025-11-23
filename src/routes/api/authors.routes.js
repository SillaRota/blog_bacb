const router = require('express').Router();

const {
    getAll,
    getAuthorByName,
    createAuthor, 
    getPostsByAuthorID: getPostsById,
    getPostsByAuthorID
} = require('../../controllers/authors.controller');


// Define your routes here
router.get('/',getAll);
router.get('/:name/:surname/posts', getPostsByAuthorID);
router.get('/:name/:surname', getAuthorByName);
router.get('/:id/posts', getPostsById);

router.post('/',createAuthor); 
module.exports = router;
