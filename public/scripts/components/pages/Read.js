import React from 'react';
import StoryModel from './../../models/StoryModel.js';

export default React.createClass({
	getInitialState: function() {
		console.log('getInitialState');
		console.log(this.state);
		
		return {
			story: new StoryModel({id: this.props.params.storyId}),
			error: ''
		};
	},
	componentDidMount: function() {
		console.log('componentDidMount');
		console.log(this.state);
		console.log(this.state.story);
		console.log('change');
		this.state.story.on('change', (storyData)=> {
			console.log('story changed');
			this.setState({story: this.state.story});
		});
		// console.log('error');
		// this.state.story.on('error', (error) => {
		// 	console.log(error);
		// 	this.setState({error: error});
		// });
		console.log('fetch');
		this.state.story.fetch({error: (model, error) => {
			console.log('fetch error', error);
			this.setState({error: error.responseJSON.message});
		}});
		console.log(this.state);
		console.log(this.state.story);
		// this.state.Stories.get();
		// console.log(this.state.Stories.get('models'));
		// const stories = this.state.Stories.map((val, i, arr) => {
		// 	return val;
		// });
		// for (var i = 0; i < this.state.Stories.length; i++) {
		// 	this.state.Stories[i]
		// }
	},
	render: function() {
		console.log('render');
		console.log(this.state);
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