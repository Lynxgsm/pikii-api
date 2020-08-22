const { User } = require("../models");
const jwt = require("../utils/jwt");

module.exports = {
  async register(req, res) {
    let newUser = new User(req.body);
    if (newUser.role != 1) {
      return res
        .status(403)
        .json({ error: "Cette requete n'est pas autorisé" });
    }
    newUser.validate((err) => {
      if (err) {
        return res.status(400).json(module.exports.isValid(err.errors));
      }
      newUser.password = newUser.hashPass(req.body.password);
      newUser.save((err, data) => {
        if (err) {
          if (err.name === "MongoError" && err.code === 11000) {
            return res.status(400).json({ error: err });
          }
          return res
            .status(500)
            .json({ error: "Erreur inconnue,Veuillez réessayer" });
        }
        delete data._doc.password;
        delete data._doc.isActive;
        delete data._doc.createdAt;
        delete data._doc.updatedAt;
        delete data._doc.__v;

        if ([3, 1].includes(data.role)) {
          return res.status(200).json({
            token: module.exports.token(data._doc),
            role: data.role,
            ...data._doc,
          });
        }
        return res.status(200).json({
          token: module.exports.token(data._doc, { expiresIn: 5 }),
          role: data.role,
        });
      });
    });
  },
  existUser(req, res) {
    User.findOne(req.body, (err, data) => {
      if (err) {
        if (err) {
          return res
            .status(500)
            .json({ error: "Erreur inconnue,Veuillez réessayer" });
        }
      }
      if (data == null) {
        return res.status(404).json({ message: "Aucun utilisateur trouvé!" });
      }
      return res.status(200).json({ message: "Utilisateur existant" });
    });
  },
  login(req, res) {
    const { username, password, phone } = req.body;
    if (
      ("username" in req.body && !username) ||
      ("phone" in req.body && !phone) ||
      !password
    ) {
      return res
        .status(400)
        .json({ error: "Tout les champs doivent etre remplie" });
    }
    delete req.body.password;
    User.findOne(req.body, (err, data) => {
      if (err) {
        return res
          .status(500)
          .json({ error: "Erreur inconnue,Veuillez réessayer" });
      }
      if (data == null) {
        return res.status(404).json({ error: "Aucun utilisateur trouvé!" });
      }
      if (!data.isActive) {
        return res
          .status(403)
          .json({ error: "Votre compte n'est pas activé!" });
      }
      if (!data.comparePass(password)) {
        return res
          .status(404)
          .json({ error: "Erreur de mot de passe ou utilisateur" });
      }
      delete data._doc.password;
      delete data._doc.isActive;
      if ([3, 1].includes(data.role)) {
        return res.status(200).json({
          token: module.exports.token(data._doc),
          role: data.role,
          ...data._doc,
        });
      }
      return res.status(200).json({
        token: module.exports.token(data._doc, { expiresIn: "24h" }),
        role: data.role,
      });
    });
  },
  isValid(obj) {
    const tmp = Object.keys(obj);
    return { error: obj[tmp[0]].message };
  },
  token(obj, expire) {
    return jwt.generateToken({ id: obj._id, role: obj.role }, expire);
  },
};
