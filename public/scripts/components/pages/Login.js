import React from 'react';

export default React.createClass({
	render: function() {
		return (
			<section className="page-login">
				<form className="login-box"> Login
					<input type="text" placeholder="email"/>
					<div className="error"> </div> 
					<input type="password" placeholder="password"/>
					<div className="error"> </div>
					<button> Login </button>
				</form>
			</section>
		);
	}
});