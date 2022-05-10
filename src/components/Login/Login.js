import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Header from '../Header/Header';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css'
import { Bars } from  'react-loader-spinner'

const Login = () => {
    
    const [
        signInWithEmailAndPassword,
        user,
        loading
    ] = useSignInWithEmailAndPassword(auth);
    
    const navigate= useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    if(loading){
        return <div className='loader'><Bars height="100"
                    width="100"
                    color='#00FF1F'></Bars></div>
    }

    if(user){
        navigate(from, { replace: true });
    }


const handleSignin = event => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    signInWithEmailAndPassword(email, password);

    
}
    return (
        <div className='pb-3'>
            <Header></Header>
            <div className='login-form mt-5 pt-3'>
            <h2 className='text-center'>Please Login</h2>
                <Form onSubmit={handleSignin} className='p-3'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Login
            </Button>
            </Form>
            <p className='p-3 pb-0 mb-0 pt-0'>Are you new in Trip advisor? <Link className='text-decoration-none' to='/register'>Please Register</Link></p>
           <div className='p-3'><SocialLogin></SocialLogin></div>
            </div>
        </div>
    );
};

export default Login;