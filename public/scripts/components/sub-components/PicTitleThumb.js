import React from 'react';

export default React.createClass({
	render: function() {
		return (
		<div className="story-thumb-box">
			<img className="story-thumb-pic" src={this.props.coverImage}/>
			<a className="story-thumb-title">{this.props.title}</a>
		</div>
		);
	}
});