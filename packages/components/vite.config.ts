import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// 自动生成 .d.ts 文件
import dts from "vite-plugin-dts";
// 使用插件给组件命名
import DefineOptions from "unplugin-vue-define-options/vite";

export default defineConfig({
  build: {
    // 打包后文件目录
    outDir: "es",
    // 压缩
    // minify: false,
    rollupOptions: {
      // 忽略打包 vue 文件
      external: ["vue"],
      input: ["index.ts"],
      output: [
        {
          // 打包格式
          format: "es",
          // 打包后文件名
          entryFileNames: "[name].mjs",
          // 让 打包目录 和 studydfxy 目录对应
          preserveModules: true,
          exports: "named",
          // 配置打包根目录
          dir: "../studydfxy/es",
        },
        {
          // 打包格式
          format: "cjs",
          // 打包后文件名
          entryFileNames: "[name].js",
          // 让 打包目录 和 studydfxy 目录对应
          preserveModules: true,
          exports: "named",
          // 配置打包根目录
          dir: "../studydfxy/lib",
        },
      ],
    },
    // 配置库模式的打包方式
    lib: {
      entry: "./index.ts",
    },
  },
  plugins: [
    vue(),
    dts({
      entryRoot: "./src",
      outputDir: ["../studydfxy/es/src", "../studydfxy/lib/src"],
      // 指定使用 整个项目根目录下的 tsconfig.json，如果不配置，你也可以在 components 下新建 tsconfig.json
      tsConfigFilePath: "../../tsconfig.json",
    }),
    DefineOptions()
  ],
});
