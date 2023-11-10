const Post = require("../models/post");

const postController = {
  getPosts: async (req, res)=>{
    await Post.find()
      .then((posts)=>
        {
            return res.status(200).json(
                {
                    existingPosts:posts
                }
            );
        }).catch((err)=>
        {
            return res.status(400).json(
                {
                    Error : 'Error founded  while get Post '+err
                }
            )
        });
  },

  createPost: async (req, res) => {
    let newPost = new Post(req.body);

    await newPost
      .save()
      .then(() => {
        return res.status(200).json({
          Success: "Post Saved Successfully",
        });
      })
      .catch((err) => {
        return res.status(400).json({
          Error: "Error founded  while saving Post " + err,
        });
      });
  },

  updatePost: async (req, res) => {
    const postId = req.params.postId;
    const updatedData = req.body;

    await Post.findOneAndUpdate({ _id: postId }, updatedData)
      .then((updatedPost) => {
        if (updatedPost) {
          return res.status(200).json({
            message: "Post updated successfully",
            updatedPost: updatedPost,
          });
        } else {
          return res.status(404).json({
            Success: false,
            message: "Post not found",
          });
        }
      })
      .catch((err) => {
        return res.status(422).json({
          Success: false,
          Error: "Error occurred while updating post: " + err,
        });
      });
  },

  deletePost: async(req, res) => {
    const postId = req.params.postId;

    await Post.findOneAndDelete({ _id: postId })
        .then((deletedPost) => {
            if (deletedPost) {
                return res.status(200).json({
                    message: 'Post deleted successfully',
                    deletedPost: deletedPost,
                });
            }
        })
        .catch((err) => {
            return res.status(400).json({
                Error: 'Error occurred while deleting post: ' + err,
            });
        });
}
};

module.exports = postController;
