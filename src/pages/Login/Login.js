import React from "react";
import { useForm } from "react-hook-form";
import './Login.css';
// import * as yup from "yup";
import { Button, ButtonGroup, Form } from "react-bootstrap";
import googleIcon from '../../images/google.png'
import useFirebase from "../../hooks/useFirebase";
import { useHistory, useLocation } from "react-router";
import { Link, NavLink } from "react-router-dom";

// const schema = yup.object({
//     firstName: yup.string().required(),
//     age: yup.number().positive().integer().required(),
// }).required();

const Login = () => {
    const { register, handleSubmit, reset } = useForm();
    const { signInUsingGoogle } = useFirebase();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';
    const onSubmit = data => {
        // if(data.password!==data.password1)
    }
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }
    // const
    return (
        <div className="login-page">
            <div className="reg-form login-form">
                <div className="register-header w-100 p-5 mt-0 text-white">
                    <h2>Login and Explore Dorkar:</h2> 
                </div>
                <div className="pb-2 mb-3 formAndNav bg-light border">
                <form onSubmit={handleSubmit(onSubmit)} className="p-4">     
                        <input {...register("email", { required: true })} placeholder="Your Email" />
                        <input type="password" {...register("password")} placeholder="Password" />
                        <input type="submit" value="Login"  className="btn-secondary"/>
                    </form>
                    <p className="py-2">
                    <NavLink to="/register">
                            <button className="btn btn-sm btn-outline-secondary">Don't Have an account? <strong>Register</strong></button>
                        </NavLink>
                    </p>
                </div>
                <h6 className="text-center">------ or ------</h6>
            <div className="other-login">
                <ButtonGroup aria-label="Basic example">
                    <Button variant="secondary">
                        <img src={googleIcon} alt="" />
                    </Button>
                    <Button variant="outline-secondary" onClick={handleGoogleLogin}>Log in with Google </Button>
                </ButtonGroup>
            </div>
                
            </div>
            {/* <div className="login-form">
                <div className="p-5 w-75">
                    <h2>Place login:</h2> 
                    <form onSubmit={handleSubmit(onSubmit)} className="p-3">     
                        <input {...register("email", { required: true })} placeholder="Your Email" />
                        <input type="password" {...register("password")} placeholder="Password" />
                        <input type="submit" value="Login"/>
                    </form>
                    <p className="py-2">
                        <NavLink to="/register">
                            <button className="btn-secondary">Don't Have an account? Register</button>
                        </NavLink>
                    </p>
                </div>
                
            </div>
            <h6 className="text-center">------ or ------</h6>
            <div className="other-login">
                <ButtonGroup aria-label="Basic example">
                    <Button variant="outline-secondary">
                        <img src={googleIcon} alt="" />
                    </Button>
                    <Button variant="outline-secondary" onClick={handleGoogleLogin}>Log in with Google </Button>
                </ButtonGroup>
            </div> */}



        </div>
    );
};

export default Login;