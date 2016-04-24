import React from 'react';
import Stories from './collections/StoryCollection';
import $ from 'jquery';

export default React.createClass({
	
	getInitialState: function () {
	  	console.log('getInitialState');
	  	console.log(this);
		return {story: []};
	 },

	searchStory: function () {

		const getStory = {
			type: 'GET',
			url: 'http://localhost/story' + this.refs.search.value + '/details',

			success: (data) => {
					this.setState({
						story: data.story.item //pull the data down and call it story 

					}),   		

						

					console.log('im in success');
					//let storyTitle = data.artists.items[0].name;
					//let storyPicture = data.artists.items[0].images[0].url;  
					//let storyDescription = ;

					//console.log(storyTitle);
					//console.log(storyPicture);
					//console.log(storyDescription);  


			},	

			

			error: function(err) {
				console.log(err);  
			},

			complete: function() {
				console.log('I got a response');
			},

			
		}
		$.ajax(getStory);
	},


	render: function () {
		console.log(this);

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







	

