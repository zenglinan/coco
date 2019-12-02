<template>
  <div class="collapse-demo">
    <h3>引入组件</h3>
    <c-card :code="importMsg">
      <template v-slot:descript>
        引入 <span class="md">Collapse</span>, <span class="md">CollapseItem</span> 组件。<br>
      </template>
    </c-card>

    <div class="collapse">
      <c-collapse :selected.sync="name">
        <c-collapse-item title="标题1" name="1">
          内容1
        </c-collapse-item>
        <c-collapse-item title="标题2" name="2">
          内容2
        </c-collapse-item>
        <c-collapse-item title="标题3" name="3">
          内容3
        </c-collapse-item>
        <c-collapse-item title="标题4" name="4">
          内容4
        </c-collapse-item>
      </c-collapse>
    </div>
  </div>
</template>

<script>
  import Collapse from '../../../src/Collapse/Collapse'
  import CollapseItem from '../../../src/Collapse/CollapseItem'
  import Card from '../../../src/Card/Card'
  export default {
    name: "collapse",
    components: {
      'c-card': Card,
      'c-collapse': Collapse,
      'c-collapse-item': CollapseItem
    },
    data(){
      return {
        importMsg: `
import { Collapse, CollapseItem } from 'coco-ui'
        `.trim()
      }
    }
  }
</script>

<style scoped>

</style>