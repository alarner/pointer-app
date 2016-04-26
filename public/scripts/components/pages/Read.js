import React from 'react';
import StoryModel from './../../models/StoryModel.js';

export default React.createClass({
	getInitialState: function() {
		return {
			story: new StoryModel({id: this.props.params.storyId}),
			error: ''
		};
	},
	componentDidMount: function() {
		this.state.story.on('change', (storyData)=> {
			this.setState({story: this.state.story});
		});
		this.state.story.fetch({error: (model, error) => {
			this.setState({error: error.responseJSON.message});
		}});
	},
	render: function() {
		if(this.state.error === '') {
			return (
				<section className="page-read">
					<h1>Read</h1>
				</section>
			);
		} else {
			return (
				<section className="page-read">
					<h1>{this.state.error}</h1>
				</section>
			);
		}
	}
});