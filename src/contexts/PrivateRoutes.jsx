// src/contexts/PrivateRoutes.jsx

import React, { useEffect, useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const PrivateRoutes = () => {
  const { currentUser ,isLoggedIn, setIsLoggedIn } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let timeout;
    if (isLoggedIn === null) {
      timeout = setTimeout(() => {
        setIsLoggedIn(false);
        setLoading(false);
      }, 3000);
    } else {
      setLoading(false);
    }
    if(currentUser && currentUser.password){
      setIsLoggedIn(true);
    }
    return () => clearTimeout(timeout); // eslint-disable-next-line 
  }, [isLoggedIn, setIsLoggedIn]);

  if (loading) {
    return <LoadingComponent />;
  } else if (isLoggedIn) {
    return <Outlet />;
  } else {
    return <Navigate to='/login' />;
  }
}

export default PrivateRoutes;

const LoadingComponent = () => {
  return <div className="d-flex justify-content-center align-items-center min-vh-100">
  <img src="/images/LetoSave - Logo - White.png" alt="Loading Logo" className='breathing' />
</div>;
}
