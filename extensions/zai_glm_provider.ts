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
				cost: { input: 1.0, output: 3.2 },
				contextWindow: 200000,
				maxTokens: 128000,
			},
			{
				id: "glm-5",
				name: "GLM 5",
				reasoning: true,
				input: ["text", "image"],
				cost: { input: 1.0, output: 3.2 },
				contextWindow: 200000,
				maxTokens: 128000,
			},
			{
				id: "glm-5-turbo",
				name: "GLM 5 Turbo",
				reasoning: true,
				input: ["text", "image"],
				cost: { input: 1.2, output: 4.0 },
				contextWindow: 200000,
				maxTokens: 128000,
			},
			{
				id: "glm-5-code",
				name: "GLM 5 Code",
				reasoning: true,
				input: ["text", "image"],
				cost: { input: 1.2, output: 5.0 },
				contextWindow: 200000,
				maxTokens: 128000,
			},
			{
				id: "glm-4.7",
				name: "GLM 4.7",
				reasoning: true,
				input: ["text", "image"],
				cost: { input: 0.6, output: 2.2 },
				contextWindow: 200000,
				maxTokens: 128000,
			},
			{
				id: "glm-4.7-flash",
				name: "GLM 4.7 Flash",
				reasoning: true,
				input: ["text", "image"],
				cost: { input: 0, output: 0 },
				contextWindow: 200000,
				maxTokens: 128000,
			},
			{
				id: "glm-4.7-flashx",
				name: "GLM 4.7 FlashX",
				reasoning: true,
				input: ["text", "image"],
				cost: { input: 0.07, output: 0.4 },
				contextWindow: 200000,
				maxTokens: 128000,
			},
			{
				id: "glm-4.6",
				name: "GLM 4.6",
				reasoning: true,
				input: ["text", "image"],
				cost: { input: 0.6, output: 2.2 },
				contextWindow: 200000,
				maxTokens: 128000,
			},
			{
				id: "glm-4.5",
				name: "GLM 4.5",
				reasoning: true,
				input: ["text", "image"],
				cost: { input: 0.6, output: 2.2 },
				contextWindow: 200000,
				maxTokens: 96000,
			},
			{
				id: "glm-4.5-air",
				name: "GLM 4.5 Air",
				reasoning: true,
				input: ["text", "image"],
				cost: { input: 0.2, output: 1.1 },
				contextWindow: 200000,
				maxTokens: 96000,
			},
			{
				id: "glm-4.5-flash",
				name: "GLM 4.5 Flash",
				reasoning: true,
				input: ["text", "image"],
				cost: { input: 0, output: 0 },
				contextWindow: 200000,
				maxTokens: 96000,
			},
			{
				id: "glm-4.5-x",
				name: "GLM 4.5 X",
				reasoning: true,
				input: ["text", "image"],
				cost: { input: 2.2, output: 8.9 },
				contextWindow: 200000,
				maxTokens: 96000,
			},
			{
				id: "glm-4.5-airx",
				name: "GLM 4.5 AirX",
				reasoning: true,
				input: ["text", "image"],
				cost: { input: 1.1, output: 4.5 },
				contextWindow: 200000,
				maxTokens: 96000,
			},
		],
	});
}
