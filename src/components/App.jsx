import { TostBox } from './Toast/Toast';

import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy, useEffect } from 'react';
import { Layout } from './Layout/Layout';
import { useDispatch } from 'react-redux';
import { refreshThunk } from 'redux/auth/auth.reducer';
import * as ROUTES from '../constants/routes';
import RestrictedRoute from './RestrictedRoute';
import PrivateRoute from './PrivateRoute';

const Home = lazy(() => import('pages/Home'));
const Login = lazy(() => import('pages/Login'));
const Register = lazy(() => import('pages/Register'));
const Contacts = lazy(() => import('pages//Contscts'));

const appRoutes = [
  {
    path: ROUTES.HOME_ROUTE,
    element: <Home />,
  },
  {
    path: ROUTES.LOGIN_ROUTE,
    element: (
      <RestrictedRoute navigateTo={ROUTES.CONTACTS_ROUTE}>
        <Login />
      </RestrictedRoute>
    ),
  },
  {
    path: ROUTES.REGISTER_ROUTE,
    element: (
      <RestrictedRoute navigateTo={ROUTES.HOME_ROUTE}>
        <Register />
      </RestrictedRoute>
    ),
  },
  {
    path: ROUTES.CONTACTS_ROUTE,
    element: (
      <PrivateRoute>
        <Contacts />
      </PrivateRoute>
    ),
  },
];

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return (
    <div>
      <Suspense>
        <Routes>
          <Route path="/" element={<Layout />}>
            {appRoutes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Route>
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
      <TostBox />
    </div>
  );
};
