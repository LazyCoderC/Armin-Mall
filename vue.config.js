const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    host: "localhost",
    // 代理跨域
    proxy: {
      '/api': {
        target: 'http://39.98.123.211',
        // 不需要路径重写
        // pathRewrite: { '^/api': '' }
      }
    }
  }
})
