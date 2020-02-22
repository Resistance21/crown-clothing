import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import HomePage from './pages/home-page/homepage.component';
import ShopPage from './pages/shop-page/shopPage.component';

function App() {
  return (
    <div>
    <switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
    </switch>
    </div>
  );
}

export default App;
