import * as z from 'zod';

const isEmailRegex = new RegExp(
  /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/,
);

export const loginSchema = z.object({
  email: z.string().regex(isEmailRegex, {
    message: 'Email is a required field',
  }),
  password: z.string().min(8, {
    message: 'Password is a required field',
  }),
});

export const defaultValues = { email: '', password: '' };
