var mongoose = require('mongoose');

module.exports = function() {
    var schema = mongoose.Schema({
        name: {
            type: String,
            require: true
        },
        points: {
            type: Number,
            min: 1,
            require: true
        }
    });

    return mongoose.model('Tag', schema);
};