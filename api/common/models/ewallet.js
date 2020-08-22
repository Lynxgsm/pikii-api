const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var EwalletSchema = new Schema({
  montant: {
    type: String,
    required: true,
  },
  client: {
    _id: Schema.ObjectId,
    phone: String,
    email: String,
    username: String,
  },
  cashpoint: {
    _id: Schema.ObjectId,
    name: String,
    email: String,
  },
  confirm: {
    type: Boolean,
  },
  valid: {
    type: Boolean,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  confirmationDate: {
    type: Date,
  },
});

module.exports = mongoose.model("Ewallet", EwalletSchema);
