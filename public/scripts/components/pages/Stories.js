import React from 'react';
import StoryCollection from './../collections/';
import CategoriesPreview from './sub-components/Categories-preview.js';


const StoryList = React.createClass ({
	getInitialState: function(){
		//always returns an object
		return{stories:[]};
	},
	componentDidMount: function(){
			console.log('this.state=', this.state);
			this.setState({stories:StoryCollection});
		
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
			<section className="page-stories">
				<h3>Stories</h3>
				<h1>Pick a Story</h1>
				{storyRows}
			</section>
			);
	}
});
export default StoryList;