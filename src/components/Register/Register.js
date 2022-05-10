import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
        const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});


    const handleRagister = event =>{
            event.preventDefault();
            const email = event.target.email.value;
            const password = event.target.password.value;
            console.log(email, password);

            createUserWithEmailAndPassword(email, password);
    }
    return (
        <div>
            <Header></Header>
            <div className='login-form mt-3 pt-3'>
            <h2 className='text-center'>Please Register</h2>
                <Form onSubmit={handleRagister} className='p-3'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" name='name' placeholder="Enter Your Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" name='confirPassword' placeholder="Confirm Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Register
            </Button>
            </Form>
            <p className='p-3 m-0 pb-0  pt-0'>Already Register? <Link className='text-decoration-none' to='/login'>Please Login</Link></p>
            <div className='p-3'><SocialLogin></SocialLogin></div>
            </div>
        </div>
    );
};

export default Register;