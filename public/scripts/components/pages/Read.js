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
		this.state.story.fetch({
			data: {withRelated: ['pages']},
			error: (model, error) => {
				this.setState({error: error.responseJSON.message});
			}
		});
	},
	render: function() {
		if(this.state.error) {
			return (

				<section className="page-read">
					<h1>{this.state.error}</h1>
				</section>
			);
			
		} else if (!this.state.story.get('title')){
			return (
				<h1>Loading</h1>
				);	
		}

		else {
			return (
				<section className="page-read">
					<h1>Naked Creature Finds a Stream</h1>
					<img className="eleven columns" src='https://trello-attachments.s3.amazonaws.com/571f7f7e00a12eb39662ee19/543x372/b10e6f962dbf447608f17601354f7927/upload_4_26_2016_at_9_47_25_AM.png'/>
					<p className="eleven columns">Whilst happening upon a stream, our creature friend exclaims, "Well would you look at that - a stream!!"</p>
					<div className="eight columns directionals-container">
						<button className="directionals">Back</button>
						<button className="directionals">Forward</button>
					</div>
					<h1>Pg. 1</h1>
				</section>
			);

		}
	}
});