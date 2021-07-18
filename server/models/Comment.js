const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
//date format throught utils...
const dateFormat = require('../utils/dateFormat');


//mongoose user schema...
const commentSchema = new Schema({
  commentText: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: timestamp => dateFormat(timestamp)
  },
  username:
  {
    type: String,
    required: true,
    ref: 'User'
  },
  reactions: [reactionSchema]
},
  //schema can use virtuals and getters...
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  }
);

//get total reactions on virtual...
commentSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
})

//create comment model...
const Comment = model('Comment', commentSchema);

//export comment model...
module.exports = Comment;