const joi = require('joi');

exports.productValidator = (product) => {
    const Schema = joi.object({
        name: joi.string().min(2).max(25).required(),
        description: joi.string().min(2).max(225),
        category: joi.string().min(2).max(50).required(), 
        price: joi.number().required(),
    }).unknown();

    return Schema.validate(product);
}