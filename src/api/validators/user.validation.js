import joi from "joi";

export function userValidation(user) {
    const Schema = joi.object({
        firstname: joi.string().min(2).max(50).required(),
        lastname: joi.string().min(2).max(25).required(),
        email: joi.string().min(2).max(225).email().required(),
        password: joi.string().min(8).max(225),
        confirmPassword: joi.string().required().valid(joi.ref('password')),
    }).unknown();

    return Schema.validate(user);
}