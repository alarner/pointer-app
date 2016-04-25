import React from 'react';
import {Link} from 'react-router';

export default React.createClass({
	render: function() {
		return (
<<<<<<< HEAD
		<div className="story-thumb-box" >
			<Link to="/details">
				<img className="story-thumb-pic" src={this.props.coverImage}/>
			</Link>
			<Link to="/details" className="story-thumb-title"><h2>{this.props.title}</h2></Link>
=======
		<div className="story-thumb-box">
			<img className="story-thumb-pic" src={this.props.coverImage}/>
			<a className="story-thumb-title">{this.props.title}</a>
>>>>>>> e33b2897a40540c047a95bbd7696c0b2710739e4
		</div>
		);
	}
});