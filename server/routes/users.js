// import User from '../models/user';

// const users = (app) => {
//   app.route('/api/users')
//     .get((req, res) => {
//       Brew.find(function(error, items) {
//         res.send(items);
//       });
//     })
//     .post((req, res) => {
//       console.log('Adding user:', user);
//       const user = req.body;
//       const brewItem = new User(user);
//       brewItem.save(function(err, data) {
//         res.status(300).send();
//       });
//     });

//   app.route('/api/u/:username')
//     .get((req, res) => {
//       User.find({
//         username: req.params.id
//       }, function(err, data) {
//         if (err) {
//           res.send(err);
//         } else {
//           res.send(data);
//         }
//       });
//     })
// };

// export default users;
