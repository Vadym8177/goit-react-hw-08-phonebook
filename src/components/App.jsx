import { Text } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { selectIsRefreshing } from 'redux/Auth/authSelectors';
import { currentUser } from 'redux/Auth/authOperations';
import { Layout } from './Layout/Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';

const HomePage = lazy(() => import('../pages/Home'));
const ContactPage = lazy(() => import('../pages/Contacts'));
const LoginPage = lazy(() => import('../pages/Login'));
const RegisterPage = lazy(() => import('../pages/Register'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Text as="p" textAlign="center">
      Refreshing...
    </Text>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactPage />} />
          }
        />
      </Route>
    </Routes>
  );
};
