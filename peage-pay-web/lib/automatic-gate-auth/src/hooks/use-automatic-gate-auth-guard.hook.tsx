import { useContext } from 'react';
import { AutomaticGateAuthContext } from '../context/automatic-gate-auth.context';
import { Navigate } from 'react-router-dom';

const useAutomaticGateAuthGuard = () => {
  const { automaticGateAuthData } = useContext(AutomaticGateAuthContext);

  const authGuard = (element: JSX.Element): JSX.Element => {
    if (automaticGateAuthData) {
      return element;
    }
    return <Navigate to={'/sign-in-automatic-gate'}></Navigate>;
  };

  const notAuthGuard = (element: JSX.Element): JSX.Element => {
    if (!automaticGateAuthData) {
      return element;
    }
    return <Navigate to={'/dashboard'}></Navigate>;
  };

  return {
    authGuard,
    notAuthGuard,
  };
};

export default useAutomaticGateAuthGuard;
