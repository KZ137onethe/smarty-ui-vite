// 全局注册组件
import { App } from 'vue'
import SButton from './button'
import SFCButton from './SFCButton.vue'
import JSXButton from './JSXButton.jsx'


// 导出单个组件
export { SButton, SFCButton, JSXButton }

// 编写个插件，实现一个install 方法
export default{
  install(app: App):void{
    app.component(SButton.name, SButton)
    app.component(SFCButton.name, SFCButton)
    app.component(JSXButton.name, JSXButton)
  }
}