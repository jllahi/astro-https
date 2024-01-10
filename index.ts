import type { AstroIntegration } from "astro"
import mkcert from "vite-plugin-mkcert"

// https://www.npmjs.com/package/vite-plugin-mkcert

export default function createIntegration(): AstroIntegration {
	// See the Integration API docs for full details
	// https://docs.astro.build/en/reference/integrations-reference/
	return {
		name: "astro-https",
		hooks: {
			"astro:config:setup": async ({ updateConfig, logger }) => {
				updateConfig({
					vite: {
						plugins: [
							mkcert(),
						],
					},
				})
				logger.info("HTTPS ready!")
			},
		},
	}
}
