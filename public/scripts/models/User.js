import Backbone from 'backbone';

const UserModel = Backbone.Model.extend ({
	defaults:{
		id: null,
		firstName: '',
		lastName: '',
		email: '',
		createdAt: null,
		updatedAt: null,
		deletedAt: null,
		// type should be either 'teacher' or 'admin'
		type: ''
	},
	rootUrl: '/api/v1/user',
	idAttribute: ''

});


 export default new UserModel(window.user);