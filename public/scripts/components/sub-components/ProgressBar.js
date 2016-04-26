import React from 'react';

export default React.createClass({
	getInitialState: function() {
		return {
			currentPage: this.props.currentPage,
			totalPages: this.props.totalPages
		}
	}
});