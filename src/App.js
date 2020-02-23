import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import HomePage from './pages/home-page/homepage.component';
import ShopPage from './pages/shop-page/shopPage.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up.component';

function App() {
  return (
    <div>
      <Header />
      <switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUp} />
      </switch>
    </div>
  );
}

export default App;
