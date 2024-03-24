var mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

var UserSchema = mongoose.Schema({
    phone: {
        type: String,
        default: "123456789",
        unique: true
    },
    address: {
        type: String,
        default: "abc",
    },
    idProof: {
        type: String,
        default: "Driving License",
    }
},{
    Timestamps: true
});

UserSchema.plugin(uniqueValidator, {message: '{PATH}({VALUE}) already exist!!'});

module.exports = mongoose.model('User', UserSchema);
