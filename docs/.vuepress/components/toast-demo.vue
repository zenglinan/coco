<template>
  <div class="toast">
    <h3>引入和使用插件</h3>
    <c-card :code="importMsg">
      <template v-slot:descript>
        <span class="md">Toast</span>以插件的形式供您任何时候调用 。<br>
      </template>
    </c-card>

    <h3>用法</h3>
    <c-card :code="code1">
      <div class="button">
        <c-button @click="toast1()">Toast提示</c-button>
        <c-button @click="toast2()">Toast提示</c-button>
        <c-button @click="toast3()">Toast提示</c-button>
      </div>
      <template v-slot:descript>
        通过设置 <span class="md">position</span> 设置 Toast 的出现位置。<br>
      </template>
    </c-card>
  </div>
</template>

<script>
  import Vue from 'vue'
  import Toast from '../../../src/Toast/plugin/Toast'
  import Button from '../../../src/Button/Button'
  import Card from '../../../src/Card/Card'

  Vue.use(Toast)

  export default {
    name: "toast-demo",
    components: {
      'c-button': Button,
      'c-card': Card
    },
    methods: {
      toast1() {
        this.$toast(
            {
              message: '小管家提醒您: 注意休息哦~',
              position: 'bottom',
              closeDelay: 2,
              callback: ()=>{
                alert(1)
              }
            }
        )
      },
      toast2() {
        this.$toast(
            {
              message: '避免久坐',
              position: 'middle',
              closeDelay: 2
            }
        )
      },
      toast3() {
        this.$toast(
            {
              message: '多喝热水',
              position: 'top',
              closeDelay: 2
            }
        )
      }
    },
    data() {
      return {
        importMsg: `
import { Toast } from 'coco-ui'
import Vue from 'vue'
Vue.use(Toast)
        `.trim(),
        code1: `
<c-button @click="toast1()">Toast提示</c-button>
<c-button @click="toast2()">Toast提示</c-button>
<c-button @click="toast3()">Toast提示</c-button>

<script>
export default {
  methods: {
          toast1() {
        this.$toast(
            {
              message: '小管家提醒您: 注意休息哦~',
              position: 'bottom',
              closeDelay: 2
            }
        )
      },
      toast2() {
        this.$toast(
            {
              message: '避免久坐',
              position: 'middle',
              closeDelay: 2
            }
        )
      },
      toast3() {
        this.$toast(
            {
              message: '多喝热水',
              position: 'top',
              closeDelay: 2
            }
        )
      }
  }
}
<\/script>
        `.trim()
      }
    }
  }
</script>

<style scoped>

</style>