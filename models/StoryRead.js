require('./User');
require('./Student');
require('./Story');

module.exports = bookshelf.model('StoryRead', {
	tableName: 'stories_read',
	hasTimestamps: ['createdAt', 'updatedAt', 'deletedAt'],
	story: function() {
		return this.belongsTo('Story');
	},
	student: function() {
		return this.belongsTo('Student');
	},
	user: function() {
		return this.belongsTo('User');
	}
});