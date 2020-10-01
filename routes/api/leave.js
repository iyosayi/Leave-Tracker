const express = require('express');
const router = express.Router();
const LeaveModel = require('../../model/Leaves')

const validateLeaveInput = require('../../validations/leave')
router.post('/addleave', (req, res) => {
    console.log(req.body)
    const { errors, isValid } = validateLeaveInput(req.body)
    if (!isValid) {
        return res.status(400).json(errors)
    }
    LeaveModel.findOne({
        type: req.body.type
    }).then(user => {
        if (user) {
            return res.status(400).json({ message: 'Leave Type already exist' })
        } else {
            const newLeave = new LeaveModel({
                type: req.body.type,
                start: req.body.start,
                end: req.body.end
            })
            newLeave.save()
                .then(leave => {
                    res.status(200).json({ message: leave })
                })
                .catch(error => {
                    console.log(error)
                    res.status(400).json({ message: error })
                })
        }
    }).catch(error => {
        console.log(error);
        res.status(400).json({ message: error })
    })

})

router.get('/getleave', (req, res) => {
    LeaveModel.find()
        .then(leave => {
            console.log(leave)
            return res.status(200).json({ message: leave })
        })
        .catch(error => {
            console.log(error)
            return res.status(401).json({ message: error })
        })
})
module.exports = router
