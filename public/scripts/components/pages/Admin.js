import React from 'react';
import $ from 'jquery';


export default React.createClass({
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
					<button className="button-generate" type="button">Generate Password</button>
					<button className="button-primary" type='submit'>Create Teacher</button>
				</form>
			</section>  
			);




	}







});















