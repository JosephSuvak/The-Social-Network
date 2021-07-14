const { Comment } = require("../models");

const commentController = {

  // get all comments
  getAllComments(req, res) {
    Comment.find({})
    .populate({ path: 'reactions', select: '-__v' })
        .select('-__v')
      .then((dbCommentData) => res.json(dbCommentData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // GET comment by id 
  getCommentById({ params }, res) {
    Comment.findOne({ _id: params.id })
    .populate({ path: 'reactions', select: '-__v' })
        .select('-__v')
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          res.status(404).json({ message: "No Thoughts found with this id! " });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // Create a new Comment
  createComment({ body }, res) {
    Comment.create(body)
      .then((dbCommentData) => res.json(dbCommentData))
      .catch((err) => res.status(400).json(err));
  },

  // Update a Thought by its _id
  updateComment({ params, body }, res) {
    Comment.findOneAndUpdate({ _id: params.id }, body, { new: true })
      .then((dbCommentData) => {
        if (!dbCommentData) {
          res.status(404).json({ message: "No Comment found with this id! " });
          return;
        }
        res.json(dbCommentData);
      })
      .catch((err) => res.status(400).json(err));
  },

  // delete comment
deleteComment({ params }, res) {
    Comment.findOneAndDelete({ _id: params.id })
      .then(dbCommentData => {
        if (!dbCommentData) {
          res.status(404).json({ message: 'No Comment found with this id!' });
          return;
        }
        res.json(dbCommentData);
      })
      .catch(err => res.status(400).json(err));
  },

  addReaction(req, res) {
    console.log("INCOMING BODY", body)
    Comment.findOneAndUpdate(
        { _id: req.params.commentId },
        { $push: { reactions: req.body } },
        { new: true }
    )
        .then(dbCommentData => {
            if (!dbCommentData) {
                res.status(404).json({ message: 'No User found with this id!' });
                return;
            }
            res.json(dbCommentData);
        })
        .catch(err => res.json(err));
},
// remove reaction
removeReaction({ params }, res) {
    Comment.findOneAndUpdate(
        { _id: params.commentId },
        { $pull: { reactions: { reactionId: params.reactionId } } },
        { new: true }
    )
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => res.json(err));
}

};

module.exports = commentController;