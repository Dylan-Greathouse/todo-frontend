import React, { Component } from 'react';

import { getToken } from './Utils.js';

class Authorization extends Component {
    state = { email: '', password: '' };
    getType = () => {
        return this.props.type === 'signin' ? 'Log In' : 'Create Account';
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        const token = await getToken(
            {
                email: this.state.email,
                password: this.state.password,
            },
            this.props.type
        );
        
    }

    render() { 
        return (  );
    }
}
 
export default Authorization;