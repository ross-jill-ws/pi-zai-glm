import type { ExtensionAPI } from "@mariozechner/pi-coding-agent";

/**
 * Z.ai GLM provider (Anthropic-compatible endpoint).
 *
 * Auth: set ZAI_GLM_API_KEY in your environment.
 * Docs: https://docs.z.ai/
 */
export default function (pi: ExtensionAPI) {
	pi.registerProvider("zai-glm", {
		baseUrl: "https://api.z.ai/api/anthropic",
		apiKey: "ZAI_GLM_API_KEY",
		api: "anthropic-messages",
		models: [
			{
				id: "glm-5.1",
				name: "GLM 5.1",
				reasoning: true,
				input: ["text", "image"],
				cost: { input: 0.6, output: 2.2, cacheRead: 0.11, cacheWrite: 0.6 },
				contextWindow: 200000,
				maxTokens: 8192,
			},
		],
	});
}
