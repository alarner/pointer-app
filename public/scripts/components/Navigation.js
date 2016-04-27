import React from 'react';
import {Link} from 'react-router';
import $ from 'jquery';
import user from '../models/user';
import {browserHistory} from 'react-router';


export default React.createClass({
	getInitialState: function() {
		return {
			user: user
		};
	},

	componentDidMount: function() {
		this.state.user.on('change', () => {
			this.setState({
				user: user
			});
		});
	},

	render: function() {
		if (this.state.user.attributes.userType === 'Admin') {
			return (<nav>
			<Link to="/stories"><img src="/images/pointer_logo.png" /></Link>
			<a href="#" className="nav-links" onClick={this.logout}>Logout</a>
			<Link className="nav-links" to="/stories">Stories</Link>
			<Link className="nav-links" to="/Admin">Add User</Link>
		</nav>);
		}
		else if(this.state.user.get('id')) {
			return (<nav>
			<Link to="/stories"><img src="/images/pointer_logo.png" /></Link>
			<a href="#" className="nav-links" onClick={this.logout}>Logout</a>
			<Link className="nav-links" to="/stories">Stories</Link>
		</nav>);
		} else {
		return (<nav>
			<Link to="/"><img src="/images/pointer_logo.png" /></Link>
			<Link className="nav-links" to='/contact'>Contact</Link>		
			<Link className="nav-links" to='/login'>Login</Link>
		</nav>);
		}
	},

	logout: function(e) {
		e.preventDefault();
		this.state.user.clear();
		$.ajax({
			type: 'POST',
			url: '/auth/logout'
		});
		browserHistory.push('/');
	}
});

