import React from 'react';
import Stories from './../../collections/StoryCollection';
import CategoriesPreview from './../sub-components/Categories-preview.js';


const StoryList = React.createClass ({
	getInitialState: function(){
		//always returns an object
		return{Stories:[]};
		console.log(this.state);
	},
	componentDidMount: function(){
			// console.log('this.state=', this.state.stories);
		Stories.on('update', () =>{
			this.setState({Stories: Stories})
		});
		Stories.fetch();
		console.log(Stories);
		console.log('If you can read this, you got to componentDidMount.');
	},
	render: function(){
		console.log(this.state);
		console.log(Stories.models);
		const storyRows = this.state.Stories.map((storyval, i, array)=>{
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
		console.log({storyRows});
	}
});
export default StoryList;