const jwt = require('jsonwebtoken');
const User = require('../../models/user.model');

const verifyTokenAndUser = (req, res, next) => {
  const token = req.cookies['jwt_token'];

  if (token) {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const { email } = decodedToken;

    next();
  } else {
    res.send('/login?message=Authentication failed!');
  }
};
module.exports = verifyTokenAndUser;
