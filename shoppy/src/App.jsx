// import Firebase from './Firebase';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './pages/Root';
import NotFound from './pages/NotFound';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Carts from './pages/Carts';
import NewProduct from './pages/NewProduct';
import ProtectedRoute from './pages/ProtectedRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Products type="home" /> },
      { path: 'products', element: <Products /> },
      { path: 'products/:productId', element: <ProductDetail /> },
      {
        path: 'carts',
        element: (
          <ProtectedRoute>
            <Carts />
          </ProtectedRoute>
        ),
      },
      {
        path: 'products/new',
        element: (
          <ProtectedRoute requireAdmin>
            <NewProduct />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

function App() {
  // console.log(Firebase);
  return <RouterProvider router={router} />;
}

export default App;
