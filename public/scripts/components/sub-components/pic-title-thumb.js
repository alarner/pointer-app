import React from 'react';

export default createClass({
	render: function() {
		<div className="story-thumb-box">
			<img className="story-thumb-pic" src={this.refs.pic}/>
			<a className="story-thumb-title">{this.refs.title}</a>
		</div>;
	}
});