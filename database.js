import mongoose from 'mongoose';
import Brew from './server/models/Brew';

mongoose.connect('mongodb://localhost/db', () => {
  console.log('Connected to MongoDB database.');

  mongoose.connection.db.dropDatabase();

  const brews = [
    {
      brewId: 'javascript',
      title: 'JavaScript',
      description: 'Everything you want to know about JavaScript.',
      url: '/b/javascript',
      created: 'yesterday',
      'posts': [
        {'p_id': '001', 'title': 'First post!', 'content': 'This is the first post.', 'author': 'jeffcousins'},
        {'p_id': '002', 'title': 'Arrow function: wat', 'content': 'Test post content goes here.', 'author': 'meowmeow'},
        {'p_id': '003', 'title': 'I\'m in love with ES6.', 'content': 'ES2015 rocks.', 'author': 'cakebatter'}
      ]
    },
    {
      brewId: 'react',
      title: 'React.js',
      description: 'Build stuff in React.',
      url: '/b/react',
      created: 'today',
      'posts': [
        {'p_id': '001', 'title': 'First React post!', 'content': 'This is the first post.', 'author': 'jeffcousins'},
        {'p_id': '002', 'title': 'React Router.', 'content': 'Routing is so coooool.', 'author': 'cakebatter'},
        {'p_id': '003', 'title': 'Redux FTW', 'content': 'Test post content goes here.', 'author': 'meowmeow'}
      ]
    }
  ];

  brews.forEach((brew) => {
    new Brew(brew).save();
  });

});
