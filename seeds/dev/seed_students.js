
exports.seed = function(knex, Promise) {
	var date =  new Date();
	return knex('students').del()
	.then(() => {
		return Promise.join(
			// Deletes ALL existing entries
			knex('students').del(), 

			// Inserts seed entries
			knex('students').insert({createdAt: date, firstName: 'Steven', lastName: 'Brust'}),
			knex('students').insert({createdAt: date, firstName: 'David', lastName: 'Eddings'}),
			knex('students').insert({createdAt: date, firstName: 'J.K', lastName: 'Rowling'}),
			knex('students').insert({createdAt: date, firstName: 'R.A', lastName: 'Salvatore'}),
			knex('students').insert({createdAt: date, firstName: 'J.R.R', lastName: 'Tolkien'}),
			knex('students').insert({createdAt: date, firstName: 'George', lastName: 'Martin'}),
			knex('students').insert({createdAt: date, firstName: 'Harry', lastName: 'Potter'}),
			knex('students').insert({createdAt: date, firstName: 'Vlad', lastName: 'Taltos'}),
			knex('students').insert({createdAt: date, firstName: 'Bilbo', lastName: 'Baggins'}),
			knex('students').insert({createdAt: date, firstName: 'Drizzt', lastName: 'Dourden'})
		);
	});
};
