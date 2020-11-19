export default [
    {
      name: 'app1-vue', // 应用的名字
      entry: '//localhost:10001/', // 默认会加载这个html 解析里面的js 动态的执行 （子应用必须支持跨域）fetch
      container: '#app_container', // 容器名
      activeRule: '/app1', // 激活的路径
      props:{
        routerBase: '/app1' // 下发路由给子应用，子应用根据该值去定义qiankun环境下的路由
      },
    },
    {
      name: 'app2-react',
      entry: '//localhost:20002/',
      container: '#app_container',
      activeRule: '/app2',
      props:{
        routerBase: '/app2'
      },
    },
    {
      name: 'sub-vue',
      entry: '//localhost:7777/subapp/sub-vue/',
      container: '#app_container',
      activeRule: '/sub-vue',
      props:{
        routerBase: '/sub-vue'
      },
    },
    {
      name: 'sub-react',
      entry: '//localhost:7788/subapp/sub-react/',
      container: '#app_container',
      activeRule: '/sub-react',
      props:{
        routerBase: '/sub-react'
      },
    },
]