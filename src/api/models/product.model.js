const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        max: 50,
        trim: true,
    },
    description: {
        type: String,
        default: "No description yet",
        max: 255,
        trim: true,
    },
    category: {
        type: String,
        required: true,
        max: 30,
        trim: true, 
    },
    price: {
        type: Number,
        required: true,
        trim: true,
    },
    dateCreated: {
        type: Date,
        default: Date.now,
    },
});

module.exports =  mongoose.model('Products', productSchema);