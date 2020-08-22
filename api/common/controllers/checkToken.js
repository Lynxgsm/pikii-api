const { User } = require("../models");
const jwt = require("../utils/jwt");

module.exports = (req, res) => {
  try {
    const parse = jwt.verifyToken(req.body.token);
    User.findOne({ _id: parse.id ,role:parse.role}, { password: 0, isActive: 0 }, (e, data) => {
      if (e) {
        return res.status(500).json({ error: "Erreur unconue" });
      }
      if (data && data["_id"]) {
        return res.status(200).json({ success: true, ...data._doc });
      } else {
      return res.status(401).json({error:"Utilisateur non autorisé!"});
      }
    });
  } catch (error) {
    return res.status(401).json({error:"Utilisateur non autorisé!"});
  }
};
