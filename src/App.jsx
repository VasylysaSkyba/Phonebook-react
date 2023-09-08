import styles from './App.module.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Navigation from 'components/Navigation/Navigation';
import UserRoutes from 'UserRoutes';
import { current } from 'redux/auth/auth-operations';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return (
    <div className={styles.container}>
    <Navigation />
    <UserRoutes />
    
    </div>
  );
}

export default App;