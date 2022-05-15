import axios from 'axios';
import { QueryClient } from 'react-query';

export const httpClient = axios.create({
  timeout: 5000,
});

export const queryClient = new QueryClient();
