const { User } = require("../common/models");
const Service = require("../common/controllers/crud");
const utils = require("./checkError");

module.exports = {
  find(req, res) {
    User.find({}, { password: 0 }, (err, data) => {
      if (err) {
        return res.status(500).json({ error: "Erreur de serveur" });
      }
      return res.json(data);
    });
  },
  create(req, res) {
    let newUser = new User({ ...req.body, password: "password" });
    newUser.validate((err) => {
      if (err) {
        return res.status(400).json(utils.isValid(err.errors));
      }
      newUser.password = newUser.hashPass(newUser.password);
      newUser.save((err, data) => {
        if (err) {
          return res
            .status(400)
            .json({ error: "Nom d'utilisateur deja existant!" });
        }
        return res.status(200).json(data);
      });
    });
  },
  update(req, res) {
    Service.update(User)(req, res);
  },
  delete(req, res) {
    Service.delete(User)(req,res)
  },
};
