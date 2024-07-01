import React from 'react';
import { Link } from 'react-router-dom'; // Ensure you have react-router-dom installed

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-4xl font-bold text-color-client-dark mb-4">404 - Page Not Found</h2>
        <p className="text-lg text-color-text mb-6">The page you are looking for does not exist.</p>
        <Link to="/" className="inline-block px-6 py-3 rounded-lg bg-color-main text-white font-semibold transition duration-300 ease-in-out hover:bg-color-client-dark">Go to Home</Link>
      </div>
    </div>
  );
}

export default PageNotFound;