import React from 'react';
import StoryBox from '../../collections/StoryCollection.js';

export default React.createClass({
	render: function() {
		return (
			<div className="categories-preview row">
				<h3>{this.props.category}</h3>
				<StoryBox class="three columns"/>
				<StoryBox class="three columns"/>
				<StoryBox class="three columns"/>
				<StoryBox class="three columns"/>
				<button className="category-button"> See more {this.props.category}</button>
			</div>
		);
	}
});