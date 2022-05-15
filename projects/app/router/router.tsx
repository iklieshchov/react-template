import { lazy, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { PublicRouter } from './public.router';
import { useAuthentication } from '../authentication';
import { Navigation } from '../common';

const UserRouter = lazy(() => import(/* webpackChunkName: 'user' */ './user.router'));

export const Router = () => {
  const { isAuthenticated } = useAuthentication();
  return (
    <Suspense fallback={<span>loading...</span>}>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen bg-slate-50">
          <Navigation />
          {isAuthenticated() ? <UserRouter /> : <PublicRouter />}
        </div>
      </BrowserRouter>
    </Suspense>
  );
};
