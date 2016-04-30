const auth = {};

auth.signUp = (req, res, next) => {
  const { email, password } = req.body;
  res.send({ email: email });
}

export default auth;
