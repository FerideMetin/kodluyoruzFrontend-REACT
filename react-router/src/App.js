import "./App.css";

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

// pages

import Home from './components/Home'
import Users from './components/Users'
import About from './components/About'
import Error404 from './components/Error404'


// Router v5, v6'dan farkı switch yapısı kullanılıyor.

// <a ile verilen linkler sayfayı tamamen yeniler. <link ile verilenler ise sayfayı komple baştan yenilemez, o contenti değiştirir.

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink exact activeClassName="active" to="/">Home</NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/about">About</NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/users">Users</NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/users" component={Users} />
          <Route path="*" component={Error404} />



        </Switch>
      </div>
    </Router>

  );
}


export default App;
