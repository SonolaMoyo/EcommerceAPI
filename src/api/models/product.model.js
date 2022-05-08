//const mongoose = require('mongoose');
import mongoose from "mongoose";

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
    initialPrice: {
        type: Number,
        required: true,
        trim: true,
    },
    currentValue: {
        type: Number,
        required: true,
        trim: true,
    },
    noInStock: {
        type: Number,
        default: 0,
        trim: true,
    }
}, {timestamps: true});

export const Product =  mongoose.model('Products', productSchema);