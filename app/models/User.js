var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
    phone: {
        type: String,
        default: "123456789",
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

module.exports = mongoose.model('User', UserSchema);
