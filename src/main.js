import Vue from 'vue'
import App from './App'
import Toast from './Toast/plugin/Toast'
import Position from './Position/plugin/Position'

Vue.config.productionTip = false

Vue.use(Toast)
Vue.use(Position)
new Vue({
  render: h=>h(App),
}).$mount('#app')
