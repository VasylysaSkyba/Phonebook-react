
import { Link } from 'react-router-dom';

import styles from './Navigation.module.css';

import NavBarMenu from './NavbarMenu/NavbarMenu';
import NavbarAuth from './NavbarAuth/NavbarAuth';
import NavbarUser from './NavbarUser/NavbarUser';
import useAuth from 'shared/api/hooks/useAuth';



const Navigation = () => {
  const isLogin = useAuth();
  return (
    <nav className={styles.wrapper}>
     <Link className={styles.logo} to="/">
        Logo
      </Link>
      {isLogin && <NavBarMenu />}
      {isLogin ? <NavbarUser /> : <NavbarAuth />}
    </nav>
  );
};

export default Navigation;