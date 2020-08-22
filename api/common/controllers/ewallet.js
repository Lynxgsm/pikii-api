var { User, Ewallet } = require("../models");

module.exports = async (req, res) => {
  const user = await User.findOne({ phone: req.body.phone });
  if(!user){
    return res.status(404).json({error:`Aucun utilisateur qui utilise ce numero`})
  }
  const client = {
    _id: user._id,
    phone: user.phone,
    email: user.email,
    username: user.username,
  }
  const ewallet = new Ewallet({client,...req.body})
  await ewallet.save()
  return res.json(ewallet);
};
