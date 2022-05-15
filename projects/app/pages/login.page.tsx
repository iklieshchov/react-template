import { useSearchParams, useNavigate } from 'react-router-dom';
import { useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { UserLogin } from '../user';
import { LoginPageLayout } from './login.page-layout';
import { useAuthentication } from '../authentication';

export const LoginPage = () => {
  const [search] = useSearchParams();
  const navigate = useNavigate();
  const { login } = useAuthentication();

  const redirectTo = useMemo(() => {
    const url = search.get('redirectTo');
    if (url) {
      return decodeURIComponent(url);
    }
    return '/';
  }, [search]);

  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginPageLayout>
        <UserLogin
          onLogin={(user) => {
            login(user);
            navigate(redirectTo, { replace: true });
          }}
        />
      </LoginPageLayout>
    </>
  );
};
