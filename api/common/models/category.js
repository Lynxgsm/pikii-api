const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var CategorySchema = new Schema({
  name: {
    type: String,
    lowercase: true,
    required: [true, "Le champ nom ne doit pas etre vide!"],
  },
  role: {
    type: Number,
    required: true,
  },
});

const Category = mongoose.model("Category", CategorySchema);
CategorySchema.index({ name: 1 }, { unique: false });
module.exports = Category;
