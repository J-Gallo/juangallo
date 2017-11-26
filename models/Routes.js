"use strict";

const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const RouteSchema = new Schema({
  routeId: {
    type: String
  },
  campaignName: {
    type: String,
    required: true
  },
  campaignId: {
    type: String,
    required: true
  },
  provider: {
    type: String
  },
  price: {
    type: String
  },
  urlProvider: {},
  // {
  //   testUrl: testRoute.lutionads.com/{{routeId}}?aff_token={{clickId}}&aff_source={{pubId}}
  //   fuente: route.lutionads.com/{{routeId}}?aff_token={{clickId}}&aff_source={{pubId}}
  // }
  redirectsTo: {
    type: String
  },
  clickId: {
    type: String
  }
});


module.exports = mongoose.model('Route', RouteSchema);
