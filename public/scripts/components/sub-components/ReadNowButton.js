import React from 'react';
import {Link} from 'react-router';

export default React.createClass({
	render: function() {
		return (
				<Link className=".button" to={'/stories/'+this.props.storyId+'/read'}>Read Now</Link>

		);
	}
});

