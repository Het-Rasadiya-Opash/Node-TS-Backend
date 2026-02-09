import Joi from "joi";
const userValidationSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    confirmPassword: Joi.string()
        .valid(Joi.ref("password"))
        .required()
        .messages({ message: "Confirm password must match password" }),
});
const validator = (schema) => (payload) => schema.validate(payload, { abortEarly: false });
export const validateUserInput = validator(userValidationSchema);
//# sourceMappingURL=validation.js.map