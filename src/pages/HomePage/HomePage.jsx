import { NavLink } from 'react-router-dom';
import Phone from '../HomePage/Images/phone.jpg';
import styles from './HomePage.module.css';


const HomePage = () => {
  return (
    <main>
      <section className={styles.container}>
        <div class="animate__animated animate__heartBeat">
          <h1 data-text="My contacts">My contacts</h1>
        </div>

        <div className={styles.thumb}>
          <div>
            <img className={styles.image} src={Phone} alt="" />
          </div>
        </div>
        <NavLink to="/contacts" className={styles.button} title="Try it now!">
          Try it now!
        </NavLink>
      </section>
    </main>
  );
};

export default HomePage;