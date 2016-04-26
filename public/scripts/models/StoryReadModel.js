import Backbone from 'backbone';

const StoryReadModel = Backbone.Model.Extend({
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

export default StoryReadModel;