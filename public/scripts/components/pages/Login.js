import React from 'react';
import $ from 'jquery';
import {browserHistory} from 'react-router';
import user from '../../models/user';
import Navigation from '../Navigation';





export default React.createClass({
		getInitialState: function() {
		return {
			errors: {},
			user: user
		};
	},

	render: function() {
		return (
			<section className="page-login container">
				<Navigation />
				<form onSubmit={this.login} className="login-box"> Login
					<input className="u-full-width" type="text" placeholder="email" ref='email'/>
					<div className="error">{this.state.errors.email ? this.state.errors.email.message : null} </div> 
					<input className="u-full-width" type="password" placeholder="password" ref='password'/>
					<div className="error">{this.state.errors.password ? this.state.errors.password.message : null} </div>
					<button className="button-primary" type='submit'> Login </button>
				</form>
			</section>
		);
	},
	login: function(e) {
	e.preventDefault();
	$.ajax({
		url: '/auth/login',
		type: 'POST',
		data: {
			email: this.refs.email.value,
			password: this.refs.password.value
		},
		headers: {
			Accept: 'application/json'
		},
		success: (loggedArg) => {
				
		
			this.state.user.set(loggedArg);
			browserHistory.push('/dashboard');
		},
		error: (errorArg) => {
				
				// need to check the error messages coming from the backend to be more specific and redirects to registeration page incase of invalid account.
				this.setState({errors: errorArg.responseJSON});
			}
		});
	}
});



