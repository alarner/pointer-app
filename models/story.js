require('./');
module.exports = bookshelf.model('story', {
	tableName: 'stories',
	hasTimestamps: ['createdAt', 'updatedAt', 'deletedAt'],
	story: function() {
		return this.hasMany('page', 'storyRead');
		}
});