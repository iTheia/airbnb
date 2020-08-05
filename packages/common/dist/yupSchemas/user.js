"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validUserSchema = exports.invalidEmail = exports.passwordNotLongEnough = exports.emailNotLongEnough = void 0;
const yup = require("yup");
exports.emailNotLongEnough = 'email must be at least 3 characters';
exports.passwordNotLongEnough = 'password must be at least 5 characters';
exports.invalidEmail = 'email must be vaild';
exports.validUserSchema = yup.object().shape({
    email: yup
        .string()
        .min(3, exports.emailNotLongEnough)
        .max(255)
        .email(exports.invalidEmail)
        .required(),
    firstName: yup.string().min(1).max(255).required(),
    lastName: yup.string().min(3).max(255).required(),
    password: yup.string().min(5, exports.passwordNotLongEnough).max(255).required(),
});
//# sourceMappingURL=user.js.map