import Backbone from 'backbone';

export default Backbone.Model.extend({
	defaults:{
		firstName:'',
		lastName:'',
		createdAt: null,
		updatedAt: null,
		deletedAt: null
	},
	urlRoot: '/api/v1/student',
	idAttribute: 'id'
});




