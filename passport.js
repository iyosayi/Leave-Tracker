const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const passport = require('passport');
const UserModel = require('../model/Users');
const keys = require('./keys')

const opts = {}
opts.jwtFromRequest = ExtractJWT.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretkey;

module.exports = passport => {
    passport.use(new JwtStrategy(opts, (payload, done) => {
        UserModel.findById(payload.id)
            .then(user => {
                if (user) {
                    return done(null, user)
                }
                return done(null, false)
            })
            .catch(error => {
                console.log(error)
            })
    }))
}