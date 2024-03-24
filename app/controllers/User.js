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

module.exports.findUser = async (req, res, next) => {
    try {
        // Assuming UserModel has a method named findOne to find a user by phone number
        const user = await UserModel.findOne({ phone: req.params.phone });
        if (!user) {
            // If no user found, return a 404 error response
            FUNCTION.error({
                status: 404,
                msg: 'User not found.',
            }, res);
            return;
        }
        // If user found, return a success response with the user data
        FUNCTION.success({
            status: 200,
            data: user
        }, res);
    } catch (err) {
        // If an error occurs, return a 422 error response with the error details
        FUNCTION.error({
            status: 422,
            error: err.errors,
        }, res);
    }
};



module.exports.updateUser = async (req, res, next) => {
    try {
        // Assuming UserModel has a method named findOneAndUpdate to find and update a user
        const updatedUser = await UserModel.findOneAndUpdate(
            { phone: req.params.phone }, // Find user by phone number
            { $set: req.body }, // Update user with data from request body
            { new: true } // Return the updated user
        );
        if (!updatedUser) {
            // If no user found, return an error response
            FUNCTION.error({
                status: 404,
                msg: 'User not found.',
            }, res);
            return;
        }
        FUNCTION.success({
            status: 200,
            msg: 'User has been updated successfully.',
            data: updatedUser
        }, res);
    } catch (err) {
        FUNCTION.error({
            status: 422,
            error: err.errors,
        }, res);
    }
};

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

module.exports.deleteUser = async (req, res, next) => {
    try {
        // Assuming UserModel has a method named findOneAndDelete to find and delete a user
        const deletedUser = await UserModel.findOneAndDelete({ phone: req.body.phone });
        if (!deletedUser) {
            // If no user found, return an error response
            FUNCTION.error({
                status: 404,
                msg: 'User not found.',
            }, res);
            return;
        }
        FUNCTION.success({
            status: 200,
            msg: 'User has been deleted successfully.',
            data: deletedUser
        }, res);
    } catch (err) {
        FUNCTION.error({
            status: 422,
            error: err.errors,
        }, res);
    }
};