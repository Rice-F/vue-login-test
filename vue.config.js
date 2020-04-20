module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        import: [
          './src/theme'
        ]
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  },
  configureWebpack: {
    devServer: {
      // 模拟后台服务 express
      before (app) {
        app.get('/api/login', function (req, res) {
          const { username, passwd } = req.query
          if (username === 'asher' && passwd === '123') {
            res.json({ code: 1, token: 'token1' })
          } else {
            res.status(401).json({ code: 0, message: '用户名或密码错误' })
          }
        })
      }
    }
  }
}
