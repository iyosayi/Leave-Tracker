"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _httpResponse = _interopRequireDefault(require("../../helpers/http-response"));

var _wrapAsync = _interopRequireDefault(require("../../helpers/wrapAsync"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const makePostLeave = ({
  addLeave
}) => {
  return (0, _wrapAsync.default)(async httpRequest => {
    const { ...details
    } = httpRequest.body;
    const leave = await addLeave({ ...details
    });
    return (0, _httpResponse.default)({
      status: 'OK',
      statusCode: 201,
      data: [leave],
      message: 'Leave created'
    });
  });
};

var _default = makePostLeave;
exports.default = _default;