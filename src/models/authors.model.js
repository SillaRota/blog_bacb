const db = require('../config/db'); 


// Define your model here

const selectAuthors = async () => {
  const [result] = await db.query('SELECT * FROM authors'); 
  if (result.length === 0) return null;
  return result;
};

const selectAuthorByName = async (name, surname) => {
  const [result] = await db.query('SELECT * FROM authors WHERE name = ? AND surname = ?', [name, surname]);
  if (result.length === 0) return null;
  return result;
};

const selectAuthorById = async(id) =>{
  const [result] = await db.query('SELECT * FROM authors WHERE id = ?',[id]);
  if(result.length === 0) return null;
  return result;
};

const insertAuthor = async ({name,surname,email,image}) => {
    const [result] = await db.query(
        'INSERT INTO authors (name, surname, email, image) VALUES (?, ?, ?, ?)',
      [name, surname, email, image]
    );
    return result;
};






module.exports = {selectAuthors, selectAuthorByName,selectAuthorById,insertAuthor};
