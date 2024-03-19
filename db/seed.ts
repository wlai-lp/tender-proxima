import { db, Comment } from 'astro:db';

export default async function() {
	await db.insert(Comment).values([
		{ author: 'wei', content: 'dogg'},
		{ author: 'wei2', content: 'dogg2'},
	 ])
}