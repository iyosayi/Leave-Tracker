"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _userModel = _interopRequireDefault(require("./userModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const makeUsersDb = ({
  hashPassword,
  createToken
}) => {
  async function insert({ ...details
  }) {
    if (details.password) {
      details.password = await hashPassword(details.password);
    }

    const user = new _userModel.default({ ...details
    });
    const payload = {
      id: user._id
    };
    const token = await createToken(payload);
    await user.save();
    return {
      user,
      token
    };
  }

  async function findAll() {
    return _userModel.default.find();
  }

  async function findById({
    id: _id
  }) {
    return _userModel.default.findById(_id);
  }

  async function findByEmail({
    email
  }) {
    return _userModel.default.findOne({
      email
    });
  }

  return Object.freeze({
    insert,
    findAll,
    findById,
    findByEmail
  });
};

var _default = makeUsersDb;
exports.default = _default;