"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = exports.path = void 0;

var _express = _interopRequireDefault(require("../../express"));

var _controllers = require("../../leaves/controllers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const path = '/leaves';
exports.path = path;

const config = router => {
  router.post('/', (0, _express.default)(_controllers.postLeave)).get('/', (0, _express.default)(_controllers.getLeaves));
  return router;
};

exports.config = config;