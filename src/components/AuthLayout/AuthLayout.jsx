import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { current } from 'redux/auth/auth-operations';

const AuthLayout = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(current());
  }, [dispatch]);
  return <>{children}</>;
};

AuthLayout.propTypes = {
    children: PropTypes.array.isRequired,
  };


export default AuthLayout;