<template>
  <div class="c-toast" :class="{[`toast-${position}`]: true}">
    <slot></slot>
    <c-icon class="c-close" icon="i-close" @click="close()"></c-icon>
  </div>
</template>

<script>
  import Icon from '../Icon/icon'

  export default {
    name: "coco-toast",
    data(){
      return{
        timer: null
      }
    },
    props: {
      autoClose: {
        type: Boolean,
        default: true
      },
      closeDelay: {
        type: [String, Number],
        default: 2
      },
      callback: {
        type: Function
      },
      position: {
        type: String,
        default: 'top',
        validator(value) {
          return ['top', 'middle', 'bottom'].indexOf(value) !== -1;
        }
      }
    },
    components: {
      'c-icon': Icon
    },
    mounted() {
      if (this.autoClose === true) {
        this.timer = setTimeout(() => {
          this.close()
        }, this.closeDelay * 1000)
      }
    },
    methods: {
      close() {
        clearTimeout(this.timer)
        this.$el.remove()
        this.$destroy()
        this.callback && this.callback()
      }
    }
  }
</script>

<style scoped lang="scss">
  @keyframes fadeIn {
    0% {opacity: 0;}
    100% {opacity: 100%;}
  }

  @keyframes slideUp {
    0% {transform: translate(-50%, 100%);}
    100% {transform: translateX(-50%);}
  }

  @keyframes slideDown {
    0% {transform: translate(-50%, -100%);}
    100% {transform: translateX(-50%);}
  }

  $font-size: 14px;
  $toast-min-height: 42px;
  $toast-bg: rgb(237, 242, 252);
  $border-radius: 4px;
  $animation-time: .3s;
  .c-toast {
    animation: fadeIn $animation-time;letter-spacing: 2px;
    font-size: $font-size; height: $toast-min-height; line-height: 1.8;
    position: fixed; left: 50%; transform: translateX(-50%); display: flex;
    color: #909399;align-items: center;background: $toast-bg;border-radius: $border-radius;
    border: 1px solid #ebeef5; padding: 0 60px;z-index: 100;

    &.toast-top {top: 10px; animation: slideDown $animation-time;}

    &.toast-middle {top: 50%; transform: translate(-50%, -50%)}

    &.toast-bottom {bottom: 10px; animation: slideUp $animation-time;}

    & .c-close {
      cursor: pointer;position: absolute;right: 4px;top: 4px;
      width: 10px;height: 10px;
    }
  }
</style>