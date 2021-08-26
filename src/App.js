import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header.js';
import Authorization from './Auth.js'
import ToDoList from './Todos.js';


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
            <Route path='/login' render={(routerProps) => (
              <Authorization
                setToken={this.setToken}
                type='signin'
                {...routerProps}
              />
            )}
          />

          <Route
            path='/createaccount'
            render={(routerProps) => (
              <Authorization
                setToken={this.setToken}
                type='signup'
                {...routerProps}
                />
            )}
            />

          <Route
              path='/todos'
              render={(routerProps) =>
                this.state.token ? (
                  <ToDoList {...routerProps} />
                ) : (
                  <Redirect to='/login' />
                )
              }
            />

            </Switch>
          </section>
          </BrowserRouter>

        </>
     );
  }
}
 
export default App;


