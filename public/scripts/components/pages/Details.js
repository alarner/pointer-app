import React from 'react';
import CurrentStory from '../sub-components/CurrentStory.js';

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
			<option value={student.get('id')} key={index}>{student.get('firstName')} {student.get('lastName')}</option> 
			);
		});
		return (
			<section className="page-details">
				<h1>Details</h1>
				<CurrentStory id={this.props.params.storyId}/>
				<div className="student-dropdown-component">
					<p className="student-prompt">Which student is participating?</p>
					<div align="center">
						<select name="mydropdown">
							<option value="Pick">Pick a student</option>
							{allStudents}
						</select>
					</div>
				</div>
			</section>
		);
	}
});