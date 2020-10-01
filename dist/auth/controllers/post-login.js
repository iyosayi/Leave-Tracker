"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _wrapAsync = _interopRequireDefault(require("../../helpers/wrapAsync"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const makePostLogin = ({
  loginUser
}) => {
  return (0, _wrapAsync.default)(async httpRequest => {
    const { ...details
    } = httpRequest.body;
    const token = await loginUser({ ...details
    });
    return {
      headers: {
        'Content-Type': 'application/json'
      },
      status: 'OK',
      statusCode: 200,
      message: 'Authorized',
      data: token
    };
  });
};

var _default = makePostLogin;
exports.default = _default;