//const joi = require('joi');
import joi from "joi";

export const productValidator = (product) => {
    const Schema = joi.object({
        name: joi.string().min(2).max(25).required(),
        description: joi.string().min(2).max(225),
        category: joi.string().min(2).max(50).required(), 
        initialPrice: joi.number().required(),
        currentValue: joi.number().required(),
        noInStock: joi.number()
    }).unknown();

    return Schema.validate(product);
}