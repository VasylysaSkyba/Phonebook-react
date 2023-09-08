import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loader from 'components/Loader/Loader';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const MyContactsPage = lazy(() => import('pages/MyContactsPage/MyContactsPage')
);

const UserRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/contacts" element={<MyContactsPage />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;