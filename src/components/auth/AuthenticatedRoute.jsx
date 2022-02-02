import { Navigate } from 'react-router-dom';
import { auth } from '../../firebase';

export const PrivateRoute = ({ children }) => {
  const authed = auth;

  return authed ? children : <Navigate to='/login' />;
};
