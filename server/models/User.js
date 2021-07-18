const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

//user schema with mongoose...
const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },

    email: {
        //email validation within string type...
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Please enter a valid e-mail address']  
    },

    password: {
        type: String,
        required: true,
        minlength: 5
      },

    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'comment'
        }
    ],

    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
},
    //tell schema it can use virtuals...
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

// set up pre-save middleware to create password
userSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });

  // compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function(password) {
    return bcrypt.compare(password, this.password);
  };

//get total amount of friends on virtual...
userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

//create the User model...
const User = model('User', userSchema);

//export User model...
module.exports = User;