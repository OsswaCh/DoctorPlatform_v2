import React from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/Login';
import AccountCreation from './pages/AccountCreation';

function App() {
  
// Define the routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: '/creation-de-compte',
    element: <AccountCreation />,
  }
]);
  return (
    <div>
      {/* deffer the entry point of the app to react router define above */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;