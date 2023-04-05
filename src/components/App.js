import React, { useState } from 'react';
import '../styles/App.css';
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";
import Register from './Register';
import Login from './Login';
import Store from './Store';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div id="main">
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to={'/'}>Register</Link>
            </li>
            <li>
              <Link to={'login'}>Login</Link>
            </li>
             {isLoggedIn && <li>
              <Link to={'store'}>Store</Link>
            </li>}
          </ul>
        </nav>

        <Switch>
          <Route exact path={'/'}>
            <Register />
          </Route>
          <Route exact path={'/login'}>
            <Login setIsLoggedIn={setIsLoggedIn} />
          </Route>
          <Route exact path={'/store'}>
            <Store setIsLoggedIn={setIsLoggedIn} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;
