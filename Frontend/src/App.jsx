import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Signup from './components/auth/Signup.jsx';
import Home from './components/Home.jsx';
import Login from './components/auth/Login.jsx';
import Jobs from './components/Jobs.jsx';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login', 
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path:'/jobs',
    element:<Jobs/>
  }
]);

const App = () => {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
};

export default App;
