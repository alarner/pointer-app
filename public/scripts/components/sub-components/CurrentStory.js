import React from 'react';
import Model from '../../models/StoryModel.js';

export default React.createClass({
	
	getInitialState: function () {
	  	
		return {story: new Model({id: this.props.id})};
	 },

	componentDidMount: function () {

		this.state.story.fetch();
		this.state.story.on('change', (updatedStory) => {
			this.setState({story: updatedStory});

		});	
	},

	componentWillUnmount: function () {
		this.state.story.removeEventListener('change', (updatedStory));

	},

	render: function () {
		return (
			<section>
				<h1>{this.state.story.get('title')}</h1>
				<div>
					<img src={this.state.story.get('coverImage')}/>
					<p>{this.state.story.get('description')}</p>
				</div>
			</section> 
		);
	}
});







	

