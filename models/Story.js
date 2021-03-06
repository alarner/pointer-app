require('./StoryRead');
require('./Page');
module.exports = bookshelf.model('story', {
	tableName: 'stories',
	hasTimestamps: ['createdAt', 'updatedAt', 'deletedAt'],
	storiesRead: function() {
		return this.hasMany('StoryRead', 'storyId');
	},
	pages: function() {
		return this.hasMany('Page', 'storyId');
	}
});