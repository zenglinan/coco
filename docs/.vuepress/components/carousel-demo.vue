<template>
  <div class="c-carousel">
    <h3>引入组件</h3>
    <c-card :code="importMsg">
      <template v-slot:descript>
        引入 <span class="md">Carousel</span>, <span class="md">CarouselItem</span> 组件。<br>
      </template>
    </c-card>

    <h3>基本用法</h3>
    <c-card :code="code1">
      <div class="carousel">
        <c-carousel :delay="3000" @toLast="x($event)" @toNext="x($event)">
          <c-carousel-item>
            <div class="item">1</div>
          </c-carousel-item>
          <c-carousel-item>
            <div class="item">2</div>
          </c-carousel-item>
          <c-carousel-item>
            <div class="item">3</div>
          </c-carousel-item>
          <c-carousel-item>
            <div class="item">4</div>
          </c-carousel-item>
        </c-carousel>
      </div>
      <template v-slot:descript>
        通过设置 <span class="md">delay</span>, 设置自动切换幻灯片的时间。<br>
      </template>
    </c-card>

    <h3>取消自动播放</h3>
    <c-card :code="code2">
      <div class="carousel">
        <c-carousel :auto="false">
          <c-carousel-item>
            <div class="item">1</div>
          </c-carousel-item>
          <c-carousel-item>
            <div class="item">2</div>
          </c-carousel-item>
          <c-carousel-item>
            <div class="item">3</div>
          </c-carousel-item>
          <c-carousel-item>
            <div class="item">4</div>
          </c-carousel-item>
        </c-carousel>
      </div>
      <template v-slot:descript>
        通过设置 <span class="md">auto</span> 为 false, 取消幻灯片自动播放。<br>
      </template>
    </c-card>

    <h3>指示器</h3>
    <c-card :code="code3">
      <div class="carousel">
        <c-carousel :indicator="true" delay="3000">
          <c-carousel-item>
            <div class="item">1</div>
          </c-carousel-item>
          <c-carousel-item>
            <div class="item">2</div>
          </c-carousel-item>
          <c-carousel-item>
            <div class="item">3</div>
          </c-carousel-item>
          <c-carousel-item>
            <div class="item">4</div>
          </c-carousel-item>
        </c-carousel>
      </div>
      <template v-slot:descript>
        通过设置 <span class="md">indicator</span> 添加指示器。<br>
      </template>
    </c-card>
  </div>
</template>

<script>
  import Carousel from '../../../src/Carousel/Carousel'
  import CarouselItem from '../../../src/Carousel/Carousel-Item'
  import Card from '../../../src/Card/Card'

  export default {
    name: "carousel-demo",
    components: {
      'c-carousel': Carousel,
      'c-carousel-item': CarouselItem,
      'c-card': Card
    },
    methods: {
      x(e){
        console.log(e);
      }
    },
    data() {
      return {
        importMsg: `
import { Carousel, CarouselIatem } from coco-ui
        `.trim(),
        code1: `
<c-carousel :delay="3000">
  <c-carousel-item>
    <div class="item">1</div>
  </c-carousel-item>
  <c-carousel-item>
    <div class="item">2</div>
  </c-carousel-item>
  <c-carousel-item>
    <div class="item">3</div>
  </c-carousel-item>
  <c-carousel-item>
    <div class="item">4</div>
  </c-carousel-item>
</c-carousel>

<style>
  .item{
    background: #d3d3d3;
    width: 600px;
    height: 300px;
    text-align: center;
    font-size: 20px;
    line-height: 300px;
  }
</style>
        `.trim(),
        code2: `
<c-carousel :auto="false">
  <c-carousel-item>
    <div class="item">1</div>
  </c-carousel-item>
  <c-carousel-item>
    <div class="item">2</div>
  </c-carousel-item>
  <c-carousel-item>
    <div class="item">3</div>
  </c-carousel-item>
  <c-carousel-item>
    <div class="item">4</div>
  </c-carousel-item>
</c-carousel>

<style>
  .item{
    background: #d3d3d3;
    width: 600px;
    height: 300px;
    text-align: center;
    font-size: 20px;
    line-height: 300px;
  }
</style>
        `.trim(),
        code3: `
<c-carousel  delay="1000" :indicator="true">
  <c-carousel-item>
    <div class="item">1</div>
  </c-carousel-item>
  <c-carousel-item>
    <div class="item">2</div>
  </c-carousel-item>
  <c-carousel-item>
    <div class="item">3</div>
  </c-carousel-item>
  <c-carousel-item>
    <div class="item">4</div>
  </c-carousel-item>
</c-carousel>

<style>
  .item{
    background: #d3d3d3;
    width: 600px;
    height: 300px;
    text-align: center;
    font-size: 20px;
    line-height: 300px;
  }
</style>
        `.trim()
      }
    }
  }
</script>

<style scoped lang="scss">
  .item{
    background: #d3d3d3;
    width: 600px;
    height: 300px;
    text-align: center;
    font-size: 20px;
    line-height: 300px;
  }
</style>