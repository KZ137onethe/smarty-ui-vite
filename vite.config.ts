import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import { presetUno, presetAttributify, presetIcons } from "unocss";
// import Unocss from "unocss/vite";
import Unocss from "./config/unocss"

const rollupOptions = {
  external: ["vue", "vue-router"],
  output: {
    global:{
      vue: "vue"
    }
  }
}

export default defineConfig({
  plugins: [
    vue(),
    vueJsx({
       // options are passed on to @vue/babel-plugin-jsx
    }),
    Unocss()
  ],
  build: {
    rollupOptions,
    minify: false,
    lib:{
      entry: './src/entry.ts',
      name: 'SmartUI',
      fileName: 'smarty-ui',
      // 导出模块格式
      formats: [ "esm", "umd", "iife" ]
    }
  }
});

