import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Signup from './components/auth/Signup.jsx';
import Home from './components/Home.jsx';
import Login from './components/auth/Login.jsx';

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
