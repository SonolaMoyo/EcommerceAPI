//const { default: mongoose } = require('mongoose');
import mongoose from "mongoose";

//Setting up environment variables
//require('dotenv').config();
import dotenv from "dotenv";
const config = dotenv.config();

const PORT = process.env.PORT || 5000;

//Setting up database
const connectDatabase = async (app) => {
    try{
        await mongoose.connect(
            process.env.DB_URI,
            () => {
                console.log('Connect to database...');
                app.listen(PORT, () => {
                    console.log(`Server Listening on Localhost:${PORT}...`);
                });
            }
        )
    }
    catch(error) {
        console.log(error);
    }
}

export {connectDatabase};