import React from 'react';
import {Link, browserHistory} from 'react-router';
import CurrentStory from '../sub-components/CurrentStory.js';
import Rayon from 'rayon';
import students from './../../collections/StudentsCollection.js';
import $ from 'jquery';

export default React.createClass({
	getInitialState: function() {
		return {
			students: students,
			modalVisible: false,
			currentStudent: ''
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
			<option ref="student" value={student.get('id')} key={index}>{student.get('firstName')} {student.get('lastName')}</option> 
			);
		});
		return (
			<section className="page-details">
				<h1>Details</h1>
				<CurrentStory id={this.props.params.storyId}/>
				<div className="student-dropdown-component">
					<p className="student-prompt">Which student is participating?</p>
					<div align="center">
						<select name="mydropdown" onChange={this.selectChange}>
							<option value="Pick">Pick a student</option>
							{allStudents}
						</select>
					</div>
				</div>
				<Link onClick={this.updateStoryRead}className="button" to={'/stories/'+this.props.params.storyId+'/read'}>Read Now</Link>
                <a href= '#' onClick={this.openModal}>Add a New Student</a>
                 	<Rayon isOpen={this.state.modalVisible} onClose={this.closeModal}>
                     	<form className="add-student" onSubmit={this.addStudent}>
                     		<h1>Add a Student</h1>
                     		<fieldset>
								<label className="add-student-fName-label">First Name</label>
								<input type = "text" ref = "fName" placeholder = "First Name"></input>
								<label className="add-student-lName-label">Last Name</label>
								<input type = "text" ref = "lName" placeholder = "Last Name"></input>
							</fieldset>
							<div className = 'button-container'>
								<button className = 'button'>Submit</button>
								<a href = '#' className = "close" onClick={this.closeModal}>Cancel</a>
							</div>
						</form>
                 	</Rayon>
            	</section>
         );
     },
    openModal: function() {
        this.setState({
            modalVisible: true
        });
    },
    closeModal: function(e) {
    	e.preventDefault();
        this.setState({
            modalVisible: false
        });
    },
    addStudent: function(e){
    	e.preventDefault();
    	students.create({
    		firstName: this.refs.fName.value,
    		lastName: this.refs.lName.value
    	});
    	this.closeModal();
    	
     },
     selectChange: function(e) {
     	this.setState({currentStudent: e.target.value});
     },
     updateStoryRead: function(e) {
     	e.preventDefault();
     	let studentId = this.state.currentStudent;
     	let storyId = this.props.params.storyId;
     	$.ajax({
     		type: 'POST',
 			url: '/api/v1/storyread',
			data: {
				studentId: studentId,
				storyId: storyId
			},
			success: function() {
				browserHistory.push('/stories/'+storyId+'/read');
			},
			error: function(error) {
				console.log('You got an error: '+error);
			}
     	});
     }
});


