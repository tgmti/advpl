const path = require('path')

module.exports = () => ({
  name: '@theme-meteorlxy/vuepress-plugin-theme',

  enhanceAppFiles: [
    path.resolve(__dirname, 'enhanceApp.js'),
  ],

  globalUIComponents: 'Iconfont',

  chainWebpack (config, isServer) {
    if (isServer === false) {
      config.node.set('Buffer', false)
    }
  },
})
