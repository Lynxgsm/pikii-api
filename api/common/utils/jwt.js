const jwt = require("jsonwebtoken");
const secure = "SECURE";

module.exports = {
  generateToken(payload,expire) {
    return jwt.sign(payload, secure, expire);
  },
  verifyToken(token) {
    var tokenParsed = token.split(" ")[1];
    return jwt.verify(tokenParsed, secure);
  },
};
