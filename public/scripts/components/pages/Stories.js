import React from 'react';
import $ from 'jquery';
import Stories from './../../collections/StoryCollection';
import PicTitleThumb from './../sub-components/PicTitleThumb.js';


const StoryList = React.createClass ({
	getInitialState: function(){
		return{Stories: Stories};
	},
	componentDidMount: function(){
		Stories.on('update', () =>{
			this.setState({Stories: Stories});
		});
		Stories.fetch();
	},
	render: function(){
		const categories = Stories.pluck('category');
		let eachCategory = [];
		$.each(categories, function(i, el){
		    if($.inArray(el, eachCategory) === -1)
		    	eachCategory.push(el);
		});
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
					key = {i}
					title={storyval.get('title')}
					name = {storyval.get('author')}
					category = {storyval.get('category')}
					coverImage={storyval.get('coverImage')} />
					);
			});
			return(
				<div className="categories-preview row" key={i}>
					<h3>{category}</h3>
					{stories}
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