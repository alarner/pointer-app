import React from 'react';
import CurrentStory from '../sub-components/CurrentStory.js';

export default React.createClass({
	render: function() {
		console.log(this.props.params);
		return (
			<section className="page-details">
				<h1>Details</h1>
				<CurrentStory id={this.props.params.storyId}/>
			</section>
		);
	}
});