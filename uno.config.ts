import { defineConfig, presetWind3, presetAttributify, transformerDirectives } from "unocss";

export default defineConfig({
  presets: [presetAttributify(), presetWind3()],
  transformers: [transformerDirectives()], // apply
});
