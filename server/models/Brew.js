import mongoose from 'mongoose';

const brewSchema = mongoose.Schema({
  brewId: {
    type: String,
    unique: true,
    lowercase: true,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  created: {
    type: String,
    required: true
  }
});

const Brew = mongoose.model('Brew', brewSchema);

export default Brew;
