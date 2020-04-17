<template>
  <div id="login">
    <h3>Login</h3>
    <cube-form
      :model="model"
      :schema="schema"
      @submit="handleSubmit"
    ></cube-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      model: {
        username: '',
        passwd: ''
      },
      schema: {
        fields: [
          // 用户名
          {
            type: 'input',
            modelKey: 'username',
            label: '用户名',
            props: {
              placeholder: '请输入用户名'
            },
            rules: {
              // 校验规则
              required: true
            },
            trigger: 'blur'
          },
          // 密码
          {
            type: 'input',
            modelKey: 'passwd',
            label: '密码',
            props: {
              type: 'password',
              placeholder: '请输入密码',
              eye: {
                open: true
              }
            },
            rules: {
              required: true
            },
            trigger: 'blur'
          },
          // 登录按钮
          {
            type: 'submit',
            label: '登录'
          }
        ]
      }
    }
  },
  methods: {
    handleSubmit () {

    }
  }
}
</script>

<style lang="scss" scoped>
#login {
  padding: 20px 10px;
  h3 {
    margin-bottom: 20px;
    font-size: 24px;
  }
}
</style>
