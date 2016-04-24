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
			this.setState({Stories: Stories});
		});
		Stories.fetch();
		console.log(Stories);
		console.log('If you can read this, you got to componentDidMount.');
	},
	render: function(){
		console.log(this.state);
		console.log(Stories.models);
		const categories = Stories.pluck('category');
		console.log(categories);
		const fables = Stories.where({category: 'fable'});
		console.log(fables);
		const fableRow = fables.map((fableval, i, array)=>{
			return(
				<CategoriesPreview
					key={i}
					title={fableval.get('title')}
					name = {fableval.get('author')}
					category = {fableval.get('category')}
					coverImage={fableval.get('coverImage')} />
				);

		});
		return(
			<section className="page-stories">
				<h3>Stories</h3>
				<h1>Pick a Story</h1>
				{fableRow}
			</section>
			);
	}
});
export default StoryList;