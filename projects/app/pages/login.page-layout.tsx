import { PropsWithChildren } from 'react';

export const LoginPageLayout = ({ children }: PropsWithChildren<unknown>) => (
  <div className="w-screen h-screen flex justify-center items-center">
    <div className="w-72">
      { children }
    </div>
  </div>
);
