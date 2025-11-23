const router = require('express').Router();

const postsRoutes = require('./api/posts.routes');
const authorsRoutes = require('./api/authors.routes');


// Define your routes here
router.use('/posts', postsRoutes);
router.use('/authors', authorsRoutes);



module.exports = router;
