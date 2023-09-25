import ReactDOM from 'react-dom/client';
import './index.css';
import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainLayout from './Layouts/MainLayout';
import Home from './Pages/Home/Home';
import Products from './Pages/Products/Products';
import myCreatedRoute from './Route/Route';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={myCreatedRoute}></RouterProvider>
  </React.StrictMode>
);
