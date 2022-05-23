import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    firstname: {type: String, required: true, min:2, max: 50, trim: true},
    lastname: {type: String, required: true, min:2, max: 50, trim: true},
    email: {type: String, lowercase: true, min:2, max:255},
    password: {type: String, required: true, min: 8},
    active: {type: Boolean, default: true},
}, {timestamps: true});

export const UserProduct = mongoose.model('ProductUser', userSchema);