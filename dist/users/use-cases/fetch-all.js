"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const makeFetchAll = ({
  usersDb,
  leaveDb
}) => {
  return async function fetchAll() {
    const users = await usersDb.findAll();
    const leave = await leaveDb.findAll();
    const result = users.map(user => {
      return {
        _id: user._id,
        name: user.name,
        email: user.email,
        avatar: user.avatar
      };
    });
    return {
      result,
      leave
    };
  };
};

var _default = makeFetchAll;
exports.default = _default;