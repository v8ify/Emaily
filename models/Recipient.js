const mongoose = require("mongoose");
const { Schema } = mongoose;

const recipientSchema = new Schema({
  email: String,
  checked: { type: Boolean, default: false },
});

module.exports = recipientSchema;
