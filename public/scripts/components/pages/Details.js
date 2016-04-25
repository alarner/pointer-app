import React from 'react';
import ReadNowButton from './../sub-components/ReadNowButton';

export default React.createClass({
	render: function() {
		console.log(this.props.storyId);
		return (
			<section className="page-details">
				<h1>Details</h1>
				<ReadNowButton storyId={this.props.params.storyId}/>
			</section>
		);
	}
});