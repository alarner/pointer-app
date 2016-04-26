import React from 'react';
import StoryModel from './../../models/StoryModel.js';

export default React.createClass({
	getInitialState: function() {
		return {
			story: new StoryModel({id: this.props.params.storyId}),
			error: '',
			currentPage: 0,
			currentWord: 0,
			arrayOfWords:[]

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
			console.log(this.state.story);
			return (
				<section className="page-read">
					<h1>{this.state.story.get('title')}</h1>
					<img className="eleven columns" src={this.state.story.get('pages')[this.state.currentPage].image}/>
					<p className="eleven columns">{this.state.story.get('pages')[this.state.currentPage].body}</p>
					<div className="eight columns directionals-container">
						<button className="directionals" onClick={this.previousPage}>Back</button>
						<button className="directionals" onClick={this.nextPage}>Forward</button>
					</div>
					<h1>Pg. {this.state.currentPage}</h1>
				</section>
			);

		}
	},
	nextPage: function() {
		console.log('nextPage');
		this.setState({currentPage:this.state.currentPage+1});
		console.log(this.state.currentPage);
	},
	previousPage: function(){
		console.log('previousPage');
		this.setState({currentPage:this.state.currentPage-1});
	}
});
