import Backbone from 'backbone';

const StudentModel = Backbone.Model.extend({
	defaults:{
		firstName:'',
		lastName:'',
		createdAt: null,
		updatedAt: null,
		deletedAt: null,
		userType: ''

	},
	idAttribute: 'id',

	rootUrl: '/api/v1/student' 
});

export default  new StudentModel();


