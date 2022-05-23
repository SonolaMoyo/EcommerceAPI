//const express = require('express');
import express from "express";
const app = express();
//const {connectDatabase} = require('./src/config/database');
import {connectDatabase} from "./src/config/database.js";
import cookieParser from "cookie-parser";

connectDatabase(app);

//body Parser
app.use(express.json());
//cookie Parser
app.use(cookieParser());

app.get('/', async(req, res) => {
    res.send('Inventory App');
});

//const ProductsRoute = require('./src/api/routes/product.route');
import ProductsRoute from "./src/api/routes/product.route.js";
import UsersRoute from "./src/api/routes/user.route.js"
app.use('/api/product', ProductsRoute);
app.use('/api/user', UsersRoute);