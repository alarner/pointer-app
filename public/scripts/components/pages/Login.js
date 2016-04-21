import React from 'react';

export default React.createClass({
	render: function() {
		return (
			<section className="page-login">
				<div className="login-box"> Login
					<input type="text" placeholder="email"/> 
					<input type="text" placeholder="password"/>
					<button> Login </button>
				</div>
				


			</section>
		);
	}
});