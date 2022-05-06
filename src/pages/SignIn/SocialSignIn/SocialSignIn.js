import React, { useState } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './SocialSignIn.css';
import GoogleLogo from '../../../images/logo/google.png'
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const SocialSignIn = () => {
    // const [error, setError] = useState('')
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const location = useLocation();
    const navigate = useNavigate();
    let from = location?.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true });
    }
    let errorElement;
    if (error)
        errorElement = <p className='text-danger'>Error:{error?.message}</p>
    return (
        <div>
            {errorElement}
            <div className="google-logo">
                <button onClick={() => signInWithGoogle()} className='d-flex align-items-center justify-content-between google-button'>
                    <img style={{}} src={GoogleLogo} alt="" />
                    <span className='google-text fw-bold'>Sign In with google</span>
                </button>
            </div>

        </div>
    );
};

export default SocialSignIn;