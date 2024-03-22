var http = require('http');
var express = require('express');

var app = express();

app.use((req,res,next) => {
    console.log("Inside the first function")
    next();
})

app.get("/user", (req, res, next) => {
    let user = {
        name : 'Arshdeep',
        age  : '27',
        gender: 'male',
    };
    res.status(200).json({
        msg: 1,
        user: user
    });
});

app.post("/user", (req,res, next) => {
    res.status(200).json({
        msg: 1,
        data: 'User has been inserted successfully'
    });
});



app.listen(4001);


