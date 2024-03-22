var http = require('http');
var express = require('express');
var mongoose = require('mongoose');
var UserModel = require('./User');
var bodyParser = require('body-parser');
const User = require('./User');

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

app.get("/users", (req, res, next) => {
    UserModel.find({})
    .then((users) => {
        res.status(200).json({
            response: true,
            users: users
        });
    } )
    .catch((err) => {
        res.status(422).json({
            error: err,
            response: false
        });
    });
})

app.post("/user", (req,res,next) => {
    let user = new UserModel ({
        phone: req.body.phone,
      address: req.body.address,
      idProof: req.body.idProof,
    });
    user.save()
    .then((usr) => {
        res.status(200).json({
            msg: 1,
            data: 'User has been inserted successfully.',
            user: usr
        });
    })
    .catch((err) => {
        res.status(422).json({
            error: err,
            response: false
        });
    });
});


app.listen(4001);




