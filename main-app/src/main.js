import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
import Antd from 'ant-design-vue';
import App from './App.vue'
import router from './router'
import microApps from './micro-apps'

import 'ant-design-vue/dist/antd.css';

Vue.use(VueCompositionAPI)
Vue.use(Antd)

Vue.config.productionTip = false

import { registerMicroApps, start } from 'qiankun';

// 注册应用
registerMicroApps(microApps, {
  beforeLoad: app => console.log('[LifeCycle] before load >>>>>>>>>>>>', app.name),
  beforeMount: [
    app => console.log('[LifeCycle] before mount >>>>>>>>>>>>>>', app.name),
  ],
},);
start({
  prefetch: false, // 是否开启预加载，默认为 true
  sandbox: {strictStyleIsolation: false}, // 是否开启严格的样式隔离模式
  // 指定部分特殊的动态加载的微应用资源（css/js) 不被 qiankun 劫持处理，例如vue-router懒加载组件js
  excludeAssetFilter: (assetUrl) => {
    console.info('[LifeCycle] assetUrl: ', assetUrl)
    return false
  },
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
