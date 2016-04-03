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
      created: 'yesterday'
    },
    {
      brewId: 'react',
      title: 'React.js',
      description: 'Build stuff in React.',
      url: '/b/react',
      created: 'today'
    }
  ];

  brews.forEach((brew) => {
    new Brew(brew).save();
  });

});
