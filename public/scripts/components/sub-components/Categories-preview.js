import React from 'react';
import StoryBox from '../../collections/StoryCollection.js';

export default React.createClass({
	render: function() {
		return (
			<div className="categories-preview">
				<h3>{this.props.category}</h3>
				<StoryBox
				pic= {pic}
				title= {title} />
				<button> See more {this.props.category}</button>
			</div>
		);
	}
});