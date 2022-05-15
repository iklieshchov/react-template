import { QueryClientProvider } from 'react-query';
import { AuthenticationContext } from './authentication';
import { Router } from './router';
import { queryClient } from './services/http-client';

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthenticationContext>
      <Router />
    </AuthenticationContext>
  </QueryClientProvider>
);
