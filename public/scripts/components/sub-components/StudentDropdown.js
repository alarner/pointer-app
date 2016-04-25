import React from 'react';

import students from './../../collections/StudentsCollection.js'; 

export default React.createClass({
	getInitialState: function() {
		return {
			students: students
		};
	},
	componentDidMount: function() {
		// this.state.students.fetch();
		console.log(this.state)
		students.on('update', () => {
			this.setState({students: students});
		});
		students.fetch();
		console.log(this.state.students);
	},
	render: function() {
		// const allStudents = this.state.students.map(student, index, array) => {

		// 	}
		return (
		<div className="student-dropdown-component">
			<p className="student-prompt">Which student is participating?</p>
			<div align="center">
				<select name="mydropdown">
					<option value="Pick">Pick a student</option>
					<option value="Student">Bobby Blobby </option>
					<option value="Student">Poppy Sloppy</option>
					<option value="Student">Rainbow Brite</option>
					<option value="Student">Jimminy Crickey</option>
					<option value="Student">Jerri Blank</option>
				</select>
			</div>
		</div>
		);
	}
});

