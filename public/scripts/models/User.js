import Backbone from 'backbone';

const UserModel = Backbone.Model.extend ({
	defaults:{
		id: null,
		firstName: '',
		lastName: '',
		email: '',
		createAt: null,
		updatedAt: null,
		deletedAt: null,
		// type shoudl be either 'teacher' or 'admin'
		type: ''
	},
	rootUrl: '',
	idAttribute: ''

});


 export default new UserModel(window.user);