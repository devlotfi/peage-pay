import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Components from './components';
import Layout from './layout';
import NewLayout from './new-layout';
import SignIn from './sign-in';

const router = createBrowserRouter([
  {
    path: '/components',
    element: <Components></Components>,
  },
  {
    path: '/old-layout',
    element: <Layout></Layout>,
  },
  {
    path: '/sign-in',
    element: <SignIn></SignIn>,
  },
  {
    path: '/',
    element: <NewLayout></NewLayout>,
  },
]);

export function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
