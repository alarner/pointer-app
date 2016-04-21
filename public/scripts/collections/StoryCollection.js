import Backbone from 'backbone';
import Story from './../models/Story.js';

const StoryCollection = Backbone.Collection.extend({
	model: Story,
	url: '/api/v1/story'
});

export default new StoryCollection();