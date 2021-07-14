const router = require('express').Router();
const {
    getAllComments,
    getCommentById,
    createComment,
    updateComment,
    deleteComment,
    addReaction,
    removeReaction
} = require('../../controllers/comment-controller');

// GET all and POST at /api/comments
router
.route('/')
.get(getAllComments)
.post(createComment);

// GET one, PUT, and DELETE at /api/comments/:id
router
.route('/:id')
.get(getCommentById)
.put(updateComment)
.delete(deleteComment);

router
// /api/thoughts/:commentId/reactions
    .route('/:commentId/reactions')
    .post(addReaction)
    .delete(removeReaction)

module.exports = router;