import React from 'react';
import User from '../../models/User.js';
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
		url: '/auth/login',
		type: 'POST',
		data: {
			
			firstName: this.refs.first.value,
			lastName: this.refs.last.value, 
			email: this.refs.email.value,
			password: this.refs.password.value
		},

		success: (loggedArg) => {
						
			this.state.user.set(loggedArg);
		},
		error: (errorArg) => {
				
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
 	   this.refs.password.value = randomPW();
	},



	render: function() {
		return (
			<section> 
				<h1>Add a new Teacher</h1>
				<form className="create-teacher" on Submit={this.createTeacher}>
					<h2>Name</h2>
					<input className="u-full-width" type="text" placeholder="First" ref="first" title="First name is required and cannot left blank" required="required"/>
					<input className="u-full-width" type="text" placeholder="Last" ref="last" title="Last name is required and cannot left blank" required="required"/>/>
					<h2>Email</h2>
					<input className="u-full-width" type="text" ref="email" title="Should be a valid email address" required="required"/>
					<h2>Password</h2>
					<input className="u-full-width" type="password" ref='password' title="Password is required and cannot left blank" required="required"/>
					<button className="button-generate" type="button" on Click={this.generatePassword}>Generate Password</button>
					<button className="button-primary" type='submit'>Create Teacher</button>
				</form>
			</section>  
			);
	}


});















