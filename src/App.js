import React from 'react';
import { Switch, Route, Link, withRouter } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepages/homepages.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';

// const HatsPage = () => (
//   <div>
//     <h1>HATS PAGE</h1>
//   </div>
// )

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
