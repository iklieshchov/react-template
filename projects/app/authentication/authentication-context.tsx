import {
  createContext,
  PropsWithChildren,
  useCallback,
  useMemo,
  useState,
} from 'react';
import { Authentication } from '../interfaces/authentication';
import { User } from '../interfaces/user';

export const Context = createContext<Authentication>({
  user: null,
  login: () => {},
  logout: () => {},
  isAuthenticated: () => false,
  userName: () => '',
});

export const AuthenticationContext = ({
  children,
}: PropsWithChildren<unknown>) => {
  const [user, setUser] = useState<User | null>(null);

  const login = useCallback((loginUser: User) => {
    setUser(loginUser);
  }, []);

  const logout = useCallback(() => {
    setUser(null);
  }, []);

  const isAuthenticated = useCallback(() => user !== null, [user]);

  const userName = useCallback(() => {
    if (user) {
      return (
        [user.firstName, user.lastName]
          .filter((item) => Boolean(item))
          .join(' ') || user.email
      );
    }
    return '';
  }, [user]);

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
      isAuthenticated,
      userName,
    }),
    [user, login, logout, isAuthenticated, userName],
  );

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
