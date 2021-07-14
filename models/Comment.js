const { Schema, model, Types } = require('mongoose');
//date format throught utils...
const dateFormat = require('../utils/dateFormat');
const { User } = require('./User');


//reaction schema...
const ReactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId()
  },
  reactionBody: {
    type: String,
    required: 'Please leave a reaction!',
    maxLength: 280
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (createdAtVal) => dateFormat(createdAtVal)
  }
},
  {
    toJSON: {
      getters: true
    }
  });



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
    get: (createdAtVal) => dateFormat(createdAtVal, 'dd/MM/yyyy hh:mm')
  },
  username:
  {
    type: String,
    required: true,
    ref: 'User'
  },
  reactions: [ReactionSchema]
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
const comment = model('comment', commentSchema);

//export comment model...
module.exports = comment;