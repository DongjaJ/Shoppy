import Firebase from './Firebase';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './pages/Root';
import NotFound from './pages/NotFound';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Carts from './pages/Carts';
import Registration from './pages/Registration';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Products /> },
      { path: 'products', element: <Products /> },
      { path: 'products/:productId', element: <ProductDetail /> },
      { path: 'carts', element: <Carts /> },
      { path: 'registration', element: <Registration /> },
    ],
  },
]);

function App() {
  console.log(Firebase);
  return <RouterProvider router={router} />;
}

export default App;
