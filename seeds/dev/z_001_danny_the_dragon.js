
exports.seed = function(knex, Promise) {
	var date = new Date();

	return knex('stories')
	.where('id', 1)
	.del()
	.then(() => {
		console.log('finish delete');
		return knex('stories')
		.insert({createdAt: date, title: 'Danny The Dragon', author: 'Rasana Atreya', coverImage: '/images/stories/danny_the_dragon/cover.jpg', category: 'Dragons', description: 'Danny the Dragon blew fire everywhere, Which hissed through the other dragons, right through their hair. But Danny the Dragon – oh, he didn’t care! And the other dragons thought it wasn’t fair.'})
		.returning('id')
		.then(storyId => {
			storyId = storyId[0];
			console.log('finished saving story');
			console.log(storyId);
			return Promise.join(
				// Inserts seed entries
				knex('pages').insert({createdAt: date, image: '/images/stories/danny_the_dragon/cover.jpg', body: '', storyId: storyId}),
				knex('pages').insert({createdAt: date, image: '/images/stories/danny_the_dragon/page01.jpg', body: 'Danny the Dragon blew fire everywhere, Which hissed through the other dragons, right through their hair.\nBut Danny the Dragon – oh, he didn’t care! And the other dragons thought it wasn’t fair.\n\nIf Danny could blow fire, why couldn’t they?\n\nBut try as they might, they couldn’t find a way.', storyId: storyId}),
				knex('pages').insert({createdAt: date, image: '/images/stories/danny_the_dragon/page02.jpg', body: 'No fire whooshed out of their nostrils or their mouths,\nSo they’d have to figure another way out.\n\nInstead of blowing fire, why couldn’t Danny just burp?\nThose other dragons – they had a plan that just might work.', storyId: storyId}),
				knex('pages').insert({createdAt: date, image: '/images/stories/danny_the_dragon/page03.jpg', body: 'When Danny came along, burning things away, Those other dragons, they plotted to lead him astray.\n\nTo a forest they took him, a surprise promised. Where Danny had a meal he very much relished.', storyId: storyId}),
				knex('pages').insert({createdAt: date, image: '/images/stories/danny_the_dragon/page04.jpg', body: 'A meal of mangoes, a most delicious fruit, Tasty to humans, but to dragons – a brute! All of it gone, not a single bit left,\nThe mango juice had done what it did best.', storyId: storyId}),
				knex('pages').insert({createdAt: date, image: '/images/stories/danny_the_dragon/page05.jpg', body: 'Danny could no longer blow fire and burn things. His fire was gone, his best things were now wings.', storyId: storyId}),
				knex('pages').insert({createdAt: date, image: '/images/stories/danny_the_dragon/page06.jpg', body: 'Danny the Dragon cried sadly,\n“Why did they do this to me?”\nNow all he could do was burp all day,\nWith everyone else laughing away.', storyId: storyId}),
				knex('pages').insert({createdAt: date, image: '/images/stories/danny_the_dragon/page07.jpg', body: 'He flew over and sat in a field of red grass.\n“Why are you so sad?” a voice asked.\nA head popped up, it was the Chilly Monster.\nAnd Danny realized he had been sitting on Chilly’s fur.', storyId: storyId}),
				knex('pages').insert({createdAt: date, image: '/images/stories/danny_the_dragon/page08.jpg', body: '“Those other dragons stole my fire,” Danny said.\n“Oh no,” said Chilly Monster shaking his head.\n“That’s not nice of them, why did they do that?”\nDanny replied, “I burnt their fur and hats.”', storyId: storyId}),
				knex('pages').insert({createdAt: date, image: '/images/stories/danny_the_dragon/page09.jpg', body: '“I really want my fire back,” Danny said.\n“Eat some chillies, ones that are red.”\nThe monster smiled, picking out some.\nAnd Danny ate them, still quite glum.', storyId: storyId}),
				knex('pages').insert({createdAt: date, image: '/images/stories/danny_the_dragon/page10.jpg', body: 'Suddenly, his throat fired up to red-hot.\nThe fire was back! Danny felt better. A lot! Danny blew the Chilly Monster a fiery thanks and flew off.\nFor, no longer did he burp or cough.', storyId: storyId}),
				knex('pages').insert({createdAt: date, image: '/images/stories/danny_the_dragon/page11.jpg', body: 'So the other dragons couldn’t tease him, He had the fire. Once again, he was King!', storyId: storyId})
			)
			.then(() => {
				console.log('finished saving pages');
			});
		});
	});
};
