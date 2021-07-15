const { User, Comment } = require('../models');

//all the comments fx as methods...
const commentController = {

  //get all comments...
  getAllComments(req, res) {
    Comment.find({})
      .populate({
        path: 'user',
        select: '-__v'
      })
      .select('-__v')
      .sort({ _id: -1 })
      .then(dbCommentData => res.json(dbCommentData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  //get a single comment by id...
  getCommentById({ params }, res) {
    Comment.findOne({ _id: params.commentId })
      .select('-__v')
      .then(dbCommentData => {
        //if error send 404...
        if (!dbCommentData) {
          res.status(404).json({ message: 'No comment found with this id!' });
          return;
        }
        res.json(dbCommentData);
      })
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  //add comment to user...
  addComment({ params, body }, res) {
    Comment.create(body)
      .then(({ _id }) => {
        return User.findOneAndUpdate(
          { _id: params.userId },
          { $addToSet: { comments: _id } },
          { new: true }
        );
      })
      .then(dbCommentData => {
        if (!dbCommentData) {
          res.status(404).json({ message: 'No user found with this id!' });
          return;
        }
        res.json(dbCommentData);
      })
      .catch(err => res.json(err));
  },

  //update comment by id...
  updateComment({ params, body }, res) {
    Comment.findOneAndUpdate({ _id: params.commentId }, body, { new: true, runValidators: true })
      .then(dbCommentData => {
        if (!dbCommenttData) {
          res.status(404).json({ message: 'No comment found with this id!' });
          return;
        }
        res.json(dbCommentData);
      })
      .catch(err => res.status(400).json(err));
  },

  //delete comment from user...
  removeComment({ params }, res) {
    Comment.findOneAndDelete({ _id: params.CommentId })
      .then(deletedComment => {
        if (!deletedComment) {
          return res.status(404).json({ message: 'There is no comment with this id!' })
        }
        return User.findOneAndUpdate(
          { _id: params.userId },
          { $pull: { comments: params.commentId } },
          { new: true }
        );
      })
      .then(dbCommentData => {
        if (!dbCommentData) {
          res.status(404).json({ message: 'No comment found with this id!' });
          return;
        }
        res.json(dbCommentData);
      })
      .catch(err => res.status(404).json(err))
  },

  //add reaction...
  addReaction({ params, body }, res) {
    Comment.findOneAndUpdate(
      { _id: params.commentId },
      { $addToSet: { reactions: body } },
      { new: true, addValidators: true }
    )
      .then(dbCommentData => {
        if (!dbCommentData) {
          return res.status(404).json({ message: 'No comment found with this id!' });
        }
        res.json(dbCommentData);
      })
      .catch(err => {
        console.log(err);
        return res.status(500).json(err);
      });
  },


  //delete reaction...
  removeReaction({ params }, res) {
    Comment.findOneAndUpdate(
      { _id: params.commentId },
      { $pull: { reactions: { _id: params.reactionId } } },
      { new: true }
    )
      .then(dbCommentData => {
        if (!dbCommentData) {
          return res.status(404).json({ message: 'No comment found with this id!' });
        }
        res.json(dbCommentData);
      })
      .catch(err => {
        console.log(err);
        return res.status(500).json(err);
      });
  }
};

module.exports = commentController;