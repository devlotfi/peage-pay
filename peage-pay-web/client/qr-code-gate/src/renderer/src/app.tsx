import { RouterProvider } from 'react-router-dom';
import useRouter from './hooks/use-router.hook';
import { Suspense } from 'react';
import { FullScreenLoading } from '@peage-pay-web/ui';

const App = (): JSX.Element => {
  const { router } = useRouter();

  return (
    <Suspense fallback={<FullScreenLoading></FullScreenLoading>}>
      <RouterProvider router={router}></RouterProvider>
    </Suspense>
  );
};

export default App;
