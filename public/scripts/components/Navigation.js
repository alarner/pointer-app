import React from 'react';
import {Link, browserHistory} from 'react-router';
import $ from 'jquery';
import user from '../models/User';

export default React.createClass({
	getInitialState: function() {
		return {
			user: user
		};
		console.log(this.state.user);
	},
	compondentDidMount: function() {
		this.state.user.on('change', () => {
			this.setState({user: user});
		});
	},

	render: function() {
		if(this.state.user.get('id')) {
			return (
			<nav>
				<img src="" />
				<a href="#" onClick={this.logout}>Logout</a>
			</nav>
		);

		} else {
			return (
			<nav>
				<img src="" />
				<Link to="/contact">Contact</Link> 
				<Link to="login">Login</Link> 
			</nav>
			);
		}	
	},
	logout: function(e) {
		e.preventDefault();
		console.log('clicky click click');
		console.log(this.state.user);
		this.state.user.clear();
		$.ajax({
			type: 'POST',
			url: 'auth/logout'
		});
		browserHistory.push('/');
	}
});