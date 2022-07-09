import sanityClient from '$lib/sanity/client';

/** @type {import('./__types/bots').RequestHandler} */
export async function get() {
	const data = await sanityClient.fetch(`
		*[_type == 'post'] | order(_createdAt desc) {
			_createdAt,
			body,
			title,
		}
	`);
	if (data) {
		return {
			status: 200,
			body: {
				posts: data,
			},
		};
	} else {
		return {
			status: 500,
			body: {
				error: new Error('Internal Server Error'),
			},
		};
	}
}