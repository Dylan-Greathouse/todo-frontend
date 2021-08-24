import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header.js';


class HomePage extends Component {
  render() { 
    return <h1>You got some stuff To Do!</h1>;
  }
}


class App extends Component {
  state = { 
    token: localStorage.getItem('Token'),
   };
   setToken = (val) => {
     this.setState({ token: val })
   };
  render() { 
    return ( 
        <>
          <BrowserRouter>
          <Header />
          <section>
            <Switch>
            <Route exact path='/' component={HomePage} />

            </Switch>
          </section>
          </BrowserRouter>

        </>
     );
  }
}
 
export default App;


