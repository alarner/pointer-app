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
		// userType should be either 'teacher' or 'admin'
		userType: ''
	},
	urlRoot: '/api/v1/user',
	idAttribute: 'id'

});


 export default new UserModel(window.user);