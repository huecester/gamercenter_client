import sanityClient from '$lib/sanity/client';

/** @type {import('./__types/bots').RequestHandler} */
export async function get() {
	const data = await sanityClient.fetch(`
		*[_type == 'bot'] {
			description,
			icon {
				alt,
				"url": asset->url,
			},
			inviteLink,
			name,
		}
	`);
	if (data) {
		return {
			status: 200,
			body: {
				bots: data,
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