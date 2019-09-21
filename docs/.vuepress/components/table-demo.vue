<template>
  <div class="c-table">
    <h3>引入组件</h3>
    <c-card :code="importMsg">
      <template v-slot:descript>
        引入 <span class="md">Table</span> 组件。<br>
      </template>
    </c-card>

    <h3>基本用法</h3>
    <c-card :code="code1">
        <div class="table">
          <c-table :columns="columns"
                   :data="dataSource"
                   height="340px"
          ></c-table>
        </div>
        <template v-slot:descript>
          通过 <span class="md">columns</span> 和 <span class="md">data</span> 将表格数据传入。<br>
          同时传入表格可视区的高度 <span class="md">height</span>。
        </template>
    </c-card>


    <h3>添加勾选项</h3>
    <c-card :code="code2">
      <div class="table">
        <c-table :columns="columns"
                 :data="dataSource"
                 :selectedItems.sync="selectedItem1"
                 selectable
                 height="340px"
        ></c-table>
      </div>
      <template v-slot:descript>
        设置 <span class="md">selectable</span> 开启勾选项<br>
        通过设置 <span class="md">selectedItems</span> 可以拿到选中的数据, 也可以通过此属性指定默认选中的数据。<br>
      </template>
    </c-card>

    <h3>排序功能</h3>
    <c-card :code="code3">
      <div class="table">
        <c-table :columns="columns"
                 :data="dataSource"
                 :selectedItems.sync="selectedItem2"
                 :sortRules.sync="sortRules"
                 @update:sortRules="sort"
                 :loading="tableLoading"
                 selectable
                 height="340px"
        ></c-table>
      </div>
      <template v-slot:descript>
        通过 <span class="md">sortRules</span> 传入需要排序的列<br>
        改变 <span class="md">sortRules</span>, 可以改变指定列的排序状态 (升序: 'asc' / 降序: 'desc' / 无序: '')。<br>
        通过设置 <span class="md">loading</span>, 切换是否为 loading 状态, 这在异步请求数据时很有用<br>
        排序功能需要自行实现, 这里提供了一个示例, 并用 setTimeout 模拟了异步加载。<br>
      </template>
    </c-card>

    <h3>斑马条纹间隔</h3>
    <c-card :code="code4">
      <div class="table">
        <c-table :columns="columns"
                 :data="dataSource"
                 :selectedItems.sync="selectedItem2"
                 :sortRules.sync="sortRules"
                 @update:sortRules="sort"
                 :loading="tableLoading"
                 selectable
                 striped
                 height="340px"
        ></c-table>
      </div>
      <template v-slot:descript>
        通过 <span class="md">striped</span> 使间隔行颜色发生变化<br>
      </template>
    </c-card>

    <h3>紧凑型</h3>
    <c-card :code="code5">
      <div class="table">
        <c-table :columns="columns"
                 :data="dataSource"
                 compressed
                 :selectedItems.sync="selectedItem2"
                 :sortRules.sync="sortRules"
                 @update:sortRules="sort"
                 :loading="tableLoading"
                 selectable
                 striped
                 height="340px"
        ></c-table>
      </div>
      <template v-slot:descript>
        通过 <span class="md">compressed</span> 设置表格为紧凑型<br>
      </template>
    </c-card>


  </div>
</template>

