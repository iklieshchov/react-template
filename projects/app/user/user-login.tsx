import { useFormik } from 'formik';
import { Input, PrimaryButton } from '../components';
import { userLoginSchema } from './user-login.schema';
import { User } from '../interfaces/user';

export interface UserLoginProps {
  onLogin: (user: User) => void;
}

export const UserLogin = ({ onLogin }: UserLoginProps) => {
  const form = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: userLoginSchema,
    onSubmit() {
      onLogin({
        id: '42',
        email: 'ihor.klieshchov@gmail.com',
      });
    },
  });

  return (
    <form onSubmit={form.handleSubmit} className="flex flex-col items-center gap-3 w-full">
      <Input
        placeholder="Email"
        error={form.errors.email}
        {...form.getFieldProps('email')}
        className="w-full"
      />
      <Input
        type="password"
        placeholder="Password"
        error={form.errors.password}
        {...form.getFieldProps('password')}
        className="w-full"
      />
      <PrimaryButton type="submit" className="mt-2 px-8">Login</PrimaryButton>
    </form>
  );
};
