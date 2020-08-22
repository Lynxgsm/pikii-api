const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const unique = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: {
    type: String,
    trim: true,
  },
  firstname: {
    type: String,
    unique: false,
    trim: true,
  },
  phone: {
    type: String,
    unique: true,
    trim: true,
  },
  lastname: {
    type: String,
    unique: false,
    trim: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  isPartner: {
    type: Boolean,
  },
  solde: {
    type: String,
    default: 0,
  },
  password: {
    type: String,
    required: [true, "Un utilisateur doit avoir un mot de passe!"],
    trim: true,
  },
  role: {
    type: Number,
    required: [true, "Un utilisateur doit avoir un role!"],
  },
  hour: {
    type: Object,
  },
  ewallet: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
    trim: true
  },
  avatar: {
    type: String,
  },
  address: {
    type: String,
  },
  otherAdress: {
    type: String,
  },
  officeAdresse: {
    type: String,
  },
  homeAdresse: {
    type: String,
  },
  website: {
    type: String,
  },
  description: {
    type: String,
  },
  position: {
    type: Object,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

UserSchema.plugin(unique, { message: "Erreur, `{VALUE}` déja utilisé" });

UserSchema.methods.hashPass = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

UserSchema.methods.comparePass = function (password) {
  return bcrypt.compareSync(password, this.password);
};

const User = mongoose.model("User", UserSchema);

// UserSchema.index({email:1})
// UserSchema.index({ lastname: 1 }, { unique: false });
// UserSchema.index({ firstname: 1 }, { unique: false });
// User.collection.dropIndexes().then((v)=>{
//   console.log(v)
// })
User.collection.getIndexes().then((data) => {
  const key = Object.keys(data);
  const drop = ["firstname_1", "lastname_1", "email_1"];
  key.forEach((v) => {
    if (drop.includes(v)) {
      User.collection.dropIndex(v);
    }
  });
});

module.exports = User;
