const db = require('../config/db');

const checkPost = async (req,res,next) =>{
  try {
      const { id } = req.params; 
      const [existPost] = await db.query(
        'SELECT * FROM posts WHERE id = ?',
        [id]
      );
      if (existPost.length === 0){
        return res.status(404).json({message:'Post not found'});
      }
      return next();
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
};


module.exports = {checkPost};
