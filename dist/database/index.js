"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _errors = require("../helpers/errors");

var _keys = require("../config/keys");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function setupDB() {
  await _mongoose.default.connect(_keys.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log('Connected to DB');
  }).catch(error => {
    throw new _errors.DatabaseError(error.message);
  });
}

var _default = setupDB;
exports.default = _default;