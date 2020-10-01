"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _errors = require("../../helpers/errors");

const makeGetUser = ({
  usersDb
}) => {
  return async function listUser({
    id
  } = {}) {
    const user = await usersDb.findById({
      id
    });

    if (!user) {
      throw new _errors.InvalidPropertyError('User does not exist.');
    }

    return user;
  };
};

var _default = makeGetUser;
exports.default = _default;