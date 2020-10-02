import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import HomePage from './pages/homepage/HomePage.component.jsx';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import signeInAndSigneUp from './pages/signe-in-and-signe-up/signe-in-and-signe-up.component';
import { auth } from './firebase/firebase.utils';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

      currentUser: null

    }
  }

  usubscribeFromAuth = null

  componentDidMount() {
    this.usubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })
      console.log(user);

    })
  }

  componentWillUnmount() {
    this.usubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={signeInAndSigneUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
