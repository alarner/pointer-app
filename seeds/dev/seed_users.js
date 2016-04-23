
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('users').del(), 

    // Inserts seed entries
    knex('users').insert({id: 1, firstName: 'Bob', lastName: 'Shephard', email: 'bob.shephard@dogmail.com'}),
    knex('users').insert({id: 2, firstName: 'Sarah', lastName: 'Red', email: 'sarah.red@home.com'}),
    knex('users').insert({id: 3, firstName: 'Aaron', lastName: 'Larner', email: 'aaron.larner@theironyard.com'})
  );
};
