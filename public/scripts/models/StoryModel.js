import Backbone from 'backbone';

export default Backbone.Model.extend({
	defaults: {
		createdAt: null,
		updatedAt: null,
		title: '',
		author: '',
		category: '',
		coverImage: '',
		description: ''
	},
	urlRoot: '/api/v1/story',
	idAttribute: 'id'
});