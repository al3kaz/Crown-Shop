import React, { useEffect, lazy, Suspense} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {selectCurrentUser, } from './redux/user/user.selectors';
import {checkUserSession} from './redux/user/user.actions';

import Header from './components/header/header.component';
import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error.boundary.component';

import {GlobalStyle} from './global.styles';

const HomePage = lazy(()=> import('./pages/homepage/HomePage.component.jsx'));
const ShopPage = lazy(()=> import('./pages/shop/shop.component'));
const SignInSignUpPage = lazy(()=> import('./pages/signe-in-and-signe-up/signe-in-and-signe-up.component'));
const CheckoutPage = lazy(()=> import('./pages/checkout/checkout.component'));

const App = ({checkUserSession, currentUser})=> {

useEffect( ()=> {
  checkUserSession()
}, [])

    return (
      <div className="App" >
        <GlobalStyle/>
        <Header />
        <Switch>
          <ErrorBoundary>
          <Suspense fallback={ <Spinner/> }>
             <Route exact path="/" component={HomePage} />
             <Route path="/shop" component={ShopPage} />
             <Route exact path="/checkout" component={CheckoutPage} />
             <Route exact path="/signin" render={() => currentUser ?
              (<Redirect to="/" />) : (<SignInSignUpPage />)} />
          </Suspense>
          </ErrorBoundary>
        </Switch>
      </div>
    );
  }

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser,
})

const mapDispatchToPpros = dispatch => ({
  checkUserSession: ()=> dispatch(checkUserSession())
})

export default connect(mapStateToProps,mapDispatchToPpros)(App);
