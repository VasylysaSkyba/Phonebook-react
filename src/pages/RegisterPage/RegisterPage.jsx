import styles from './RegisterPage.module.css';
import { useSelector, useDispatch } from 'react-redux';

import { signup } from 'redux/auth/auth-operations';
import { getAuthError } from 'redux/auth/auth-selectors';
import RegisterForm from 'components/RegisterForm/RegisterForm';


const RegisterPage = () => {
  const dispatch = useDispatch();
  const { status } = useSelector(getAuthError);

  const onRegister = data => {
    dispatch(signup(data));
  };


  return (
    <div className={styles.pagecontainer}>
      <h2>Create your account</h2>
      <RegisterForm onSubmit={onRegister} />
      {status && (
        <p style={{ color: 'red' }}> This user is already registered</p>
      )}
    </div>
  );
};

export default RegisterPage;