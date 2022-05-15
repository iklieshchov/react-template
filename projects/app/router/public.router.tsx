import { useMemo } from 'react';
import {
  Routes, Route, Navigate, useLocation,
} from 'react-router-dom';
import { LandingPage, LoginPage } from '../pages';

export const PublicRouter = () => {
  const location = useLocation();

  const redirectTo = useMemo(() => {
    const url = [location.pathname, location.search].join('');
    return encodeURIComponent(url);
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="*"
        element={(
          <Navigate
            to={{
              pathname: '/login',
              search: `redirectTo=${redirectTo}`,
            }}
          />
        )}
      />
    </Routes>
  );
};
