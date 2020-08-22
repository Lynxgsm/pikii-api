const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var DeliveriesSchema = new Schema({
  destination_address: {
    type: Object,
  },
  delivery_date: {
    type: Date,
  },
  isPayed: {
    type: Number,
    default: 0,
  },
  delivery_code: {
    type: String,
  },
  totalPrice: {
    type: String,
  },
  expedition_address: {
    type: Object,
  },
  request_date: {
    type: Date,
    default: Date.now,
  },
  type: {
    type: Number,
    required: true,
  },
  deliverer: {
    type: Schema.ObjectId,
  },
  expeditionId: {
    type: Schema.ObjectId,
  },
  client: {
    _id: Schema.ObjectId,
    firstname: String,
    phone: String,
  },
  items: [],
  delivery_status: {
    type: Number,
    default: 0,
  },
  isAvailable: {
    type: Boolean,
  },
  end_time: {
    type: Date,
  },
  payement_type: {
    type: Number,
  },
});

module.exports = mongoose.model("Deliveries", DeliveriesSchema);
