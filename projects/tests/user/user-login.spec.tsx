import { render } from '@testing-library/react';
import { UserLogin } from '../../app/user/user-login';

describe('User Login', () => {
  it('valid', () => {
    const onLogin = jest.fn();
    render(<UserLogin onLogin={onLogin} />);
    // TODO: complete
  });
});
