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
	urlRoot: '/api/v1/user',
	idAttribute: 'id'

});


 export default new UserModel(window.user);