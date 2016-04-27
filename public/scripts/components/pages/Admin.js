import React from 'react';
import user from '../../models/User.js';
import $ from 'jquery';


export default React.createClass({
	getInitialState: function() {
		return {
			errors: {},
			user: user
		};
	},

	createTeacher: function(e) {
	e.preventDefault();
	$.ajax({
		url: '/auth/register',
		type: 'POST',
		data: {
			
			firstName: this.refs.first.value,
			lastName: this.refs.last.value, 
			email: this.refs.email.value,
			password: this.refs.password.value,
			userType: 'teacher'
		},

		success: (loggedArg) => {
			console.log(this.state.user.set(loggedArg));			
			this.state.user.set(loggedArg);
			
		},
		error: (errorArg) => {
				console.log(errorArg.responseJSON);
				this.setState({errors: errorArg.responseJSON});

			}
		});
	},

	randomPW: function () {
		
   		const chars = 'abcdefghijklmnopqrstuvwxyz!@#$%^&*ABCDEFGHIJKLMNOP1234567890';
    	let pass = '';
    	for (let x = 0; x < 8; x++) {
        	let i = Math.floor(Math.random() * chars.length);
        	pass += chars.charAt(i);
   	 	}
    	return pass;
	},

	generatePassword: function() {
 	   this.refs.password.value = this.randomPW();
	},

	render: function() {
		return (
			<section> 
				<h1>Add a new Teacher</h1>
				<form className="create-teacher" onSubmit={this.createTeacher}>
					<h2>Name</h2>
					<input className="u-half-width" type="text" placeholder="First" ref="first" title="First name is required and cannot left blank" required="required"/>
					<input className="u-half-width" type="text" placeholder="Last" ref="last" title="Last name is required and cannot left blank" required="required"/>
					<h2>Email</h2>
					<input className="u-half-width" type="text" ref="email" title="Should be a valid email address" required="required"/>
					<h2>Password</h2>
					<input className="u-half-width" type="text" ref='password' title="Password is required and cannot left blank" required="required"/>
					<button className="button-generate" type="button" onClick={this.generatePassword}>Generate Password</button>
					<div className="error">{this.state.errors.email ? this.state.errors.email.message : null}</div>
					<button className="button-primary" type='submit'>Create Teacher</button>
				</form>
			</section>  
			);
	}

});















