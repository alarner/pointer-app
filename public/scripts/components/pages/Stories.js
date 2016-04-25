import React from 'react';
import $ from 'jquery';
import Stories from './../../collections/StoryCollection';
import PicTitleThumb from './../sub-components/pic-title-thumb.js';


const StoryList = React.createClass ({
	getInitialState: function(){
		//always returns an object
		return{Stories:[]};
		console.log(this.state);
	},
	componentDidMount: function(){
			// console.log('this.state=', this.state.stories);
		Stories.on('update', () =>{
			this.setState({Stories: Stories});
		});
		Stories.fetch();
		console.log(Stories);
		console.log('If you can read this, you got to componentDidMount.');
	},
	render: function(){
		console.log(this.state);
		const categories = Stories.pluck('category');
		console.log(categories);
		let eachCategory = [];
		$.each(categories, function(i, el){
		    if($.inArray(el, eachCategory) === -1)
		    	eachCategory.push(el);
		});
		console.log(eachCategory);
		const storyRows = eachCategory.map((category, i, array) => {
			return(
				<div className="categories-preview row">
					<h3>{category}</h3>
					
					<button className="category-button"> See more {category}</button>
				</div>);
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

// <CategoriesPreview
// 					key={i}
// 					title={storyval.get('title')}
// 					name = {storyval.get('author')}
// 					category = {storyval.get('category')}
// 					coverImage={storyval.get('coverImage')} />
// 				);