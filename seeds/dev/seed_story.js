
exports.seed = function(knex, Promise) {
		var date = new Date();
  return Promise.join(

    // Deletes ALL existing entries
   //  knex('pages').del(),
   // knex('stories').del(), 

    // Inserts seed entries
    knex('stories').insert({id: 1, createdAt: date, title: 'Jess and her Avocado Adventure', author: 'Casanda Katydid', coverImage: 'https://s-media-cache-ak0.pinimg.com/736x/0b/ec/1e/0bec1e70af33690796667d17bdadbd3a.jpg', category: 'Fables', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor bibendum nisi eget malesuada. Aliquam erat volutpat. Duis pellentesque ultrices metus rutrum congue.'}),
    knex('stories').insert({id: 2, createdAt: date, title: 'Will and the missing Pajamas', author: 'Buchman Daniels', coverImage: 'http://thumb1.shutterstock.com/display_pic_with_logo/925151/205278238/stock-photo-superhero-boy-child-flying-upwards-through-the-clouds-205278238.jpg', category: 'Fables', description: 'Nulla facilisi. Donec vitae est pulvinar, maximus arcu at, tincidunt leo. Quisque facilisis mi vitae erat mollis, sit amet finibus quam dapibus. Nullam eget eleifend nibh, ultrices luctus orci.'}),
    knex('stories').insert({id: 3, createdAt: date, title: 'Sarah loves Sunshine', author: 'Anna Banana', coverImage: 'http://blog.swap-bot.com/wp-content/uploads/2012/03/kateendle.jpg', category: 'Fairytales', description: 'Nutella breeds happiness'}),
    knex('stories').insert({id: 4, createdAt: date, title: 'Jess and her Avocado Adventure', author: 'Casanda Katydid', coverImage: 'https://s-media-cache-ak0.pinimg.com/736x/0b/ec/1e/0bec1e70af33690796667d17bdadbd3a.jpg', category: 'Fairytales', description: 'In ut vestibulum ex, vel pharetra urna. Etiam eget leo risus. Maecenas venenatis vulputate facilisis. Nunc efficitur porta arcu, pretium tristique augue pulvinar ut.'}),
    knex('stories').insert({id: 5, createdAt: date, title: 'Will and the missing Pajamas', author: 'Buchman Daniels', coverImage: 'http://thumb1.shutterstock.com/display_pic_with_logo/925151/205278238/stock-photo-superhero-boy-child-flying-upwards-through-the-clouds-205278238.jpg', category: 'Childrens', description: 'Pellentesque dignissim consequat faucibus. Aliquam ut tortor iaculis urna pretium aliquam quis sed quam. Curabitur at sem mi. Integer mattis vestibulum mauris, non lobortis massa finibus eu. Interdum et malesuada fames ac ante ipsum primis in faucibus.'}),
    knex('stories').insert({id: 6, createdAt: date, title: 'Sarah loves Sunshine', author: 'Anna Banana', coverImage: 'http://blog.swap-bot.com/wp-content/uploads/2012/03/kateendle.jpg', category: 'Childrens', description: 'Mauris viverra enim eu velit eleifend tristique. Mauris sagittis vitae ante ac consequat.'}),
    knex('stories').insert({id: 7, createdAt: date, title: 'Will and the missing Pajamas', author: 'Buchman Daniels', coverImage: 'http://thumb1.shutterstock.com/display_pic_with_logo/925151/205278238/stock-photo-superhero-boy-child-flying-upwards-through-the-clouds-205278238.jpg', category: 'Animals', description: 'Pellentesque dignissim consequat faucibus. Aliquam ut tortor iaculis urna pretium aliquam quis sed quam. Curabitur at sem mi. Integer mattis vestibulum mauris, non lobortis massa finibus eu. Interdum et malesuada fames ac ante ipsum primis in faucibus.'}),
    knex('stories').insert({id: 8, createdAt: date, title: 'Sarah loves Sunshine', author: 'Anna Banana', coverImage: 'http://blog.swap-bot.com/wp-content/uploads/2012/03/kateendle.jpg', category: 'Animals', description: 'Mauris viverra enim eu velit eleifend tristique. Mauris sagittis vitae ante ac consequat.'})
  ).then(() => {
  	return Promise.join(
  		//Deletes

  		 knex('pages').insert({id: 1, createdAt: date, image: 'https://s-media-cache-ak0.pinimg.com/736x/0b/ec/1e/0bec1e70af33690796667d17bdadbd3a.jpg', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor bibendum nisi eget malesuada. Aliquam erat volutpat. Duis pellentesque ultrices metus rutrum congue.', storyId: 1}),
  		 knex('pages').insert({id: 2, createdAt: date, image: 'http://40.media.tumblr.com/tumblr_m6vujhAdER1raymsho1_500.jpg', body: 'Nutella breeds love', storyId: 1})
  	);
  });
};
