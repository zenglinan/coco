<template>
  <div class="c-table" ref="tableWrapper">
    <div class="tableInnerWrapper" :style="{height}" ref="innerWrapper">
      <table :class="tableClass" ref="table">
        <thead ref="thead">
        <tr class="thead-tr">
          <th v-if="selectable" @change="onChangeAll($event)" class="select">
            <div class="thContent">
              <input type="checkbox" :checked="selector">
            </div>
          </th>
          <th v-if="indexVisible" class="index">#</th>
          <th v-for="(it, idx) in columns" :key="idx"
              :class="{canSort: it.field in sortRules}" :style="{width: it.width}"
              @click="it.field in sortRules && onChangeSortRules(it.field)"
          >
            <div class="thContent">
              <span>{{it.text}}</span>
              <div class="tableSorter" v-if="it.field in sortRules">
                <c-icon icon="i-asc" :class="{active: sortRules[it.field] === 'asc'}"></c-icon>
                <c-icon icon="i-desc" :class="{active: sortRules[it.field] === 'desc'}"></c-icon>
              </div>
            </div>
          </th>
        </tr>
        </thead>
        <tbody :class="tBodyClass">
        <tr v-for="(dataItem, dataIndex) in data" :key="dataIndex" class="tbody-tr">
          <td v-if="selectable" class="select"
              @change="onChangeItem($event, dataItem, dataIndex)"
          >
            <input type="checkbox" :checked="selector">
          </td>
          <td v-if="indexVisible" class="index">{{dataIndex + 1}}</td>
          <template v-for="it in columns">
            <td :style="{width: it.width}">{{dataItem[it.field]}}</td>
          </template>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="loading" v-show="loading">
      <c-icon icon="i-loading"></c-icon>
    </div>
  </div>
</template>

<script>
  import Icon from '../../src/Icon/icon'

  export default {
    name: "coco-table",
    data() {
      return {
        selector: false  // 所有单选框上都有的属性, 表示是否勾选
      }
    },
    props: {
      data: {
        type: Array
      },
      columns: {
        type: Array
      },
      indexVisible: {
        type: Boolean,
        default: false
      },
      compressed: {  // 紧凑
        type: Boolean,
        default: false
      },
      hasBorder: {
        type: Boolean,
        default: true
      },
      striped: {  // 间隔颜色变化
        type: Boolean,
        default: false
      },
      selectable: {  // 是否可勾选
        type: Boolean,
        default: false
      },
      selectedItems: {  // 勾选的column数组
        type: Array,
        default: () => []
      },
      sortRules: {  // 排序规则
        type: Object,
        default: () => ({})
      },
      loading: {
        type: Boolean,
        default: false
      },
      height: {  // 指定tbody的高度, 固定表头需要用到
        type: String
      }
    },
    mounted() {  // 将 thead 移出, 插入假表作为固定表头
      let table2 = this.$refs.table.cloneNode(false)
      let thead = this.$refs.thead
      let wrapper = this.$refs.tableWrapper
      table2.appendChild(thead)
      table2.classList.add('fakeTable')
      wrapper.appendChild(table2)

      let {height} = getComputedStyle(thead)  // 设置 margin, 防止第一行被挡住
      this.$refs.innerWrapper.style.marginTop = height
    },
    methods: {
      onChangeItem(e, data, index) {
        let ifSelected = e.target.checked
        let copy = JSON.parse(JSON.stringify(this.selectedItems))
        ifSelected && copy.push(data)  // 勾选选中
        !ifSelected && (copy = copy.filter(item => item.id !== index))  // 勾选不选
        this.$emit('update:selectedItems', copy)
      },
      onChangeAll(e) {
        let ifSelectedAll = e.target.checked
        ifSelectedAll && this.$emit('update:selectedItems', this.data) && (this.selector = true)
        !ifSelectedAll && this.$emit('update:selectedItems', []) && (this.selector = false)
      },
      onChangeSortRules(field) {
        let copy = JSON.parse(JSON.stringify(this.sortRules))
        this.resetObj(copy)  // 先将所有字段的规则置空
        switch (this.sortRules[field]) {
          case 'asc':
            copy[field] = 'desc';  // 指定对应字段的排序规则
            break;
          case 'desc':
            copy[field] = 'asc';
            break;
          default:
            copy[field] = 'asc';
        }
        this.$emit('update:sortRules', copy)
      },
      resetObj(object) {
        Object.keys(object).forEach(key => object[key] = '')
      }
    },
    computed: {
      tableClass() {
        return {
          compressed: this.compressed,
          hasBorder: this.hasBorder
        }
      },
      tBodyClass() {
        return {
          striped: this.striped
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
  @import "../../asset/scrollbar";

  @mixin border-bottom() {border-bottom: 1px solid darken($beige-light, 2%);}

  @mixin border() {border: 1px solid darken($beige-light, 2%);}

  @include rotateAnimation;

  * {box-sizing: border-box;}

  .c-table {box-sizing: border-box;position: relative;overflow: hidden;

    .fakeTable {position: absolute;top: 0;left: 0;}

    .tableInnerWrapper {overflow: auto;}

    table {@include border();border-collapse: separate;border-spacing: 0;
      text-align: left;display: table;width: 100%;

      .index, .select{ width: 60px;}

      thead {
        tr {
          background-color: rgb(255, 255, 255);

          .thead-tr {
            width: 100%;
          }

          th.canSort {
            transition: all .3s;

            &:hover {background-color: rgb(235, 247, 255);;cursor: pointer;}

            .tableSorter {display: flex;flex-direction: column;margin-left: 4px;

              svg {width: 8px;height: 8px;fill: rgb(191, 191, 191);transition: all .2s;

                &.active {fill: rgb(24, 144, 255);}
              }
            }
          }

          .thContent {
            display: flex;
            align-items: center;
            color: #909399;
          }
        }
      }

      tbody {
        width: 100%;
        &.striped {
          tr {
            &:nth-child(even) {background-color: rgb(245, 247, 250);}

            &:hover {background: rgb(235, 247, 255);}
          }
        }

        tr {transition: background .3s;color: #606266;font-size: 14px;background-color: #fff;

          &.tbody-tr { width: 100%; }
          &:hover {background: rgb(235, 247, 255);}

        }
      }

      td, th {padding: 10px;@include border-bottom();}

      tr {
        @include border-bottom();

        &:last-child {border-bottom: none;}
      }

      &.compressed {
        td, th {padding: 6px; font-size: 12px}
      }

      &.hasBorder {
        border: none;

        tr {
          &:last-child {
            td {
              @include border-bottom();

              &:first-child {border-bottom-left-radius: 4px;}

              &:last-child {border-bottom-right-radius: 4px;}
            }
          }

          td, th {@include border();border-bottom: none;}

          td:not(:first-child), th:not(:first-child) {border-left: none;}

          th:first-child {border-top-left-radius: 4px;}

          th:last-child {border-top-right-radius: 4px;}
        }

      }
    }


    .loading {position: absolute;top: 0;left: 0;
      width: 100%;height: 100%;background-color: rgba(255, 255, 255, .7);
      display: flex;justify-content: center;align-items: center;

      svg {width: 20px;height: 20px;animation: rotate .6s linear infinite;}
    }

  }


</style>
