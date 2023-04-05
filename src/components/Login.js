import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [isLogIn, setIsLogIn] = useState(false);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (email.length < 0 || password.length < 0) {
            setError(true);
        }
        const user = JSON.parse(localStorage.getItem('user'));
        if (user && user.email === email && user.password === password) {
            props.setIsLoggedIn(true);
            setIsLogIn(true);
            setError(false);
            setEmail("");
            setPassword("");
        } else {
            setError(true);
        }

        if (isLogIn) {
            return <Redirect to="/store" />
        }
    };

    return (
        <div className='login'>
            <h2>Login</h2>
            <form onSubmit={handleSubmit} >
                {error ? <p className='error-para'>"Email or password is invalid"</p> : null}
                <div className='email-div'>
                    <label htmlFor="email">Email: </label>
                    <input type="email" id="email" value={email} onChange={handleEmailChange} autoComplete="off"/>
                </div>
                <div className='password-div'>
                    <label htmlFor="password">Password: </label>
                    <input type="password" id="password" value={password} onChange={handlePasswordChange} />
                </div>
                <button type="submit" className='login-btn'>Log In</button>
            </form>
            <div>
                Don't have an account? 
                <Link to="/"><button className='register-link'>Register</button></Link>
            </div>
        </div>
    );
};

export default Login;
