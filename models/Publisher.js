"use strict";

const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const PublisherSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String
  },
  method: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  params: {},
  clickId: {
    type: String
  },
  publisherIdName: {
    type: String
  },
  payoutName: {
    type: String
  },
  payoutCurrency: {
    type: String
  },
  specificClass: {
    type: String
  },
  owner: {
    type: String
  }
});


module.exports = mongoose.model('Publisher', PublisherSchema);
