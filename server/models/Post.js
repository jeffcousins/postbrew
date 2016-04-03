import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  postId: {
    type: String,
    unique: true,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  url: {
    type: String,
    unique: true,
    required: true
  },
  created: {
    type: String,
    required: true
  },
  brew: {
    type: String,
    required: true
  },
  comments: {
    type: Array,
    required: true
  }
});

const Post = mongoose.model('Post', postSchema);

export default Post;
