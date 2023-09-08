import { useSelector, useDispatch } from 'react-redux';

import { getAuthError } from 'redux/auth/auth-selectors';
import { login } from 'redux/auth/auth-operations';

import LoginForm from 'components/LoginForm/LoginForm';

const LoginPage = () => {
  const dispatch = useDispatch();
  const { status } = useSelector(getAuthError);

  const onLogin = data => {
    dispatch(login(data));
  };
 
  return (
    <div>
      <h2>Login Page</h2>
      <LoginForm onSubmit={onLogin} />
      {status && <p style={{ color: 'red' }}> Incorrect login or password</p>}
    </div>
  );
};

export default LoginPage;