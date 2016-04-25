import React from 'react';
import Model from '../../models/StoryModel.js';

export default React.createClass({
	
	getInitialState: function () {
	  	console.log('getInitialState');
	  	
		return {story: new Model({id: this.props.id})};
	 },

	componentDidMount: function () {
		console.log(this.state);

		this.state.story.fetch();
		this.state.story.on('change', (updatedStory) => {
			this.setState({story: updatedStory});

		});	
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







	

