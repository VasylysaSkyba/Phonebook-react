import { useSelector, useDispatch } from 'react-redux';
import { getUser } from 'redux/auth/auth-selectors';
import { logout } from 'redux/auth/auth-operations';
import styles from './NavbarUser.module.css';
import { FiLogOut } from 'react-icons/fi';

const NavbarUser = () => {
  const { email } = useSelector(getUser);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={styles.navbaruser}>
    <span className={styles.nameuser}>{email}</span>
    <button className={styles.button} onClick={onLogout} type="button">
    <FiLogOut />
      </button>
    </div>
  );
};

export default NavbarUser;