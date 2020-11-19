// yarn add react-app-rewired // 使用react-app-rewired进行配置文件的重写，命令需要修改成react-app-rewired去执行
const { name } = require('./package.json');

module.exports = {
    webpack: (config) => {
        // config.entry = config.entry.filter(
        //     (e) => !e.includes('webpackHotDevClient')
        // );
        config.output.library = `${name}-[name]`
        config.output.libraryTarget = 'umd'
        config.output.jsonpFunction = `webpackJsonp_${name}`
        config.output.publicPath = '//localhost:20002/'
        return config
    },
    devServer: (configFunction) => {
      // devServer要求返回一个函数
      return function(proxy, allowedHost) {
        const config = configFunction(proxy, allowedHost);
        config.open = false;
        config.hot = false;
        config.headers = {
            'Access-Control-Allow-Origin': '*',
        };
        return config
      }
    }
  }