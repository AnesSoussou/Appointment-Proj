const mongoose = require('mongoose');

const ClientSchema = mongoose.Schema({
    name: String,
    email: String,
    adress: String,
    phone: Number,
    category: String,
    created_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Client', ClientSchema);

