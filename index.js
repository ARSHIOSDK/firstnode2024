var http = require('http');
var express = require('express');
var mongoose = require('mongoose');
var UserModel = require('./app/models/User');
var bodyParser = require('body-parser');
const User = require('./app/models/User');

var app = express();

mongoose.connect('mongodb://localhost:27017/firstnode',{ 
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
}).then(() => {
    console.log('Connection Established Successfully');
}).catch(err=> {
    console.log(err)
    console.log('Error while Estallishing Connection');
})


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use('/user', require('./app/routers/UserRoutes'));

app.listen(4001);




