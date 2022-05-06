import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialSignIn from '../SocialSignIn/SocialSignIn';

const SignIn = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth
    );
    const emailRef = useRef('');

    const navigate = useNavigate();
    const location = useLocation();
    let from = location?.state?.from?.pathname || '/';
    if (user) {
        navigate(from, { replace: true });
    }

    const handleNavigateToSignUp = () => {
        navigate('/signUp')
    }

    const handleSubmitSignIn = async (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        await signInWithEmailAndPassword(email, password);
    }

    const handleResetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email)
            toast('Password Reset link sent to your email')
        }
        else {
            toast('Please Enter Your Email Address')
        }
    }
    return (
        <div className='w-50 mx-auto container' style={{ height: "85vh" }}>
            <h2 className='display-1 fw-bolder text-center'>Sign In</h2>
            <p onClick={handleNavigateToSignUp} className='fs-4 text-center'>Don't have account ? <button className='btn btn-link text-decoration-none fs-4'>Sign up</button></p>
            <div className='d-flex justify-content-center align-items-center'>
                <div className='w-50 me-5'>
                    <Form onSubmit={handleSubmitSignIn}>
                        <Form.Group className="mb-2" controlId="formBasicEmail">
                            <Form.Label className='text-start'>Email</Form.Label>
                            <Form.Control ref={emailRef} type="email" name='email' placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group className="mb-2" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" placeholder="Password" required />
                            <p className='text-danger'>
                                {
                                    error ? error.message : ''
                                }
                            </p>
                        </Form.Group>
                        {
                            loading ? <Loading></Loading> : ""
                        }
                        <p>Forgot Password ? <button onClick={handleResetPassword} className='text-decoration-none btn btn-link'  >Reset Password</button></p>
                        <button className='w-50 mx-auto d-block mb-2 btn btn btn-outline-primary rounded-pill fs-16' variant="primary" type="submit">
                            Sign In
                        </button>
                    </Form>

                    <ToastContainer />
                </div>
                <div style={{ width: '0.5px', height: '300px' }} className="bg-secondary me-5 "></div>

                <div className='w-50'>
                    <SocialSignIn></SocialSignIn>
                </div>
            </div>
        </div>
    );
};

export default SignIn;