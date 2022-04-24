const express = require('express');
const app = express();
const mongoose = require('mongoose');
const {connectDatabase} = require('./src/config/database');

connectDatabase(app);

//body Parser
app.use(express.json());

const ProductsRoute = require('./src/api/routes/product.route');
app.use('/', ProductsRoute);