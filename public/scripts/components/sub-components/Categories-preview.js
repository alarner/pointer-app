import React from 'react';
import StoryBox from '../../collections/StoryCollection.js';

export default React.createClass({
	render: function() {
		const categories = (this.props.category);
		console.log(categories);
		return (
			<section>
				<div className="categories-preview row">
					<h3>Fables</h3>
					
					<button className="category-button"> See more fables</button>
				</div>
				<div className="categories-preview row">
					<h3>Category 2</h3>
					
					<button className="category-button"> See more category 2</button>
				</div>
				<div className="categories-preview row">
					<h3>Category 3</h3>
					
					<button className="category-button"> See more category 3</button>
				</div>
			</section>
		);
	}
});

// <StoryBox class="three columns"/>
// <StoryBox class="three columns"/>
// <StoryBox class="three columns"/>
// <StoryBox class="three columns"/>