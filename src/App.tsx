import React from 'react';
import './App.css';
import About from './component/About';
import Nav from './component/Nav';
import Shop from './component/Shop';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Item from './component/Item';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path='/' exact component={home} />
          <Route path='/about' component={About} />
          <Route path='/shop' exact component={Shop} />
          <Route path='/shop/:id' component={Item} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

const home = () => {
  return <h1>Home Page</h1>;
};

export default App;
