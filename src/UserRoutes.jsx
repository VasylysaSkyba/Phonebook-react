import { lazy, Suspense } from 'react';
import {Navigate, Route, Routes } from 'react-router-dom';
import Loader from 'components/Loader/Loader';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const MyContactsPage = lazy(() =>
  import('pages/MyContactsPage/MyContactsPage')
);

const UserRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<MyContactsPage />} />
        <Route path="*" element={<Navigate to="/"/>} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;