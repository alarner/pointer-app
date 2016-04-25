import React from 'react';
import $ from 'jquery';
import Stories from './../../collections/StoryCollection';
import PicTitleThumb from './../sub-components/pic-title-thumb.js';


const StoryList = React.createClass ({
	getInitialState: function(){
		return{Stories: Stories};
		console.log(this.state);
	},
	componentDidMount: function(){
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
			const stories = this.state.Stories.filter((storyval, i, array) =>{
				if (storyval.get('category') === category) {
					return true;
				} else {
					return false;
				}
				}).map((storyval, i, array)=>{
				return (
					<PicTitleThumb
					title={storyval.get('title')}
					name = {storyval.get('author')}
					category = {storyval.get('category')}
					coverImage={storyval.get('coverImage')} />
					);
			});
			return(
				<div className="categories-preview row">
					<h3>{category}</h3>
					{stories}
					<button className="category-button"> See more {category}</button>
				</div>);
		});
		console.log({storyRows});
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