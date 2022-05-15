import { Link } from 'react-router-dom';
import { useAuthentication } from '../authentication';
import { PrimaryButton } from '../components';

export const Navigation = () => {
  const {
    isAuthenticated, userName, logout,
  } = useAuthentication();
  return (
    <div className="sticky top-0 flex justify-center w-full h-12 bg-green-400 shadow-md">
      <div className="flex justify-between gap-2 h-full items-center w-[1000px]">
        <Link to="/">
          <span className="hover:underline">Home</span>
        </Link>
        {
        isAuthenticated() ? (
          <div className="flex h-full items-center gap-2">
            <Link to="/profile">
              <span className="hover:underline">{ userName() }</span>
            </Link>
            <PrimaryButton onClick={logout}>Logout</PrimaryButton>
          </div>
        ) : (
          <Link to="/login">
            <PrimaryButton>Login</PrimaryButton>
          </Link>
        )
      }
      </div>
    </div>
  );
};
