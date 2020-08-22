const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var ProductSchema = new Schema({
  name: {
    type: String,
    lowercase: true,
    required: [true, "Le champ ne doit pas etre vide!"],
  },
  price: {
    type: String,
    required: [true, "Ce produit n'a pas de prix"],
  },
  description: {
    type: String,
    required: [true, "Description du produit vide!"],
  },
  category: {
    type: String,
    required: [true, "Un produit doit avoir un categorie"],
  },
  picture: {
    type: String,
  },
  userID: {
    type: Schema.ObjectId,
    required:true
  },
  isAvailable:{
    type:Boolean,
    default:true
  }
});

module.exports = mongoose.model("Product", ProductSchema);
