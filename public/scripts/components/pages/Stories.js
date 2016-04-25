import React from 'react';
import StoryCollection from './../../collections/StoryCollection';



const StoryList = React.createClass ({
	getInitialState: function(){
		return{
			stories: StoryCollection
		};
	},
	componentDidMount: function(){
		console.log('this.state=', this.state);
		StoryCollection.on('update', () =>{
            this.setState({stories: StoryCollection});
        });
		
		StoryCollection.fetch();
		console.log('If you can read this, you got to componentDidMount.');
	},
	render: function(){
		// const storyRows = this.state.stories.map((storyval, i, array)=>{
		// 	return(
		// 		<CategoriesPreview
		// 			key={i}
		// 			title={storyval.get('title')}
		// 			name = {storyval.get('author')}
		// 			category = {storyval.get('category')}
		// 			coverimage={storyval.get('coverimage')} />
		// 		);

		// });
		return(
			<section className="page-stories">
				<h3>Stories</h3>
				<h1>Pick a Story</h1>

			</section>
			);
	}
});
export default StoryList;