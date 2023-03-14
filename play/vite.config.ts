import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// 使用插件给组件命名
import DefineOptions from "unplugin-vue-define-options/vite";

export default defineConfig({
  plugins: [
    vue(),
    DefineOptions()
  ],
});
