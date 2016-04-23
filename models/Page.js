require('./Story');

module.exports = bookshelf.model('page', {
	tableName: 'page',
	hasTimestamps: ['createdAt', 'updatedAt', 'deletedAt'],
	story: function() {
		return this.belongsTo('Story');
	}
});