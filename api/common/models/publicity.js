const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var PubSchema = new Schema({
  picture: {
    type: String,
    required: [true, "Aucun image à été envoyée!"],
  },
  user: {
    _id: Schema.ObjectId,
    name: String,
    role: Number,
  },
  description: {
    type: String,
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

module.exports = mongoose.model("Publicity", PubSchema);
