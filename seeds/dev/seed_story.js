
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('').del(), 

    // Inserts seed entries
    knex('stories').insert({id: 1, title: 'Jess and her Avocado Adventure'}),
    knex('table_name').insert({id: 2, author: 'Casanda Katydid'}),
    knex('table_name').insert({id: 3, coverImage: 'rowValue3'})
  );
};
