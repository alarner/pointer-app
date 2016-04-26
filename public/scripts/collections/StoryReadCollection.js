import Backbone from 'backbone';
import StoryReadModel from './../../models/StoryReadModel.js';

const StoryReadCollection = Backbone.Collection.extend({
	model: StoryReadModel,
	url: 'api/v1/storyread'
});

export default new StoryReadCollection();