import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import { presetUno, presetAttributify, presetIcons } from "unocss";
import Unocss from "unocss/vite";
import { safelist } from "./config/uno";
import fs from "fs";
import path from "path";

export default defineConfig({
  build: {
    lib: {
      entry: "./index.ts",
      name: "ui",
      fileName: (format) => `ui.${format}.js`
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖，防止多个vue产生冲突。
      external: ["vue"],
      plugins: [
        // 自定义 Rollup 插件，在构建输出目录复制 package.json 文件
        {
          name: "copy-package-json",
          generateBundle(options, bundle) {
            const packageJsonPath = path.resolve(__dirname, "package.json");
            const outputDir = options.dir || "dist";
            const outputFilePath = path.join(outputDir, "package.json");

            fs.copyFileSync(packageJsonPath, outputFilePath);
          }
        }
      ]
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
