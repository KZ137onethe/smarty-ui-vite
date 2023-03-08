// import { createApp } from 'vue'
// import SButton from './button'
import SFCButton from "./SFCButton.vue";
import JSXButton from "./JSXButton.jsx"

import { createApp } from "vue/dist/vue.esm-browser"
import SmartyUI from './entry'


createApp({
  template:`
    <div>
      <SButton color="blue" round plain icon="search">蓝色按钮</SButton>
      <SButton color="green" round plain icon="edit">绿色按钮</SButton>
      <SButton color="gray" round plain icon="check">灰色按钮</SButton>
      <SButton color="yellow" round plain icon="message">黄色按钮</SButton>
      <SButton color="red" round plain icon="delete">红色按钮</SButton>
      <SButton color="red" round icon="delete">红色按钮</SButton>
    </div>
  `
})
.use(SmartyUI)
.mount("#app");