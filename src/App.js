import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {selectCurrentUser, } from './redux/user/user.selectors';
import {checkUserSession} from './redux/user/user.actions';

import HomePage from './pages/homepage/HomePage.component.jsx';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInSignUpPage from './pages/signe-in-and-signe-up/signe-in-and-signe-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

import './App.css';

class App extends Component {

  unsubscribeFromAuth = null

  componentDidMount() {
    const {checkUserSession} = this.props;
    checkUserSession()
}


  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div className="App" >
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route exact path="/signin" render={() => this.props.currentUser ?
            (<Redirect to="/" />) : (<SignInSignUpPage />)} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser,
})

const mapDispatchToPpros = dispatch => ({
  checkUserSession: ()=> dispatch(checkUserSession())
})

export default connect(mapStateToProps,mapDispatchToPpros)(App);
