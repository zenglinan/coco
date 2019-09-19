<template>
  <div class="popover">
    <h3>引入组件</h3>
    <c-card :code="importMsg">
      <template v-slot:descript>
        引入 <span class="md">Popover</span> 组件<br>
        可以选择使用我们内置 <span class="md">Button</span> 组件, 也可以自定义 Popover 的触发器。
      </template>
    </c-card>


    <h3>基本用法</h3>
    <c-card :code="code1">
      <div class="popover">
        <c-popover direction="left">
          <template v-slot:content>
            这是来自左边的提示
          </template>
          <c-button>Left</c-button>
        </c-popover>
        <c-popover direction="bottom">
          <template v-slot:content>
            这是来自下边的提示
          </template>
          <c-button>Bottom</c-button>
        </c-popover>
        <c-popover direction="top">
          <template v-slot:content>
            这是来自上边的提示
          </template>
          <c-button>Top</c-button>
        </c-popover>
        <c-popover direction="right">
          <template v-slot:content>
            这是来自右边的提示
          </template>
          <c-button>Right</c-button>
        </c-popover>
      </div>
      <template v-slot:descript>
        通过设置 <span class="md">direction</span> 控制 Popover 出现的方向。<br>
      </template>
    </c-card>

    <h3>更改触发方式</h3>
    <c-card :code="code2">
      <div class="popover">
        <c-popover trigger="hover" direction="right" delay="500">
          <template v-slot:content>
            hover触发, 延时500ms关闭
          </template>
          <c-button>Hover触发</c-button>
        </c-popover>
      </div>
      <template v-slot:descript>
        通过设置 <span class="md">trigger</span> 控制 Popover 的触发方式。<br>
      </template>
    </c-card>

    <h3>提供关闭api</h3>
    <c-card :code="code3">
      <div class="popover">
        <c-popover trigger="click" direction="top" delay="1000">
          <template v-slot:content="slotProps">
            <p>请确保您的账户密码不被外泄</p>
            <c-button @click="slotProps.close()" type="primary">已确认</c-button>
          </template>
          <c-button>使用须知</c-button>
        </c-popover>
      </div>
      <template v-slot:descript>
        Popover 组件通过 slot 对象对外传递关闭 api: <span class="md">slotProps.close</span><br>
        同时, Popover 的内容支持嵌入 HTML。<br>
      </template>
    </c-card>
  </div>
</template>

<script>
  import Card from '../../../src/Card/Card'
  import Popover from '../../../src/Popover/Popover'
  import Button from '../../../src/Button/Button'

  export default {
    name: "popover-demo",
    components: {
      'c-popover': Popover,
      'c-button': Button,
      'c-card': Card
    },
    data() {
      return {
        importMsg: `
import { Popover, Button } from 'coco-ui'
        `.trim(),
        code1: `
<c-popover direction="left">
  <template v-slot:content>
    这是来自左边的提示
  </template>
  <c-button>Left</c-button>
</c-popover>
<c-popover direction="bottom">
  <template v-slot:content>
    这是来自下边的提示
  </template>
  <c-button>Bottom</c-button>
</c-popover>
<c-popover direction="top">
  <template v-slot:content>
    这是来自上边的提示
  </template>
  <c-button>Top</c-button>
</c-popover>
<c-popover direction="right">
  <template v-slot:content>
    这是来自右边的提示
  </template>
  <c-button>Right</c-button>
</c-popover>
        `.trim(),
        code2: `
<c-popover trigger="hover" direction="right" delay="500">
  <template v-slot:content>
    hover触发, 延时500ms关闭
  </template>
  <c-button>Hover触发</c-button>
</c-popover>
        `.trim(),
        code3: `
<c-popover trigger="click" direction="top" delay="1000">
  <template v-slot:content="slotProps">
    <p>请确保您的账户密码不被外泄</p>
    <c-button @click="slotProps.close()" type="primary">已确认</c-button>
  </template>
  <c-button>使用须知</c-button>
</c-popover>
        `.trim()
      }
    }
  }
</script>

<style scoped>

</style>