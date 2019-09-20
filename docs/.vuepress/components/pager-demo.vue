<template>
  <div class="pager">
    <h3>引入组件</h3>
    <c-card :code="importMsg">
      <template v-slot:descript>
        引入 <span class="md">Pager</span> 组件。<br>
      </template>
    </c-card>

    <h3>基本用法</h3>
    <c-card :code="code1">
      <div class="pager">
        <c-pager :total="10" :current.sync="current"></c-pager>
      </div>
      <template v-slot:descript>
        通过设置 <span class="md">total</span> 设置总页数。<br>
        同时传入 <span class="md">current</span> 作为默认页数。
      </template>
    </c-card>

    <h3>带传送门</h3>
    <c-card :code="code2">
      <div class="pager">
        <c-pager :total="100" :current.sync="current" transfer @error="onError($event)"></c-pager>
      </div>
      <template v-slot:descript>
        通过设置 <span class="md">transfer</span> 开启传送门。<br>
        当输入错误为非数字或越界时, 可以通过 <span class="md">error</span> 事件捕获错误。
      </template>
    </c-card>
  </div>
</template>

<script>
  import Card from '../../../src/Card/Card'
  import Pager from '../../../src/Pager/Pager'

  export default {
    name: "pager.demo",
    components: {
      'c-card': Card,
      'c-pager': Pager
    },
    methods: {
      onError(err){
        alert(err)
      }
    },
    data() {
      return {
        current: 1,
        importMsg: `
import { Pager } from 'coco-ui'
        `.trim(),
        code1: `
<c-pager :total="10" :current.sync="current"></c-pager>

<script>
  export default {
    current: 1
  }
<\/script>
        `.trim(),
        code2: `
<c-pager :total="100"
         :current.sync="current"
         transfer @error="onError($event)"></c-pager>

<script>
  export default {
    current: 1,
    methods: {
      onError(err){
        alert(err)
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