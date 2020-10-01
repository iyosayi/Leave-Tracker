const express = require('express');
const UserModel = require('../../model/Users');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');

router.get('/fetchall', async(req, res) => {
    try {
        var userProfile= await UserModel.find();
        var user = userProfile.map(eachuser=>{
            return {
                _id: eachuser['_id'], name: eachuser['name'],
                email: eachuser['email'], avatar: eachuser['avatar']
            }
        })
        return res.status(200).json({user})
    } catch (error) {
        console.log(error)
        return res.status(400).json(error)
        
    }
})

router.post('/register', (req, res) => {
    UserModel.findOne({ email: req.body.email.toLowerCase() })
        .then(user => {
            if (user) {
                return res.status(400).json({ message: "Email Already exist" })
            } else {
                const hash = bcrypt.hashSync(req.body.password.toString(), 10)
                const avatar = gravatar.url(req.body.email.toLowerCase(), { s: '200', r: 'pg', d: '404' })
                const NewUser = new UserModel({
                    name: req.body.name,
                    email: req.body.email.toLowerCase(),
                    password: hash,
                    avatar: avatar
                });
                console.log(NewUser)
                NewUser.save()
                    .then(ele => {
                        res.status(200).json({ message: ele })
                    })
                    .catch(error => {
                        console.log(error)
                        res.status(400).json({ message: error + "error" })
                    })
            }
        })
        .catch(error => {
            console.log(error)
            res.status(400).json({ message: error })
        })

})

router.post('/login', (req, res) => {
    const email = req.body.email.toLowerCase();
    const password = req.body.password.toString();
    UserModel.findOne({ email: email })
        .then(user => {
            if (!user) {
                return res.status(401).json({ message: 'User Not Found' })
            } else {
                bcrypt.compare(password, user.password)
                    .then(isMatch => {
                        if (isMatch) {
                            const payload = {
                                name: user.name,
                                avatar: user.avatar,
                                id: user._id
                            }
                            jwt.sign(payload, keys.secretkey, { expiresIn: 3600 }, (err, token) => {
                                if (err)
                                    console.log(err)

                                return res.status(200).json({
                                    success: true,
                                    message: 'Bearer ' + token
                                })
                            })
                        } else {
                            return res.status(401).json({ message: 'Password didn\'t match' })
                        }
                    })
            }
        })
})

router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.json({ message: req.user })
})



module.exports = router;