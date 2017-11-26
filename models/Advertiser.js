"use strict";

const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const AdvertiserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String
  }
});


module.exports = mongoose.model('Advertiser', AdvertiserSchema);
