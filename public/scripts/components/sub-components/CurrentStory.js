import React from 'react';
import Stories from '../../collections/StoryCollection';
import Model from '../../models/StoryModel.js';
import $ from 'jquery';

export default React.createClass({
	
	getInitialState: function () {
	  	console.log('getInitialState');
	  	
		return {story: new Model({id: this.props.id})};
	 },

	componentDidMount: function () {
		console.log('component did mount');
		console.log(this.props);
		console.log(this.props.id);

		console.log(Stories.get(this.props.id));
		console.log(this.state);

		this.state.story.fetch();


		// const getStory = {
		// 	type: 'GET',
		// 	url: 'localhost/story' + this.refs.search.value + '/details',

		// 	success: (data) => {
		// 			this.setState({
		// 				story: data.story.item //pull the data down and call it story 

		// 			}),   		

						

		// 			console.log('im in success');
		// 			//let storyTitle = data.artists.items[0].name;
		// 			//let storyPicture = data.artists.items[0].images[0].url;  
		// 			//let storyDescription = ;

		// 			//console.log(storyTitle);
		// 			//console.log(storyPicture);
		// 			//console.log(storyDescription);  


		// 	},	

			

		// 	error: function(err) {
		// 		console.log(err);  
		// 	},

		// 	complete: function() {
		// 		console.log('I got a response');
		// 	}

			
		// };

		// $.ajax(getStory);
	},


	render: function () {
		

		return (
			<section>
				<h1>This is a Story Title</h1>
				<div>
					<img src=""/>
					<p>This is a sample description of a story.</p>
				</div>
			</section> 
		);
	}
});







	

