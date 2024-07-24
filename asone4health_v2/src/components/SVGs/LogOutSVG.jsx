import React from 'react'
import { useAuth } from '../../contexts/AuthProvider';
import { Navigate } from 'react-router-dom';


function LogOutSVG() {
  
const {logOut} = useAuth();

const hangleLogout = () => {
  
  const confirmLogOut = window.confirm("Voulez-vous vraiment vous déconnecter ?");
  if (confirmLogOut) {
    logOut();
    <Navigate to="/" />;
  }

}
return (



    
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 text-color-client-dark active:translate-x-0.5 active:translate-y-0.5 hover:cursor-pointer  "
          onClick={hangleLogout}
          
        >

          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
          />
        </svg>
  )
}

export default LogOutSVG