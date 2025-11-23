const AuthorsModel = require('../models/authors.model');

const getAll =  async (req, res) => {
    const authors = await AuthorsModel.selectAuthors();
    if(!authors) {
      res.status(404).json({
        message:'Authors not found'
      })
    }
    res.json(authors); 

};

const getAuthorByName = async ( req, res) => {
  const {name, surname} = req.params; 
  const author = await AuthorsModel.selectAuthorByName(name,surname); 
  res.json(author);
};

const createAuthor = async (req, res) => {
    const { name, surname, email, image } = req.body;
    const result = await AuthorsModel.insertAuthor({ name, surname, email, image });
    const author = await AuthorsModel.selectAuthorById(result.insertId);
    //Se devuelve el autor
    return res.status(201).json(author); 
};

const getPostsByAuthor = async (req, res) => {
  const {name,surname} = req.params;
  const posts = await AuthorsModel.selectPostsByAuthor(name,surname);
  if(!posts) {
    res.status(404).json({
      message:'Author dont have posts here'
    })
  }
  res.json(posts);
};
module.exports = { getAll, getAuthorByName, createAuthor, getPostsByAuthor };
