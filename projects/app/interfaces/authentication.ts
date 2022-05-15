import { User } from './user';

export interface Authentication {
  user?: User | null;
  login: (user: User) => void;
  logout: () => void;
  isAuthenticated: () => boolean;
  userName: () => string;
}
