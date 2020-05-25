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
      proxy: {
        '/api': {
          target: 'http://127.0.0.1:3000',
          changeOrigin: true
        }
      }
      // 模拟后台服务 express
      // before (app) {
      //   // 登录
      //   app.get('/api/login', function (req, res) {
      //     const { username, passwd } = req.query
      //     if (username === 'asher' && passwd === '123') {
      //       res.json({ code: 1, token: 'token1' })
      //     } else {
      //       res.status(401).json({ code: 0, message: '用户名或密码错误' })
      //     }
      //   })

      //   // 接口中间件
      //   function auth (req, res, next) {
      //     if (req.headers.authorization) {
      //       // 已登录
      //       next()
      //     } else {
      //       // 未登录
      //       res.sendStatus(401)
      //     }
      //   }

      //   // 获取用户信息
      //   app.get('/api/userinfo', auth, function (req, res) {
      //     res.json({ code: 1, data: { name: 'asher', age: '3' } })
      //   })

      //   // 商品列表 轮播图 商品分类
      //   app.get('/api/goods', function (req, res) {
      //     res.json({
      //       code: 1,
      //       slider: [
      //         {
      //           id: '001',
      //           img: ''
      //         },
      //         {
      //           id: '002',
      //           img: ''
      //         }
      //       ],
      //       data: {
      //         fe: [
      //           {
      //             id: 1,
      //             title: 'vue2.x实战',
      //             price: '100',
      //             img: '',
      //             count: 100
      //           },
      //           {
      //             id: 2,
      //             title: 're16.x实战',
      //             price: '120',
      //             img: '',
      //             count: 120
      //           }
      //         ],
      //         python: [
      //           {
      //             id: 3,
      //             title: 'pachong实战',
      //             price: '100',
      //             img: '',
      //             count: 100
      //           },
      //           {
      //             id: 4,
      //             title: 're16.x实战',
      //             price: '120',
      //             img: '',
      //             count: 120
      //           }
      //         ],
      //         java: [
      //           {
      //             id: 5,
      //             title: 'pachong实战',
      //             price: '100',
      //             img: '',
      //             count: 100
      //           },
      //           {
      //             id: 6,
      //             title: 'houtai实战',
      //             price: '120',
      //             img: '',
      //             count: 120
      //           }
      //         ],
      //         ai: [
      //           {
      //             id: 7,
      //             title: 'ai实战',
      //             price: '100',
      //             img: '',
      //             count: 100
      //           },
      //           {
      //             id: 8,
      //             title: 'houtai实战',
      //             price: '120',
      //             img: '',
      //             count: 120
      //           }
      //         ]
      //       },
      //       keys: ['fe', 'python', 'java', 'ai']
      //     })
      //   })
      // }
    }
  }
}
