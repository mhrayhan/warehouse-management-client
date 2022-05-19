import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Bars } from 'react-loader-spinner';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();

  if (loading) {
    return <div className='loader'><Bars height="100"
      width="100"
      color='#00FF1F'></Bars></div>
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  if (!user.emailVerified) {
    return <div className=''>
      <h3 className='text-danger'>Your Email is not verified !</h3>
      <h5>Please Verify your email address</h5>
      <button className='btn btn-info'>Resend Verification Email</button>
    </div>
  }
  return children;
};

export default RequireAuth;
