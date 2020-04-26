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
        // 登录
        app.get('/api/login', function (req, res) {
          const { username, passwd } = req.query
          if (username === 'asher' && passwd === '123') {
            res.json({ code: 1, token: 'token1' })
          } else {
            res.status(401).json({ code: 0, message: '用户名或密码错误' })
          }
        })

        // 接口中间件
        function auth (req, res, next) {
          if (req.headers.token) {
            // 已登录
            next()
          } else {
            res.sendStatus(401)
          }
        }

        // 获取用户信息
        app.get('/api/userinfo', auth, function (req, res) {
          res.json({ code: 1, data: { name: 'asher', age: '3' } })
        })
      }
    }
  }
}
