import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router';
import Stories from './../../collections/StoryCollection';
import PicTitleThumb from './../sub-components/PicTitleThumb.js';


const CategoryPage = React.createClass ({
	getInitialState: function(){
		return{Stories: Stories};
	},
	componentDidMount: function(){
		Stories.on('update', this.updateStories);
		Stories.fetch({
			data: {
				where: {
					category: this.props.params.categoryId
				}
			}
		});
	},
	componentWillUnmount: function() {
		Stories.off('update', this.updateStories);
	},
	updateStories: function() {
		this.setState({Stories: Stories});
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
					key = {storyval.get('id')}
					id = {storyval.get('id')}
					title={storyval.get('title')}
					name = {storyval.get('author')}
					category = {storyval.get('category')}
					coverImage={storyval.get('coverImage')} />
					);
			});
			return(
				<div className="categories-page-row row" key={i}>
					{stories}
				</div>);
		});
		return(
			<section className="page-categories">
				<div>
					<Link className="back-to-stories" to="/stories">Stories</Link><i className="fa fa-angle-right back-to-stories"></i><span>{this.props.params.categoryId}</span>
				</div>
				<div className="container">
					{storyRows}
				</div>
			</section>
			);
	}
});
export default CategoryPage;