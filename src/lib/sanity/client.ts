import sanityClient from '@sanity/client';

export default sanityClient({
	projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
	dataset: import.meta.env.VITE_SANITY_DATASET,
	apiVersion: '2022-06-23',
	useCdn: true,
});