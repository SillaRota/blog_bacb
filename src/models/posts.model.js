const db = require('../config/db');

// Devuelve los posts con los datos completos del autor
const selectPosts = async () => {
  const [posts] = await db.query(
    `SELECT 
       p.id,
       p.title,
       p.description,
       p.created_at,
       p.category,
       p.author_id,
       a.name   AS author_name,
       a.surname AS author_surname,
       a.email AS author_email,
       a.image AS author_image
     FROM posts p
     INNER JOIN authors a ON p.author_id = a.id`
  );
  if (posts.length === 0) return null;
  return posts;
};
// TODO: Hacer middleware para comprobar id post
const selectPostsById = async (id) => {
  const [post] = await db.query(
    `SELECT 
       p.id,
       p.title,
       p.description,
       p.created_at,
       p.category,
       p.author_id,
       a.name   AS author_name,
       a.surname AS author_surname,
       a.email AS author_email,
       a.image AS author_image
     FROM posts p
     INNER JOIN authors a ON p.author_id = a.id
     WHERE p.id = ?`
     ,[id]);
  if (post.length === 0) return null;
  return post[0]; 
};

const insertPost = async ({title,description,category,author_id}) => {
    const [result] = await db.query(
        'INSERT INTO posts (title,description,category,author_id) VALUES (?, ?, ?, ?)',
      [title,description,category,author_id]
    );
    return result;
};

module.exports = { selectPosts, selectPostsById, insertPost};
