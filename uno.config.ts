import { defineConfig } from "unocss";
import presetAttributify from "@unocss/preset-attributify";
import presetUno from "@unocss/preset-uno";
import transformerDirectives from "@unocss/transformer-directives";
// unocss 图标预设 -- 查找依赖的图标库
import presetIcons from "@unocss/preset-icons";
// ant-design

export default defineConfig({
  presets: [presetAttributify(), presetUno(), presetIcons()],
  transformers: [transformerDirectives()], // apply
  shortcuts: [["icon", "inline-block w-1em h-1em align-middle text-current"]],
});
