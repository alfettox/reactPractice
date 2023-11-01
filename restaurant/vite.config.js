import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		mimeTypes: {
			'text/javascript': ['js'],
		},
		port: 3000 // Set the port here
	}
});
