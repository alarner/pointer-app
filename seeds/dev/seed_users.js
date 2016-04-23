
exports.seed = function(knex, Promise) {
	var date = new Date();
  return Promise.join(
    // Deletes ALL existing entries
    //knex('users').del(), 
  
    // Inserts seed entries
    knex('users').insert({id: 1, createdAt: date, firstName: 'Bob', lastName: 'Shephard', password: '12345', email: 'bob.shephard@dogmail.com'}),
    knex('users').insert({id: 2, createdAt: date, firstName: 'Sarah', lastName: 'Red', password: '12345', email: 'sarah.red@home.com'}),
    knex('users').insert({id: 3, createdAt: date, firstName: 'Aaron', lastName: 'Larner', password: '12345', email: 'aaron.larner@theironyard.com'})
  );
};
