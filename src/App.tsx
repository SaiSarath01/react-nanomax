import React from 'react';
import logo from './logo.svg';
import './App.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './Error';
import Layout from './Layout';
import Active from './pages/Active';
import Latest from './pages/Latest';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'


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
      }
    ]
  },
]);

function App() {
  const queryClient = new QueryClient(
    {
      defaultOptions: {
        queries : {
          retry : false,
          refetchInterval: 1000 * 60
        }
      }
    }
  )
  return (
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
