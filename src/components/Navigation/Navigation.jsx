import { Link, NavLink } from 'react-router-dom';
import NavbarAuth from './NavbarAuth/NavbarAuth';

import styles from './Navigation.module.css';

const getClassName = ({ isActive }) => {
  const className = isActive ? `${styles.link} ${styles.active}` : styles.link;
  return className;
};

const Navigation = () => {
  return (
    <nav className={styles.wrapper}>
     <Link className={styles.logo} to="/">
        Logo
      </Link>
      <NavLink className={getClassName} to="/contacts">
        My contacts
      </NavLink>
      <NavbarAuth />
    </nav>
  );
};

export default Navigation;