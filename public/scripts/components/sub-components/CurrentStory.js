import React from 'react';
import Model from '../../models/StoryModel.js';

export default React.createClass({
	
	getInitialState: function () {
	  	
		return {story: new Model({id: this.props.id})};
	 },

	componentDidMount: function () {

		this.state.story.fetch();
		this.state.story.on('change', this.modelChange); 

		
	},

	componentWillUnmount: function () {
		this.state.story.off('change', this.modelChange);

	},

	modelChange: function (updatedStory) {
		this.setState({story: updatedStory});
	},



	render: function () {
		return (
			<section className="row">
				<div className='one-third column'>
					<img className="details-thumb" src={this.state.story.get('coverImage')}/>
				</div>	
				<div className="two-thirds column">
					<h2>{this.state.story.get('title')}</h2>
					<p>{this.state.story.get('description')}</p>	
				</div>
			</section> 
		);
	}
});







	

