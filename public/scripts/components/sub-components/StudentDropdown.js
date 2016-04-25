import React from 'react';

import students from './../../collections/StudentsCollection.js'; 

export default React.createClass({
	getInitialState: function() {
		return {
			students: students
		};
	},
	componentDidMount: function() {
		students.on('update', () => {
			this.setState({students: students});
		});
		students.fetch();
	},
	render: function() {
		const allStudents = this.state.students.map((student, index, array) => {
		return (
			<option value="Student" key={index}>{student.get('firstName')} {student.get('lastName')}</option> 
			)
		});
		return (
		<div className="student-dropdown-component">
			<p className="student-prompt">Which student is participating?</p>
			<div align="center">
				<select name="mydropdown">
					<option value="Pick">Pick a student</option>
					{allStudents}
				</select>
			</div>
		</div>
		);
	}
});

