import React from 'react';
import {Link} from 'react-router';
import $ from 'jquery';
import user from '../models/user';
import {browserHistory} from 'react-router';
import Stories from './../collections/StoryCollection';


export default React.createClass({
	getInitialState: function() {
		return {
			user: user,
			Stories: Stories
		};
	},

	componentDidMount: function() {
		this.state.user.on('change', () => {
			this.setState({
				user: user
			});
		});
		Stories.on('update', () =>{
			this.setState({
				Stories: Stories,
				//categories: categories
			});
		});	
	},

	render: function() {
<<<<<<< HEAD
		  const categories = Stories.pluck('category'); 
		 	let catList = [];
		 	categories.forEach(function(cat, i){
			    if(catList.indexOf(cat) === -1){
		   		catList.push(cat);
		   		}
			});
		 	 const allCategories = catList.map((val, i) => {
		 	 	return <option key = {i}>{val}</option>;
		 	 });
		
		if(this.state.user.get('id')) {
			return (<nav>
			<img src="/images/pointer_logo.png" />
			<div className="nav-cat-dropdown">	
				<select value = "Select a category" name="mydropdown" onChange={this.selectCat}>
					<option value="Pick">Go to Category</option>
							{allCategories}
				</select>
			</div>
=======
		if (this.state.user.attributes.userType === 'Admin') {
			return (<nav>
			<Link to="/stories"><img src="/images/pointer_logo.png" /></Link>
>>>>>>> 3c4299e876960e44e7ebdc6c4961086d7debb0e6
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
	 selectCat: function(e) {
     	this.setState({currentCategory: e.target.value});
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

