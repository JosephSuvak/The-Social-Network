const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require('../../controllers/user-controller');

// GET all and POST at /api/users
router
.route('/')
.get(getAllUsers)
.post(createUser);

// GET one, PUT, and DELETE at /api/Users/:id
router
.route('/:id')
.get(getUserById)
.put(updateUser)
.delete(deleteUser);

// Post and Delete at /api/users/:userId/friends/:friendId
router
    .route("/:id/friends/:friendId")
    .post(addFriend)
    .delete(removeFriend);

module.exports = router;


module.exports = router;