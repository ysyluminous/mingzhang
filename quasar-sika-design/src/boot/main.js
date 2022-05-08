import '@/mock/index'
import '@/assets/js/sc-common.js'
import Vue from 'vue'
import numeral from 'vue-numeral-filter'

Vue.use(numeral, { locale: 'en-gb' })
Vue.directive('title', {
  inserted: function (el, binding) {
    const { value } = binding
    if (el.dataset.title) { // 方式1，可以给标签的data-title的属性赋值
      document.title = el.dataset.title
    } else if (value && value.title) { // 方式2，指令传参
      document.title = value.title
    }
  },
  update (el, binding, vnode, oldVnode) {
    const { value } = binding
    if (el.dataset.title) {
      document.title = el.dataset.title
    } else if (value && value.title) {
      document.title = value.title
    }
  }
})
