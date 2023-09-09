import { lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import PublicRoute from 'components/PublicRoute/PublicRoute';
import Loader from 'components/Loader/Loader';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const MyContactsPage = lazy(() => import('pages/MyContactsPage/MyContactsPage'));

const UserRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/contacts" element={<MyContactsPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;