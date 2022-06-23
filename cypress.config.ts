import 'dotenv/config';
import { defineConfig } from 'cypress';

export default defineConfig({
	projectId: process.env.CYPRESS_PROJECT_KEY,
	e2e: {
		baseUrl: 'http://localhost:3000',
	},
});
