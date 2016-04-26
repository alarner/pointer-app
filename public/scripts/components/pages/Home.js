import React from 'react';

export default React.createClass({
	render: function() {
		return (
			<section className="page-home container">
				<div className="row">
        			<div className="one-half column">
            			<h4>Video box below</h4>
					</div>
        			<div className="one-half column">
						<p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
						Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
						<form>
							<input type='email' placeholder='email'/>
							<input type='button' placeholder='Sign up for early access'/>
						</form>
					</div>
				</div>
			</section>
		);
	}
});