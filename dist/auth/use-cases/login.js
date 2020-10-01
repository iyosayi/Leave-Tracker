"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _login = _interopRequireDefault(require("../../validations/login"));

var _errors = require("../../helpers/errors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const makeLoginUser = ({
  usersDb,
  validatePassword,
  sendToken
}) => {
  return async function loginUser({ ...details
  }) {
    const {
      errors,
      isValid
    } = (0, _login.default)({ ...details
    });

    if (!isValid) {
      const errorResult = Object.keys(errors);
      errorResult.map(key => {
        const value = errors[key];
        throw new _errors.UnauthorizedError(value);
      });
    }

    const {
      email,
      password
    } = details;
    const user = await usersDb.findByEmail({
      email
    });

    if (!user) {
      throw new _errors.InvalidPropertyError('User does not exist.');
    }

    const isMatch = await validatePassword(password, user.password);

    if (!isMatch) {
      throw new _errors.InvalidPropertyError('Password is incorrect.');
    }

    const payload = {
      id: user._id
    };
    return sendToken(payload);
  };
};

var _default = makeLoginUser;
exports.default = _default;