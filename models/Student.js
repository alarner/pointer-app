// require('./StoryRead');
module.exports = bookshelf.model('Student', {
	tableName: 'students',
	hasTimestamps: ['createdAt', 'updatedAt', 'deletedAt'],
	// storiesRead: function() {
	// 	this.hasMany('StoryRead', 'studentId');
	// }
});