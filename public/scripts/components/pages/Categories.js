import React from 'react';
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
	render: function() {
		const categoryStories = this.state.Stories.map((storyval, i, array) => {
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
			<section className="page-categories">
				<div>
					<Link className="back-to-stories" to="/stories">Stories</Link><i className="fa fa-angle-right back-to-stories"></i><span>{this.props.params.categoryId}</span>
				</div>
				<div className="container category-story-row">
					{categoryStories}
				</div>
			</section>
			);
	}
});

export default CategoryPage;