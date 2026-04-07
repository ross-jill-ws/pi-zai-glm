# pi-extra-llm

A [pi](https://shittycodingagent.ai) extension that registers extra LLM providers.

## Providers

- **zai-glm** — Z.ai GLM models via the Anthropic-compatible endpoint (`https://api.z.ai/api/anthropic`).
  - `glm-5.1`

## Install

```bash
pi install npm:pi-extra-llm
```

To uninstall:

```bash
pi remove npm:pi-extra-llm
```

## Configuration

Set your Z.ai API key in the environment:

```bash
export ZAI_GLM_API_KEY=sk-...
```

Then reload pi and pick `glm-5.1` (provider `zai-glm`) from the model picker.

## Notes

- The base URL points at Z.ai's Anthropic-compatible endpoint, so the extension uses pi's `anthropic-messages` streaming API — no extra compat flags needed.
- Pricing and context window values in `extensions/zai_glm_provider.ts` are placeholders; adjust them to match Z.ai's current spec if you want accurate cost tracking.
