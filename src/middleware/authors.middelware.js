const db = require('../config/db');

const checkAuthorCreate = async (req, res, next) =>{
  try {
    const { name, surname, email } = req.body;

    const [existAuthor] = await db.query(
      'SELECT id, name, surname, email FROM authors WHERE (name = ? AND surname = ?) OR email = ?',
      [name, surname, email]
    );
    if (existAuthor.length> 0) {
      return res.status(409).json({
        message: 'Name/surname or email already in use'
      });
    }
    return next();
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const checkAuthor = async (req, res, next ) => {
  try{
    const {name, surname} = req.params;
    const [existAuthor] = await db.query(
      'SELECT id FROM authors WHERE name = ? AND surname = ?',
      [name, surname]
    );
    if (existAuthor.length === 0) {
      return res.status(404).json({ message: 'Author not found' });
    }
    return next();
  }catch(err){
    return res.status(500).json({ message: err.message });
  }
};


module.exports = {checkAuthorCreate, checkAuthor};
