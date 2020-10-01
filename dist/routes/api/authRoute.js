"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = config;
exports.path = void 0;

var _express = _interopRequireDefault(require("../../express"));

var _controllers = require("../../auth/controllers");

var _middleware = _interopRequireDefault(require("../../middleware"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const path = '/auth';
exports.path = path;

function config(router) {
  router.get('/', (0, _express.default)((0, _middleware.default)(_controllers.getUsers))).post('/', (0, _express.default)(_controllers.postLogin));
  return router;
}