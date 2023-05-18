const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  /* Electron设置 */
  pluginOptions: {
    electronBuilder: {
      preload: "src/preload.js", //设置预加载文件
    }
  }
})
