const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors')

const db = require('./config/keys').MONGO_KEY;

const LeaveRoute = require('./routes/api/leave')
const UsersRoute = require('./routes/api/users');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());

require('./config/passport')(passport);

app.use('/api/user', UsersRoute)
app.use('/api/leave',LeaveRoute)
const PORT = process.env.PORT || 5000;

mongoose.connect(db, { useNewUrlParser: true }).then(ele => {
    app.listen(PORT, () => {
        console.log('Server Listening on ' + PORT)
    })
}).catch(ele => {
    console.log(ele)
});