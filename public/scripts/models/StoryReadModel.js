import Backbone from 'backbone';

export default Backbone.Model.extend({
	defaults:{
		createdAt: null,
		updatedAt: null,
		deletedAt: null,
		finishedAt: null,
		userId: '',
		studentId: '',
		storyId: ''
	},
	urlRoot: '/api/v1/storyread',
	idAttribute: 'id'
});