import Backbone from 'backbone';

export default Backbone.Model.extend({
	defaults: {
		id: null,
		createdAt: null,
		updatedAt: null,
		deletedAt: null,
		title: '',
		author: '',
		category: '',
		coverImage: ''
	},
	rootUrl: '/api/v1/story',
	idAttribute: 'id'
});