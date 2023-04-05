import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

const Login = ({ setIsLoggedIn }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    // const [isLogIn, setIsLogIn] = useState(false);

    const formSubmit = (e) => {
        e.preventDefault();
        if (!email || !password || !JSON.parse(localStorage.getItem('user')) || JSON.parse(localStorage.getItem('user')).email != email || JSON.parse(localStorage.getItem('user')).password != password) {
            setError(true);
            return;
        }
        setError(false);
        setIsLoggedIn(true);
        setEmail('');
        setPassword('');
    }

    return (
        <div className='login'>
            <h2>Login</h2>
            <form onSubmit={formSubmit}>
                {error && <p className='error-para'>"Email or password is invalid"</p>}
                <div className='email-div'>
                    <label htmlFor="email">Email: </label>
                    <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" id="email" />
                </div>
                <div className='password-div'>
                    <label htmlFor="password">Password: </label>
                    <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" id="password" />
                </div>
                <button type="submit" className='login-btn'>Log In</button>
            </form>
            <div>
                Don't have an account?
                <Link to={'/'}><button className='register-link'>Register</button></Link>
            </div>
        </div>
    );
};

export default Login;
