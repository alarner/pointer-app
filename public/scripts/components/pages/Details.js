import React from 'react';
import CurrentStory from '../sub-components/CurrentStory.js';

export default React.createClass({
	render: function() {
		return (
			<section className="page-details">
				<h1>Details</h1>
				<CurrentStory />
			</section>
		);
	}
});