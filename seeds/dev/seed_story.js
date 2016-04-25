
exports.seed = function(knex, Promise) {
		var date = new Date();
  return Promise.join(

    // Deletes ALL existing entries
    //knex('stories').del(), 

    // Inserts seed entries
    knex('stories').insert({id: 1, createdAt: date, title: 'Jess and her Avocado Adventure', author: 'Casanda Katydid', coverImage: 'https://s-media-cache-ak0.pinimg.com/736x/0b/ec/1e/0bec1e70af33690796667d17bdadbd3a.jpg', category: 'fable'}),
    knex('stories').insert({id: 2, createdAt: date, title: 'Will and the missing Pajamas', author: 'Buchman Daniels', coverImage: 'http://thumb1.shutterstock.com/display_pic_with_logo/925151/205278238/stock-photo-superhero-boy-child-flying-upwards-through-the-clouds-205278238.jpg', category: 'fable'}),
    knex('stories').insert({id: 3, createdAt: date, title: 'Sarah loves Sunshine', author: 'Anna Banana', coverImage: 'http://blog.swap-bot.com/wp-content/uploads/2012/03/kateendle.jpg', category: 'fable'})
  );
};
