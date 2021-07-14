const router = require('express').Router();
const {
    getAllComments,
    getCommentById,
    addComment,
    updateComment,
    removeComment,
    addReaction,
    removeReaction
} = require('../../controllers/comment-controller');

// GET all and POST at /api/comments
router
.route('/')
.get(getAllComments)
.post(addComment);

// GET one, PUT, and DELETE at /api/comments/:id
router
.route('/:id')
.get(getCommentById)
.put(updateComment)
.delete(removeComment);

router
// /api/thoughts/:commentId/reactions
    .route('/:commentId/reactions')
    .post(addReaction)
    .delete(removeReaction)

module.exports = router;