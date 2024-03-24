var UserModel = require('../models/User')
var FUNCTION = require('../../function')


module.exports.getAllUsers = (req, res, next) => {
    UserModel.find({})
    .then((users) => {
        FUNCTION.success({
            status: 200,
            data: users
        }, res);
    } )
    .catch((err) => {
        FUNCTION.error({
            status: 422,
            msg: '',
            error: err
        }, res);
    });
}

module.exports.save = async (req, res, next) => {
    let user = new UserModel ({
        phone: req.body.phone,
      address: req.body.address,
      idProof: req.body.idProof,
    });
    user.save()
    .then((usr) => {
        FUNCTION.success({
            status: 200,
            msg: 'User has been inserted successfully.',
            data: usr
        }, res);
    })
    .catch((err) => {
        FUNCTION.error({
            status: 422,
            // msg: '',
            error: err.errors,
        }, res);
    });
};
