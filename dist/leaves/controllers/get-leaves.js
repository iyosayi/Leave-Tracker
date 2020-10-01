"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _httpResponse = _interopRequireDefault(require("../../helpers/http-response"));

var _wrapAsync = _interopRequireDefault(require("../../helpers/wrapAsync"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const makeGetLeaves = ({
  listLeave
}) => {
  return (0, _wrapAsync.default)(async httpRequest => {
    const leave = await listLeave();
    return (0, _httpResponse.default)({
      status: 'OK',
      statusCode: 200,
      data: [leave],
      message: 'Leaves'
    });
  });
};

var _default = makeGetLeaves;
exports.default = _default;