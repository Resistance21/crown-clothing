import React, { Component } from 'react';
import { connect } from 'react-redux'

import './App.css';


import {Route, Switch} from 'react-router-dom';
import HomePage from './pages/home-page/homepage.component';
import ShopPage from './pages/shop-page/shopPage.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';

class App extends Component {
  unsubscribeFromAuth = null;


  componentDidMount() {
    const { setCurrentUser } = this.props;
      this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth);

          userRef.onSnapshot(snapShot => {
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            });
            console.log("Frist ONE");
          }); 
        }
        setCurrentUser(userAuth);
        console.log("SECOND ONE");
        
      });
    }


  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  


  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchTpProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})


export default connect(null, mapDispatchTpProps)(App);
