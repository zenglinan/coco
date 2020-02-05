<template>
  <div class="c-pager" v-if="!hideIfOnePage">
    <div class="controller" @click="toPage(current - 1)">
      <c-icon icon="i-left"></c-icon>
    </div>
    <span v-for="(item,index) in processTotal"
          :key="index"
          class="item"
          :class="{active: current===item, pageItem: item!=='...'}"
          @click="toPage(item)"
    >{{item}}</span>
    <div class="controller" @click="toPage(current + 1)">
      <c-icon icon="i-right"></c-icon>
    </div>
    <div class="transfer" v-if="transfer">
      <span>前往<input v-model="transferIndex" type="text" @keyup.enter="onTransfer()"/>页</span>
    </div>
  </div>
</template>

<script>
  import Icon from '../../src/Icon/icon'

  export default {
    name: "coco-pager",
    props: {
      total: {
        type: Number | String,
        required: true
      },
      current: {
        type: Number | String,
        default: 1
      },
      hideIfOnePage: {  // 只有一页的时候是否隐藏分页器
        type: Boolean,
        default: false
      },
      transfer: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        transferIndex: undefined
      }
    },
    computed: {
      processTotal() {
        const i = this.current
        let pages = this.unique(  // 默认显示页码为首页末页 + 当前页 + 当前页的前2页后2页
            [1, this.total, i, i - 1, i - 2, i + 1, i + 2]
                .filter(n => (n >= 1 && n <= this.total))  // 过滤掉越界的索引
                .sort((a, b) => a - b))  // 排序

        pages = pages.reduce((pre, current, index) => {  // 在合适的位置加...
          pre.push(current)
          pages[index + 1] && pages[index + 1] - pages[index] > 1 && pre.push("...")
          return pre
        }, [])
        return pages
      }
    },
    methods: {
      unique(arr) {  // 去重函数
        let tmp = {}
        arr.forEach(item => {
          tmp[item] = true
        })
        return Object.keys(tmp).map(key => +key)  // 对象的键为字符串形式, 要变为数字
      },
      toPage(index) {
        index >= 1 && index <= this.total && this.$emit('update:current', index)
      },
      onTransfer(){
        if(!/^\d+$/.test(this.transferIndex)){
          this.$emit('error',"请输入正确的数字");
        }else if(this.transferIndex > this.total || this.transferIndex < 1){
          this.$emit('error',"输入数字超出范围");
        }else {
          this.toPage(+this.transferIndex)
        }
      }
    },
    components: {
      'c-icon': Icon
    }
  }
</script>

<style scoped lang="scss">
  @import "../../asset/base";

  .c-pager {
    display: inline-flex;

    .item {margin-right: 10px;cursor: default;color: $black-deep;user-select: none;}

    .pageItem, .controller {display: inline-flex;align-items: center;justify-content: center;border: 1px solid $border-color-light;
      padding: 0 4px;border-radius: 5px;cursor: pointer;min-width: 30px;height: 30px;box-sizing: border-box;

      &:hover {color: $blue;border-color: $blue;}

      &.active {border-color: $blue;color: $blue;}

    }

    .controller {padding: 3px 5px;

      &:first-of-type {margin-right: 10px;}

      &:last-of-type {margin-left: 10px;}

      svg {fill: $black-deep;width: 12px;height: 12px;}
    }

    .transfer {
      margin-left: 24px;

      span {font-size: 13px;color: #606266;

        input {height: 28px;width: 46px;padding: 0 5px;box-sizing: border-box;
          border-radius: 4px;border: 1px solid #dcdfe6;margin: 0 3px;outline: none;

          &:focus {border-color: #409eff;}
        }
      }
    }
  }
</style>
