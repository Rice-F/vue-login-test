// 全局创建组件实例
import Vue from 'vue'
export default function (Component, props) {
  // 创建vue实例
  const instance = new Vue({
    render: h => h(Component, { props })
  }).$mount()

  // 生成的dom追加至body中
  document.body.appendChild(instance.$el)

  // 销毁组件
  const comp = instance.$children[0]
  comp.remove = function () {
    document.body.removeChild(instance.$el)
    instance.$destroy()
  }
  return comp
}
