import MyContactsPage from 'pages/MyContactsPage/MyContactsPage';
import Navigation from 'components/Navigation/Navigation';

import styles from './App.module.css';



function App() {

  return (
  <div className={styles.container}>
    <Navigation/>
    <MyContactsPage/>
    </div>
  );
}

export default App;