import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import { presetUno, presetAttributify, presetIcons } from "unocss";
import Unocss from "unocss/vite";
import { safelist } from "./config/uno";
import * as path from "path";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "./index.ts"),
      name: "ui",
      fileName: (format) => `ui.${format}.js`
    },
    outDir: path.resolve(__dirname, "../../lib"),
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖，防止多个vue产生冲突。
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue"
        }
      }
    },
    cssCodeSplit: true
  },
  plugins: [
    vue(),
    dts(),
    Unocss({
      safelist,
      presets: [presetUno(), presetAttributify(), presetIcons()]
    })
  ]
});
