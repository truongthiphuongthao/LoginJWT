const Mongoose = require('mongoose')
const url = "mongodb://localhost:27017/testjwt"
const Schema = Mongoose.Schema

Mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})

// model user
const User = Mongoose.model('User', new Mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
}))

// model post
const Post = Mongoose.model('Post', new Mongoose.Schema({
	post_content : String,
	image_links: [String]
}))

// model comment
const Comment = Mongoose.model('Comment', new Mongoose.Schema({
	comment_details: String,
	post_id : Schema.Types.ObjectId
}))

module.exports = {
  User: User,
  Post: Post,
  Comment: Comment,
}
