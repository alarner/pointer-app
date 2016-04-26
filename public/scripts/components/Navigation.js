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
		if(this.state.user.get('id')) {
			return (<nav>
<<<<<<< HEAD
			<img src="../../images/pointer_logo.png" />
			<a href="#" onClick={this.logout}>Logout</a>
		</nav>);
		} else {
		return (<nav>
			<Link to='/register'>Contact</Link>		
			<Link to='/login'>Login</Link>
=======
			<img src="/images/pointer_logo.png" />
			<a href="#" className="nav-links" onClick={this.logout}>Logout</a>
		</nav>);
		} else {
		return (<nav>
			<img src="/images/pointer_logo.png" />
			<Link className="nav-links" to='/contact'>Contact</Link>		
			<Link className="nav-links" to='/login'>Login</Link>
>>>>>>> 9c33e96818afc19cdff94cbde76369d57415dc62
		</nav>);
		}
	},

	logout: function(e) {
		e.preventDefault();
		this.state.user.clear();
		$.ajax({
			type: 'POST',
			url: 'auth/logout'
		});
		browserHistory.push('/');
	}
});
<<<<<<< HEAD
=======

>>>>>>> 9c33e96818afc19cdff94cbde76369d57415dc62
