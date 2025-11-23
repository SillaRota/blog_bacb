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
  if(!author) {
    res.status(404).json({
      message:'Author not found'
    })
  }
  res.json(author);
};

const createAuthor = async (req, res) => {
  try {
    const { name, surname, email, image } = req.body;
    const result = await AuthorsModel.insertAuthor({ name, surname, email, image });
    const author = await AuthorsModel.selectAuthorById(result.insertId);

    if (!author) {
      //Se crea el autor anteriormente pero por error de la BBDD no se puede recuperar.
      return res.status(500).json({ message: 'Author not found in BBDD' });
    }
    //Se devuelve el autor
    return res.status(201).json(author);
  } catch (error) {
    if (error.code === 'ER_DUP_ENTRY') {
      // Entrada duplicada por name y surname o por email
      return res.status(409).json({ message: 'Name/Surname or email already in use' });
    }
    //Cualquier error diferente para capturarlo. 
    return res.status(500).json({ message: error.message });
  }
};

const getPostsByAuthorID = (req, res) => {
  res.json({
    message:'holi'
  })
};
module.exports = { getAll, getAuthorByName, createAuthor, getPostsByAuthorID };
