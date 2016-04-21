import Backbone from 'backbone';

import StudentModel from './../models/StudentModel.js';

const StudentsCollection = Backbone.Collection.extend({
	model: StudentModel,
	url: '/api/v1/student'
});

//URL still undefined

export default new StudentsCollection;