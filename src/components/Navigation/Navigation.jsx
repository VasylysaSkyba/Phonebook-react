import { NavLink } from 'react-router-dom';

import styles from './Navigation.module.css';

const getClassName = ({ isActive }) => {
  const className = isActive ? `${styles.link} ${styles.active}` : styles.link;
  return className;
};

const Navigation = () => {
  return (
    <nav className={styles.wrapper}>
      <NavLink className={getClassName} to="/">
        Home
      </NavLink>
    </nav>
  );
};

export default Navigation;