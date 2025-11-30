import '@lynx-js/web-core/index.css'
import '@lynx-js/web-elements/index.css'
import '@lynx-js/web-core'
import '@lynx-js/web-elements/all'

// 创建 lynx-view 元素来加载 Lynx bundle
const app = document.getElementById('root')
if (app) {
  app.innerHTML = `
    <lynx-view
      style="height: 100vh; width: 100vw;"
      url="/main.web.bundle"
    ></lynx-view>
  `
}
