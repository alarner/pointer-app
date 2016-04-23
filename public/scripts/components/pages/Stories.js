import React from 'react';
import StoryCollection from './../collections/';
import Backbone from 'backbone';
import CategoriesPreview from './sub-components/Categories-preview.js';

export default React.createClass({
	render: function() {
		return (
			<section className="page-stories">
				<h1>Stories</h1>
			</section>
		);
	}
});


///fetch the list of stories
// const StoryCollection = Backbone.Collection.extend({
// 	model: Story,
// 	url: '/api/v1/story'
// });

// export default new StoryCollection();

// set the initial state
const StoryList = React.createClass ({
	getInitialState: function(){
		//always returns an object
		return{stories:[]};
	},
	componentDidMount: function(){
		StoryCollection.on('add change remove destroy', ()=>{//i can put the eventS i need here
			console.log('this.state=', this.state);
			this.setState({stories:StoryCollection})
		});
		StoryCollection.fetch();
		console.log('If you can read this, you got to componentDidMount.');
	},
	render: function(){
		const storyRows = this.state.stories.map((storyval, i, array)=>{
			return(
				<CategoriesPreview
					key={i}
					title={storyval.get('title')}
					name = {storyval.get('author')}
					category = {storyval.get('category')}
					coverimage={storyval.get('coverimage')} />
				);

		});
		return(
			
			)
	}
});
//componentDidMount

//render