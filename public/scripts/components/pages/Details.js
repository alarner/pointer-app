import React from 'react';
import StudentDropdown from '../sub-components/StudentDropdown.js'

export default React.createClass({
	render: function() {
		return (
			<section className="page-details">
				<h1>Details</h1>
				<StudentDropdown />
			</section>
		);
	}
});