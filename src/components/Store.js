import React from 'react';

function Store(props) {

    const handleLogout = () => {
        props.setIsLoggedIn(false);
    }
    
    return (
        <div className='store'>
            <h2>Welcome to the store!</h2>
            <button onClick={handleLogout} className="logout-btn">Logout</button>
        </div>
    );
}

export default Store;
