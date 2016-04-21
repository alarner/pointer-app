require('./StoryRead');
module.exports = bookshelf.model('Student', {
	tableName: 'students',
	hasTimestamps: ['createdAt', 'updatedAt', 'deletedAt'],
	authentication: function() {
		this.hasMany('StoryRead', 'studentId');
	}
});