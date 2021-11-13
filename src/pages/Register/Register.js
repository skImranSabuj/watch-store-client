import { useForm } from "react-hook-form";
import { NavLink } from 'react-router-dom';
import './Register.css';

import { Button, ButtonGroup } from "react-bootstrap";
import googleIcon from '../../images/google.png'
import { useHistory, useLocation } from "react-router";
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const { register, handleSubmit, reset } = useForm();
    const { signInUsingGoogle,registerWithEmail,user,setUser } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    
    const onSubmit = data => {
        console.log(data);
        if(data.password === data.password1) {
            alert('Password did not matched')
            return
        }
        registerWithEmail(data.name, data.email, data.password, history)
    }
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }
    

    return (
        <div className="add-service">
             <div className="reg-form">
                <div className="register-header w-100 p-5 mt-0 text-white">
                    <h2>Register and Join Us:</h2> 
                </div>
                <div className="pb-2 mb-3 formAndNav bg-light border">
                    <form onSubmit={handleSubmit(onSubmit)} className="pt-4">     
                        <input type="text" {...register("name", { required: true })} placeholder="Your Full Name" />
                        <input type="email" {...register("email", { required: true })} placeholder="Your Email" />
                        <input type="password" {...register("password")} placeholder="Password" />
                        <input type="password" {...register("password2")} placeholder="Confirm Password" />
                        <input type="submit" value="Register"  className="btn-secondary"/>
                    </form>
                    <p className="py-2">
                        <NavLink to="/login">
                            <button className="btn btn-sm btn-outline-secondary">Already Registered? <strong>Login</strong></button>
                        </NavLink>
                    </p>
                </div>
                <h6 className="text-center">------ or ------</h6>
            <div className="other-login">
                <ButtonGroup aria-label="Basic example">
                    <Button variant="outline-secondary">
                        <img src={googleIcon} alt="" />
                    </Button>
                    <Button variant="outline-secondary" onClick={handleGoogleLogin}>Log in with Google </Button>
                </ButtonGroup>
            </div>
                
            </div>
        </div>
    );
};

export default Register;