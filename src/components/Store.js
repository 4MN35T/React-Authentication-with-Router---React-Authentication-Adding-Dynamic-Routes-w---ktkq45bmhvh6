import React from 'react';
import { useHistory } from 'react-router-dom';

function Store({ setIsLoggedIn }) {
    const history = useHistory();
    const logOutClicked = () => {
        setIsLoggedIn(false);
        history.push('/');
    }
    return (
        <div className='store'>
            <h2>Welcome to the store!</h2>
            <button className="logout-btn" onClick={logOutClicked}>Logout</button>
        </div>
    );
}

export default Store;
