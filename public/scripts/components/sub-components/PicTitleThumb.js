import React from 'react';
import {Link} from 'react-router';

export default React.createClass({
	render: function() {
		return (
		<div className="story-thumb-box" >
			<Link to="/details">
				<img className="story-thumb-pic" src={this.props.coverImage}/>
			</Link>
			<Link to="/details" className="story-thumb-title"><h2>{this.props.title}</h2></Link>
		</div>
		);
	}
});