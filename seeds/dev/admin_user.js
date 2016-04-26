exports.seed = function(knex, Promise) {
	var date = new Date();
	return knex('users').del()
	.then(() => {
		return knex('users').insert({
			firstName: 'Admin',
			lastName: 'Admin',
			email: 'admin@admin.com',
			createdAt: date,
			userType: 'Admin'
		})
		.returning('id')
		.then(userId => {
			userId = userId[0];
			return knex('authentication').insert({
				userId: userId,
				type: 'local',
				identifier: 'admin@admin.com',
				createdAt: date,
				password: '$2a$10$MkjZIA4dKEBEXn7LuBPHCe1rNUDfxn2pKfRksB0rcb8sXjU1LoMe.'
			});
		});
	});
};
