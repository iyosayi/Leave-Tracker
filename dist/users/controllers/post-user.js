"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _httpResponse = _interopRequireDefault(require("../../helpers/http-response"));

var _wrapAsync = _interopRequireDefault(require("../../helpers/wrapAsync"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const makePostUser = ({
  addUser
}) => {
  return (0, _wrapAsync.default)(async httpRequest => {
    let { ...details
    } = httpRequest.body;
    const user = await addUser({ ...details
    });
    return (0, _httpResponse.default)({
      status: 'OK',
      statusCode: 201,
      data: [user],
      message: 'User created'
    });
  });
};

var _default = makePostUser;
exports.default = _default;