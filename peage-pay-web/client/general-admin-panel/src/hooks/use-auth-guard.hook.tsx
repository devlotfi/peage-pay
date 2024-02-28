import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '@peage-pay-web/auth';

const useAuthGuard = () => {
  const { authData } = useContext(AuthContext);

  const authGuard = (element: JSX.Element): JSX.Element => {
    if (authData) {
      return element;
    }
    return <Navigate to={'/sign-in'}></Navigate>;
  };

  const notAuthGuard = (element: JSX.Element): JSX.Element => {
    if (!authData) {
      return element;
    }
    return <Navigate to={'/dashboard'}></Navigate>;
  };

  return {
    authGuard,
    notAuthGuard,
  };
};

export default useAuthGuard;
