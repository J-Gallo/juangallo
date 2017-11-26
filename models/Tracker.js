"use strict";

const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const TrackerSchema = new Schema({
  eventName: {
    type: String
  },
  data: {},
  verified: Boolean
});

module.exports = mongoose.model('Tracker', TrackerSchema);
