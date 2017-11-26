"use strict";

const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const CampaignSchema = new Schema({
  campaignId: {
    type: String
  },
  campaignName: {
    type: String,
    required: true
  },
  client: {
    type: String,
    required: true
  },
  previewUrl: {
    type: String
  },
  destinationUrl: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  type: {
    type: String,
    enum: ['CPM', 'CPA', 'CPC', 'CPI'],
    required: true
  },
  country: [],
  geo: {
    type: String
  },
  clickId: {
    type: String,
    required: true
  },
  forwardRoute: {
    type: String
  },
  dailyCap: {
    type: String
  },
  device: [],
  status: Boolean
});


module.exports = mongoose.model('Campaign', CampaignSchema);
