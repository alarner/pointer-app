import React from 'react';
import Stories from './../../collections/StoryCollection.js';

export default React.createClass({
	getInitialState: function() {
		console.log('getInitialState');
		console.log(this.state);
		return {
			Stories: Stories
		};
	},
	componentDidMount: function() {
		// console.log('componentDidMount');
		// console.log(this.state);
		this.state.Stories.fetch();
		// this.state.Stories.get();
		console.log(this.state);
		console.log(this.state.Stories);
		console.log(this.state.Stories.get('models'));
		// const stories = this.state.Stories.map((val, i, arr) => {
		// 	return val;
		// });
		// for (var i = 0; i < this.state.Stories.length; i++) {
		// 	this.state.Stories[i]
		// }

	},
	render: function() {
		console.log('render');
		console.log(this.state);
		return (
			<section className="page-read">
				<h1>Read</h1>
			</section>
		);
	}
});