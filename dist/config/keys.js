"use strict";

module.exports = {
  JWT_SECRET: process.env.NODE_ENV === 'production' ? process.env.JWT_SECRET : 'thisisarandomsecret',
  DB_URL: process.env.NODE_ENV === 'production' ? process.env.DB_URL : 'mongodb://localhost:27017/leave-tracker'
};