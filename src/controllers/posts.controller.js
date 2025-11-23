const PostsModel = require('../models/posts.model'); 

const getAll = async (req, res) => {
    const posts = await PostsModel.selectPosts();
    if(!posts) {
      res.status(404).json({
        message: "Posts not found"
      })
    }
    res.json(posts);
};

const getPostById = async (req, res) => {
  const {id} = req.params;
  const post = await PostsModel.selectPostsById(id);
  res.json(post);

};

const createPost = async (req,res) => {
    const {title , description, category, author_id} =  req.body;
    const result = await PostsModel.insertPost({title,description,category,author_id});
    
    const post = await PostsModel.selectPostsById(result.insertId);
    return res.status(201).json(post);

};

module.exports = { getAll,getPostById, createPost };
