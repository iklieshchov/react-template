import { Helmet } from 'react-helmet';
import { useAuthentication } from '../authentication';

export const ProfilePage = () => {
  const { userName } = useAuthentication();
  return (
    <>
      <Helmet>
        <title>Profile</title>
      </Helmet>
      <div className="flex justify-center w-full h-full">
        <div className="w-[1000px] h-full pt-4">
          <h1 className="text-lg">User Profile</h1>
          <span id="user-name" className="block text-sm text-slate-600">{ userName() }</span>
        </div>
      </div>
    </>
  );
};
