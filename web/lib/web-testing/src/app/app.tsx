import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Components from './components';
import Layout from './layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Components></Components>,
  },
  {
    path: '/layout',
    element: <Layout></Layout>,
  },
]);

export function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
