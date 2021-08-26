import React, { Component } from 'react';

import { getToken } from './Utils.js';

class Authorization extends Component {
    state = { email: '', password: '' };
    getType = () => {
        return this.props.type === 'signin' ? 'Log In' : 'Create Account';
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        console.log(this.state.email, this.state.password)
        const token = await getToken(
            {
                email: this.state.email,
                password: this.state.password,
            },
            this.props.type
        );
        this.props.setToken(token);
        this.props.history.push('/todos')
    }

    render() { 
        return ( 
            <>
            <h1>{this.getType()}</h1>
            <form onSubmit={this.handleSubmit}>
                <div className="form">
                    <label>Email: </label>
                    <input
                        type='email'
                        placeholder='Email'
                        onChange={(e) => this.setState({ email: e.target.value })} />
                </div>
                <div className="form">
                    <label>Password: </label>
                    <input
                        type='password'
                        placeholder='Password'
                        onChange={(e) => this.setState({ password: e.target.value })} />
                </div>
                <button>{this.getType()}</button>
            </form>
            </>

         );
    }
}
 
export default Authorization;