import { useContext } from 'react';
import { Context } from './authentication-context';

export const useAuthentication = () => useContext(Context);
