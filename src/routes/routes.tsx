import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from '../Error';
import Layout from '../Layout';
import Active from '../pages/Active';
import Development from '../pages/Development';
import Latest from '../pages/Latest';

const Routes = () => {

    const router = createBrowserRouter([
        {
          path: "/",
          element: <Layout />,
          errorElement: <ErrorPage />,
          
          children: [
            {
              path: '/active',
              element: <Active />
            },
            {
              path: "/latest",
              element: <Latest />
            },
            {
              path: "/devlopment",
              element: <Development />
            }
          ]
        },
      ]);

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default Routes
