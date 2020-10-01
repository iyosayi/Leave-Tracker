"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _leave = _interopRequireDefault(require("../../validations/leave"));

var _errors = require("../../helpers/errors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const makeAddLeave = ({
  leaveDb
}) => {
  return async function addLeave({ ...details
  }) {
    console.log({
      details
    });
    const {
      errors,
      isValid
    } = (0, _leave.default)({ ...details
    });

    if (!isValid) {
      const errorResult = Object.keys(errors);
      errorResult.map(key => {
        const value = errors[key];
        throw new _errors.InvalidPropertyError(value);
      });
    }

    const {
      type,
      start,
      end
    } = details;
    const exists = await leaveDb.findByType({
      type
    });

    if (exists) {
      throw new _errors.UniqueConstraintError('Leave');
    }

    return leaveDb.insert({
      type,
      start,
      end
    });
  };
};

var _default = makeAddLeave;
exports.default = _default;