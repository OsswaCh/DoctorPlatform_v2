import React from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/Login';
import AccountCreation from './pages/AccountCreation';
import TestPage from './pages/testPage'
import PageNotFound from './pages/PageNotFound';


//TODO : docarize the project

function App() {
  
// Define the routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
    errorElement: <PageNotFound />,
  },
  {
    path: '/creation-de-compte',
    element: <AccountCreation />,
  },
  {
    path: '/test',
    element: <TestPage />,
  },
]);
  return (
    <div>
      {/* deffer the entry point of the app to react router define above */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;