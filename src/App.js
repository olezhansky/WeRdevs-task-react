import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './containers/Header/Header';
import About from './pages/About/About';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="wrapper">
        <Header />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Redirect to="/home" />
        </Switch>
    </div>
  );
}

export default App;
