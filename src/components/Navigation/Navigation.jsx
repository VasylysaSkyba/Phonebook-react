
import { Link } from 'react-router-dom';

import styles from './Navigation.module.css';

import NavBarMenu from './NavbarMenu/NavbarMenu';
import NavbarAuth from './NavbarAuth/NavbarAuth';
import NavbarUser from './NavbarUser/NavbarUser';
import useAuth from 'shared/api/hooks/useAuth';
import { FcPhoneAndroid } from 'react-icons/fc';



const Navigation = () => {
  const isLogin = useAuth();
  return (
    <nav className={styles.wrapper}>
     <Link className={styles.logo} to="/">
     <FcPhoneAndroid /> Phonebook
      </Link>
      {isLogin && <NavBarMenu />}
      {isLogin ? <NavbarUser /> : <NavbarAuth />}
    </nav>
  );
};

export default Navigation;