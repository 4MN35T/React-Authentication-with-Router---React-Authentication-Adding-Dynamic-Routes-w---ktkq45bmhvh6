import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const formSubmint = (e) => {
        e.preventDefault();
        if (!email || !password) {
            setError(true);
            return;
        }
        setError(false);
        const user = {
            email: email,
            password: password,
        }
        localStorage.setItem('user', JSON.stringify(user));
        setEmail('');
        setPassword('');
    }

    return (
        <div className='register'>
            <h2>Register</h2>
            <form onSubmit={formSubmint} className='sign-up-form'>
                {error && <p className='error-para'>"Email or password isn't entered!"</p>}
                <div className='email-div'>
                    <label htmlFor="email">Email: </label>
                    <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" id="email" />
                </div>
                <div className='password-div'>
                    <label htmlFor="password">Password: </label>
                    <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" id="password" />
                </div>
                <button type="submit" className='register-btn'>Register</button>
            </form>
            <div>
                Already have an account?
                <Link to={'/login'}><button className='login-link'>Login</button></Link>
            </div>
        </div>
    )
}

export default Register;
