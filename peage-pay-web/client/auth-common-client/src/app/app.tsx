import { RouterProvider } from 'react-router-dom';
import useRouter from '../hooks/use-router.hook';
import { Suspense } from 'react';

const App = (): JSX.Element => {
  const { router } = useRouter();

  return (
    <Suspense fallback={<h1>loading</h1>}>
      <RouterProvider router={router}></RouterProvider>
    </Suspense>
  );
};

export default App;
