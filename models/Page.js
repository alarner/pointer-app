require('./Story');

module.exports = bookshelf.model('Page', {
	tableName: 'pages',
	hasTimestamps: ['createdAt', 'updatedAt', 'deletedAt'],
	story: function() {
		return this.belongsTo('Story');
	}
});