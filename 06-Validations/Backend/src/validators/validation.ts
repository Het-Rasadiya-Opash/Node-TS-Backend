import Joi from "joi";
import type { User } from "../models/user.js";

const userValidationSchema = Joi.object<User>({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  confirmPassword: Joi.string()
    .valid(Joi.ref("password"))
    .required()
    .messages({ message: "Confirm password must match password" }),
});

const validator = (schema: Joi.Schema) => (payload: User) =>
  schema.validate(payload, { abortEarly: false });

export const validateUserInput = validator(userValidationSchema);