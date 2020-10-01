"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _register = _interopRequireDefault(require("../../validations/register"));

var _errors = require("../../helpers/errors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const makeAddUser = ({
  usersDb,
  gravatar
}) => {
  return async function addUser({ ...details
  }) {
    const {
      errors,
      isValid
    } = (0, _register.default)({ ...details
    });
    const {
      email,
      name,
      password
    } = details;

    if (!isValid) {
      const errorResult = Object.keys(errors);
      errorResult.map(key => {
        const value = errors[key];
        throw new _errors.InvalidPropertyError(value);
      });
    }

    const exists = await usersDb.findByEmail({
      email
    });

    if (exists) {
      throw new _errors.UniqueConstraintError('Email');
    }

    const avatar = gravatar.url(email.toLowerCase());
    return usersDb.insert({
      name,
      email,
      password,
      avatar
    });
  };
};

var _default = makeAddUser;
exports.default = _default;