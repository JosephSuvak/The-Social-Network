const { User } = require('../models');

const userController = {

    // get all users
    getAllUsers(req, res) {
        User.find({})
        .then((dbUserData) => res.json(dbUserData))
        .catch((err) => {
            console.log(err);
            res.status(400).json(err);
        });
    },

    // get user by ID
    getUserById({ params }, res) {
        User.findOne({ _id: params.id })
          .then((dbUserData) => {
            if (!dbUserData) {
              res.status(404).json({ message: "No User found with this id! " });
              return;
            }
            res.json(dbUserData);
          })
          .catch((err) => {
            console.log(err);
            res.status(400).json(err);
          });
      },
    
      // Create a new user
      createUser({ body }, res) {
        User.create(body)
          .then((dbUserData) => res.json(dbUserData))
          .catch((err) => res.status(400).json(err));
      },
    
      // Update a user by its _id
      updateUser({ params, body }, res) {
        User.findOneAndUpdate({ _id: params.id }, body, { new: true })
          .then((dbUserData) => {
            if (!dbUserData) {
              res.status(404).json({ message: "No User found with this id! " });
              return;
            }
            res.json(dbUserData);
          })
          .catch((err) => res.status(400).json(err));
      },
    
      // delete User
      deleteUser({ params }, res) {
        User.findOneAndDelete({ _id: params.id })
          .then((dbUserData) => {
            if (!dbUserData) {
              res.status(404).json({ message: "No User found with this id!" });
              return;
            }
            res.json(dbUserData);
          })
          .catch((err) => res.status(400).json(err));
      },
};