import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import Home from '../Pages/Home/Home';
import Products from '../Pages/Products/Products';
import Product from '../pages/Product/Product';
import DashBoardLayout from '../Layouts/DashBoardLayout';
import DashBoard from '../pages/DashBoard/DashBoard';
import Profile from '../pages/Profile/Profile';
import EditProfile from '../pages/EditProfile/EditProfile';

const myCreatedRoute = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/products',
        element: <Products></Products>,
        loader: () => fetch(`https://dummyjson.com/products`),
      },
      {
        path: '/products/:id',
        element: <Product></Product>,
        loader: object =>
          fetch(`https://dummyjson.com/products/${object.params.id}`),
      },
      {
        path: '/dashboard',
        element: <DashBoardLayout></DashBoardLayout>,
        children: [
          {
            path: '/dashboard',
            element: <DashBoard></DashBoard>,
          },
          {
            path: '/dashboard/profile',
            element: <Profile></Profile>,
          },
          {
            path: '/dashboard/editProfile',
            element: <EditProfile></EditProfile>,
          },
        ],
      },
    ],
  },
]);

export default myCreatedRoute;
