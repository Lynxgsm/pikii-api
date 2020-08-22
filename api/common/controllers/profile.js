var User = require("../models/user");
module.exports = (req, res) => {
  if (!req.token) {
    return res.sendStatus(403);
  }
  const pass = req.body.password || null;
  if (pass) {
    req.body.password = User.schema.methods.hashPass(pass);
  }
  User.updateOne({ _id: req.token.id }, { $set: req.body }, (err) => {
    if (err) {
      return res.status(500).json({ error: "Erreur inconnue" });
    }
    return res.json({ message: "Mise à jour effectué!" });
  });
};
