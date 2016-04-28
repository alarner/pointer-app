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
				Stories: Stories
			});
		});	
	},

	render: function() {
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
			
			let categoriesDropdown = (<div className="nav-cat-dropdown">	
				<select ref = "category" name="mydropdown" onChange={this.selectCat}>
					<option value="Pick">Go to Category</option>
							{allCategories}
				</select>
			</div>);
			
		if (this.state.user.get('userType') === 'Admin') {
			return (<nav>
			<Link to="/stories"><img src="/images/pointer_logo.png" /></Link>
			<a href="#" className="nav-links" onClick={this.logout}>Logout</a>
			<Link className="nav-links" to="/stories">Stories</Link>
			<Link className="nav-links" to="/Admin">Add User</Link>
			{categoriesDropdown}
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
     	browserHistory.push('/stories/' + this.refs.category.value);
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

