import { AuthContext } from '@peage-pay-web/auth';
import { useContext, useEffect } from 'react';

const TestHome = () => {
  const { authData } = useContext(AuthContext);
  console.log(authData);

  useEffect(() => {
    console.log('init');
  }, []);
  return (
    <>
      <h1>testaa</h1>
    </>
  );
};

export default TestHome;