<script>
  import Table from '../../../src/Table/Table'
  import Card from '../../../src/Card/Card'

  export default {
    name: "table-demo",
    components: {
      'c-table': Table,
      'c-card': Card
    },
    methods: {
      sort(rules) {
        this.tableLoading = true
        setTimeout(() => {
          let sortField, sortRule
          for (let field in rules) {
            if (rules[field]) {
              sortField = field
              sortRule = rules[field]
            }
          }
          sortRule === 'asc' && this.dataSource.sort((a, b) => a[sortField] - b[sortField])
          sortRule === 'desc' && this.dataSource.sort((a, b) => b[sortField] - a[sortField])
          this.tableLoading = false
        }, 600)
      }
    },
    data() {
      return {
        selectedItem1: [],
        selectedItem2: [],
        columns: [  // 确保最后一个column的width为空, 以便自适应
          {text: '姓名', field: 'name', width: '200px'},
          {text: '分数', field: 'score', width: '200px'},
          {text: '年龄', field: 'age'}
        ],
        dataSource: [  // id从0开始!
          {id: 0, name: '小蕾', score: 100, age: 21},
          {id: 1, name: '小红', score: 90, age: 22},
          {id: 2, name: '小明', score: 80, age: 30},
          {id: 3, name: '小敏', score: 91, age: 16},
          {id: 4, name: '小埋', score: 60, age: 8},
          {id: 5, name: '小妹', score: 89, age: 17},
          {id: 6, name: '小猫', score: 70, age: 24},
          {id: 7, name: '小麦', score: 93, age: 88},
          {id: 8, name: '小麦', score: 93, age: 88},
          {id: 9, name: '小猪', score: 100, age: 21},
          {id: 10, name: '小胖', score: 90, age: 22},
          {id: 11, name: '小狗', score: 90, age: 22},
          {id: 12, name: '小剑', score: 80, age: 30},
          {id: 13, name: '小理', score: 91, age: 16},
          {id: 14, name: '小耗', score: 60, age: 8},
          {id: 15, name: '小龙', score: 89, age: 17},
          {id: 16, name: '小co', score: 70, age: 24},
          {id: 17, name: '小萨', score: 93, age: 88},
        ],
        sortRules: {
          score: 'asc',
          age: ''
        },
        tableLoading: false,
        importMsg: `
import { Table } from 'coco-ui'
        `.trim(),
        code1: `
<c-table :columns="columns"
         :data="dataSource"
         height="340px"
></c-table>

<script>
export default {
  data(){
    return {
      columns: [  // 确保最后一个column的width为空, 以便自适应
        {text: '姓名', field: 'name', width: '200px'},
        {text: '分数', field: 'score', width: '200px'},
        {text: '年龄', field: 'age'}
      ],
      dataSource: [  // id从0开始!
        {id: 0, name: '小蕾', score: 100, age: 21},
        {id: 1, name: '小红', score: 90, age: 22},
        {id: 2, name: '小明', score: 80, age: 30},
        {id: 3, name: '小敏', score: 91, age: 16},
        {id: 4, name: '小埋', score: 60, age: 8},
        {id: 5, name: '小妹', score: 89, age: 17},
        {id: 6, name: '小猫', score: 70, age: 24},
        {id: 7, name: '小麦', score: 93, age: 88},
        {id: 8, name: '小麦', score: 93, age: 88},
        {id: 9, name: '小猪', score: 100, age: 21},
        {id: 10, name: '小胖', score: 90, age: 22},
        {id: 11, name: '小狗', score: 90, age: 22},
        {id: 12, name: '小剑', score: 80, age: 30},
        {id: 13, name: '小理', score: 91, age: 16},
        {id: 14, name: '小耗', score: 60, age: 8},
        {id: 15, name: '小龙', score: 89, age: 17},
        {id: 16, name: '小co', score: 70, age: 24},
        {id: 17, name: '小萨', score: 93, age: 88},
      ],
    }
  }
}
<\/script>
        `.trim(),
        code2: `
<c-table :columns="columns"
         :data="dataSource"
         selectable
         height="340px"
></c-table>

<script>
export default {
  data(){
    return {
      selectedItem: [],
      columns: [  // 确保最后一个column的width为空, 以便自适应
        {text: '姓名', field: 'name', width: '200px'},
        {text: '分数', field: 'score', width: '200px'},
        {text: '年龄', field: 'age'}
      ],
      dataSource: [  // id从0开始!
        {id: 0, name: '小蕾', score: 100, age: 21},
        {id: 1, name: '小红', score: 90, age: 22},
        {id: 2, name: '小明', score: 80, age: 30},
        {id: 3, name: '小敏', score: 91, age: 16},
        {id: 4, name: '小埋', score: 60, age: 8},
        {id: 5, name: '小妹', score: 89, age: 17},
        {id: 6, name: '小猫', score: 70, age: 24},
        {id: 7, name: '小麦', score: 93, age: 88},
        {id: 8, name: '小麦', score: 93, age: 88},
        {id: 9, name: '小猪', score: 100, age: 21},
        {id: 10, name: '小胖', score: 90, age: 22},
        {id: 11, name: '小狗', score: 90, age: 22},
        {id: 12, name: '小剑', score: 80, age: 30},
        {id: 13, name: '小理', score: 91, age: 16},
        {id: 14, name: '小耗', score: 60, age: 8},
        {id: 15, name: '小龙', score: 89, age: 17},
        {id: 16, name: '小co', score: 70, age: 24},
        {id: 17, name: '小萨', score: 93, age: 88},
      ],
    }
  }

}
<\/script>
        `.trim(),
        code3: `
<c-table :columns="columns"
         :data="dataSource"
         :selectedItems.sync="selectedItem"
         :sortRules.sync="sortRules"
         @update:sortRules="sort"
         :loading="tableLoading"
         selectable
         height="340px"
></c-table>

<script>
export default {
  data(){
    return {
      selectedItem: [],
      columns: [  // 确保最后一个column的width为空, 以便自适应
        {text: '姓名', field: 'name', width: '200px'},
        {text: '分数', field: 'score', width: '200px'},
        {text: '年龄', field: 'age'}
      ],
      dataSource: [  // id从0开始!
          {id: 0, name: '小蕾', score: 100, age: 21},
          {id: 1, name: '小红', score: 90, age: 22},
          {id: 2, name: '小明', score: 80, age: 30},
          {id: 3, name: '小敏', score: 91, age: 16},
          {id: 4, name: '小埋', score: 60, age: 8},
          {id: 5, name: '小妹', score: 89, age: 17},
          {id: 6, name: '小猫', score: 70, age: 24},
          {id: 7, name: '小麦', score: 93, age: 88},
          {id: 8, name: '小麦', score: 93, age: 88},
          {id: 9, name: '小猪', score: 100, age: 21},
          {id: 10, name: '小胖', score: 90, age: 22},
          {id: 11, name: '小狗', score: 90, age: 22},
          {id: 12, name: '小剑', score: 80, age: 30},
          {id: 13, name: '小理', score: 91, age: 16},
          {id: 14, name: '小耗', score: 60, age: 8},
          {id: 15, name: '小龙', score: 89, age: 17},
          {id: 16, name: '小co', score: 70, age: 24},
          {id: 17, name: '小萨', score: 93, age: 88},
        ],
      sortRules: {
        score: 'asc',
        age: ''
      },
      tableLoading: false,
    }
  },
  methods: {
    sort(rules) {
      this.tableLoading = true
      setTimeout(() => {
        let sortField, sortRule
        for (let field in rules) {
          if (rules[field]) {
            sortField = field
            sortRule = rules[field]
          }
        }
        sortRule === 'asc' && this.dataSource.sort((a, b) => a[sortField] - b[sortField])
        sortRule === 'desc' && this.dataSource.sort((a, b) => b[sortField] - a[sortField])
        this.tableLoading = false
      }, 600)
    }
  }
}
<\/script>
        `.trim(),
        code4: `
<c-table :columns="columns"
         :data="dataSource"
         :selectedItems.sync="selectedItem"
         :sortRules.sync="sortRules"
         @update:sortRules="sort"
         :loading="tableLoading"
         selectable
         striped
         height="340px"
></c-table>

<script>
export default {
  data(){
    return {
      selectedItem: [],
      columns: [  // 确保最后一个column的width为空, 以便自适应
        {text: '姓名', field: 'name', width: '200px'},
        {text: '分数', field: 'score', width: '200px'},
        {text: '年龄', field: 'age'}
      ],
      dataSource: [  // id从0开始!
          {id: 0, name: '小蕾', score: 100, age: 21},
          {id: 1, name: '小红', score: 90, age: 22},
          {id: 2, name: '小明', score: 80, age: 30},
          {id: 3, name: '小敏', score: 91, age: 16},
          {id: 4, name: '小埋', score: 60, age: 8},
          {id: 5, name: '小妹', score: 89, age: 17},
          {id: 6, name: '小猫', score: 70, age: 24},
          {id: 7, name: '小麦', score: 93, age: 88},
          {id: 8, name: '小麦', score: 93, age: 88},
          {id: 9, name: '小猪', score: 100, age: 21},
          {id: 10, name: '小胖', score: 90, age: 22},
          {id: 11, name: '小狗', score: 90, age: 22},
          {id: 12, name: '小剑', score: 80, age: 30},
          {id: 13, name: '小理', score: 91, age: 16},
          {id: 14, name: '小耗', score: 60, age: 8},
          {id: 15, name: '小龙', score: 89, age: 17},
          {id: 16, name: '小co', score: 70, age: 24},
          {id: 17, name: '小萨', score: 93, age: 88},
        ],
      sortRules: {
        score: 'asc',
        age: ''
      },
      tableLoading: false,
    }
  },
  methods: {
    sort(rules) {
      this.tableLoading = true
      setTimeout(() => {
        let sortField, sortRule
        for (let field in rules) {
          if (rules[field]) {
            sortField = field
            sortRule = rules[field]
          }
        }
        sortRule === 'asc' && this.dataSource.sort((a, b) => a[sortField] - b[sortField])
        sortRule === 'desc' && this.dataSource.sort((a, b) => b[sortField] - a[sortField])
        this.tableLoading = false
      }, 600)
    }
  }
}
<\/script>
        `.trim(),
        code5: `
<c-table :columns="columns"
         :data="dataSource"
         :selectedItems.sync="selectedItem"
         :sortRules.sync="sortRules"
         @update:sortRules="sort"
         :loading="tableLoading"
         selectable
         compressed
         striped
         height="340px"
></c-table>

<script>
export default {
  data(){
    return {
      selectedItem: [],
      columns: [  // 确保最后一个column的width为空, 以便自适应
        {text: '姓名', field: 'name', width: '200px'},
        {text: '分数', field: 'score', width: '200px'},
        {text: '年龄', field: 'age'}
      ],
      dataSource: [  // id从0开始!
          {id: 0, name: '小蕾', score: 100, age: 21},
          {id: 1, name: '小红', score: 90, age: 22},
          {id: 2, name: '小明', score: 80, age: 30},
          {id: 3, name: '小敏', score: 91, age: 16},
          {id: 4, name: '小埋', score: 60, age: 8},
          {id: 5, name: '小妹', score: 89, age: 17},
          {id: 6, name: '小猫', score: 70, age: 24},
          {id: 7, name: '小麦', score: 93, age: 88},
          {id: 8, name: '小麦', score: 93, age: 88},
          {id: 9, name: '小猪', score: 100, age: 21},
          {id: 10, name: '小胖', score: 90, age: 22},
          {id: 11, name: '小狗', score: 90, age: 22},
          {id: 12, name: '小剑', score: 80, age: 30},
          {id: 13, name: '小理', score: 91, age: 16},
          {id: 14, name: '小耗', score: 60, age: 8},
          {id: 15, name: '小龙', score: 89, age: 17},
          {id: 16, name: '小co', score: 70, age: 24},
          {id: 17, name: '小萨', score: 93, age: 88},
        ],
      sortRules: {
        score: 'asc',
        age: ''
      },
      tableLoading: false,
    }
  },
  methods: {
    sort(rules) {
      this.tableLoading = true
      setTimeout(() => {
        let sortField, sortRule
        for (let field in rules) {
          if (rules[field]) {
            sortField = field
            sortRule = rules[field]
          }
        }
        sortRule === 'asc' && this.dataSource.sort((a, b) => a[sortField] - b[sortField])
        sortRule === 'desc' && this.dataSource.sort((a, b) => b[sortField] - a[sortField])
        this.tableLoading = false
      }, 600)
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