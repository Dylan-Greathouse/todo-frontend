import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <header>
            <NavLink to='/' exact>Home</NavLink>
            <NavLink to='/login'>Log In</NavLink>
            <NavLink to='/createaccount'>Create Account</NavLink>
            </header>

         );
    }
}
 
export default Header;