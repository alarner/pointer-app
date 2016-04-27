import React from 'react';
import {Link} from 'react-router';

export default React.createClass({
	render: function() {
		return (
		<div className="story-thumb-box four columns" >
			<Link className="thumb-pic-container" to={`/stories/${this.props.id}/details`}>
				<img className="story-thumb-pic" src={this.props.coverImage}/>
			</Link>
			<Link to={`/stories/${this.props.id}/details`} className="story-thumb-title"><p className="p-thumb-title">{this.props.title}</p></Link>
			<div className="star-row">
				<p>
					<i className="fa fa-star-o fa-2x"></i>
					<i className="fa fa-star-o fa-2x"></i>
					<i className="fa fa-star-o fa-2x"></i>
					<i className="fa fa-star-o fa-2x"></i>
				</p>
			</div>
		</div>
		);
	}
});