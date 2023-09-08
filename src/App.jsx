
import Navigation from 'components/Navigation/Navigation';

import styles from './App.module.css';
import UserRoutes from 'UserRoutes';


function App() {

  return (
    <div className={styles.container}>
    <Navigation />
    <UserRoutes />
    
    </div>
  );
}

export default App;