const db = require('../config/db'); 

const selectAuthors = async () => {
  const [result] = await db.query('SELECT * FROM authors'); 
  if (result.length === 0) return null;
  return result;
};

const selectAuthorByName = async (name, surname) => {
  const [result] = await db.query('SELECT * FROM authors WHERE name = ? AND surname = ?', [name, surname]);
  return result;
};

const selectAuthorById = async (id) => {
   const [result] = await db.query('SELECT * FROM authors WHERE id = ?', [id]);
  if (result.length === 0) return null;
  return result;
};

const insertAuthor = async ({name,surname,email,image}) => {
    const [result] = await db.query(
        'INSERT INTO authors (name, surname, email, image) VALUES (?, ?, ?, ?)',
      [name, surname, email, image]
    );
    return result;
};

const selectPostsByAuthor = async (name, surname) => {
  const [rows] = await db.query(
    `SELECT p.*
     FROM posts p
     INNER JOIN authors a ON p.author_id = a.id
     WHERE a.name = ? AND a.surname = ?`,
    [name, surname]
  );
  if (rows.length === 0) return null;
  return rows;
};


module.exports = {
    selectAuthors,
    selectAuthorByName,
    selectAuthorById,
    insertAuthor,
    selectPostsByAuthor
  };
