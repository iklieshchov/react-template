import * as yup from 'yup';

export const userLoginSchema = yup.object({
  email: yup
    .string()
    .required()
    .email('Enter your email'),
  password: yup
    .string()
    .required()
    .min(8, 'Password should be at least 8 symbols long'),
});
