import Backbone from 'backbone';

export default Backbone.Model.extend({
	defaults: {
		id: null,
		createdAt: null,
		updatedAt: null,
		title: '',
		author: '',
		category: '',
		coverImage: ''
	},
	urlRoot: '/api/v1/story',
	idAttribute: 'id'
});