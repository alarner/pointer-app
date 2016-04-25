
exports.seed = function(knex, Promise) {
	var date =  new Date();
  return Promise.join(
    // Deletes ALL existing entries
    // knex('table_name').del(), 

    // Inserts seed entries
    knex('students').insert({id: 1, createdAt: date, firstName: 'Steven', lastName: 'Brust'}),
    knex('students').insert({id: 2, createdAt: date, firstName: 'David', lastName: 'Eddings'}),
    knex('students').insert({id: 3, createdAt: date, firstName: 'J.K', lastName: 'Rowling'}),
    knex('students').insert({id: 4, createdAt: date, firstName: 'R.A', lastName: 'Salvatore'}),
    knex('students').insert({id: 5, createdAt: date, firstName: 'J.R.R', lastName: 'Tolkien'}),
    knex('students').insert({id: 6, createdAt: date, firstName: 'George', lastName: 'Martin'}),
    knex('students').insert({id: 7, createdAt: date, firstName: 'Harry', lastName: 'Potter'}),
    knex('students').insert({id: 8, createdAt: date, firstName: 'Vlad', lastName: 'Taltos'}),
    knex('students').insert({id: 9, createdAt: date, firstName: 'Bilbo', lastName: 'Baggins'}),
    knex('students').insert({id: 10, createdAt: date, firstName: 'Drizzt', lastName: 'Dourden'})
  );
};
