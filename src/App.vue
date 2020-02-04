<template>
<!--  <div id="app">-->
<!--    <br><br><br>-->
<!--    <br><br><br>-->
<!--    <br><br><br>-->
<!--    <br><br><br>-->
<!--    <br><br><br>-->
<!--    <br><br><br>-->
<!--    <div class="sticky">-->
<!--      <c-sticky>-->
<!--        <div>我是sticky组件</div>-->
<!--      </c-sticky>-->
<!--    </div>-->
<!--    <br><br><br><br>-->
<!--    <br><br><br><br>-->
<!--    <br><br><br><br>-->
<!--    <br><br><br><br>-->
<!--    <br><br><br><br>-->
<!--    <br><br><br><br>-->
<!--    <br><br><br><br>-->
<!--    <br><br><br><br>-->
<!--    <br><br><br><br>-->
<!--    <br><br><br><br><br><br>-->
<!--    &lt;!&ndash;    <div class="input">&ndash;&gt;-->
<!--    &lt;!&ndash;      <c-input placeholder="请输入用户名" value="支持value,placeholder"></c-input>&ndash;&gt;-->
<!--    &lt;!&ndash;      <c-input prompt='error' error-message="用户名只能为6~12个英文字符" prompt-position="right"></c-input>&ndash;&gt;-->
<!--    &lt;!&ndash;      <c-input :prompt='promptType' placeholder="点我一下就通过" error-message="用户名只能为6~12个英文字符" pass-message="通过"&ndash;&gt;-->
<!--    &lt;!&ndash;               @blur="promptType = 'pass'"></c-input>&ndash;&gt;-->
<!--    &lt;!&ndash;      <c-input value="禁止输入" :disabled=true></c-input>&ndash;&gt;-->
<!--    &lt;!&ndash;      <c-input v-model="message"></c-input>&ndash;&gt;-->
<!--    &lt;!&ndash;      <span>{{message}}</span>&ndash;&gt;-->
<!--    &lt;!&ndash;    </div>&ndash;&gt;-->
<!--    &lt;!&ndash;    <div class="button">&ndash;&gt;-->
<!--    &lt;!&ndash;      <c-button type="default" loading size="3">默认按钮</c-button><br>&ndash;&gt;-->
<!--    &lt;!&ndash;      <c-button type="default"  size="3">默认按钮</c-button><br>&ndash;&gt;-->
<!--    &lt;!&ndash;      <c-button type="success" loading size="2">成功按钮</c-button><br>&ndash;&gt;-->
<!--    &lt;!&ndash;      <c-button type="success" size="2">成功按钮</c-button><br>&ndash;&gt;-->
<!--    &lt;!&ndash;      <c-button type="primary" loading size="1">主要按钮</c-button><br>&ndash;&gt;-->
<!--    &lt;!&ndash;      <c-button type="primary" size="1">主要按钮</c-button><br>&ndash;&gt;-->
<!--    &lt;!&ndash;      <c-button type="info" loading>信息按钮</c-button><br>&ndash;&gt;-->
<!--    &lt;!&ndash;      <c-button type="warning">警告按钮</c-button><br>&ndash;&gt;-->
<!--    &lt;!&ndash;      <c-button type="danger">危险按钮</c-button>&ndash;&gt;-->

<!--    &lt;!&ndash;    </div>&ndash;&gt;-->
<!--    &lt;!&ndash;    <div class="table">&ndash;&gt;-->
<!--    &lt;!&ndash;      <c-table :columns="columns"&ndash;&gt;-->
<!--    &lt;!&ndash;               :selected-items.sync="selectedItems"&ndash;&gt;-->
<!--    &lt;!&ndash;               :data="dataSource"&ndash;&gt;-->
<!--    &lt;!&ndash;               has-border&ndash;&gt;-->
<!--    &lt;!&ndash;               selectable&ndash;&gt;-->
<!--    &lt;!&ndash;               :sort-rules.sync="sortRules"&ndash;&gt;-->
<!--    &lt;!&ndash;               :loading="tableLoading"&ndash;&gt;-->
<!--    &lt;!&ndash;               @update:sortRules="sort"&ndash;&gt;-->
<!--    &lt;!&ndash;               height="340px"&ndash;&gt;-->
<!--    &lt;!&ndash;      ></c-table>&ndash;&gt;-->
<!--    &lt;!&ndash;      {{selectedItems}}&ndash;&gt;-->
<!--    &lt;!&ndash;    </div>&ndash;&gt;-->
<!--    &lt;!&ndash;    <div class="table" style="width: 60%;">&ndash;&gt;-->
<!--    &lt;!&ndash;      <c-table :columns="columns" :data="dataSource" compressed></c-table>&ndash;&gt;-->
<!--    &lt;!&ndash;    </div>&ndash;&gt;-->
<!--    &lt;!&ndash;    <div class="pager">&ndash;&gt;-->
<!--    &lt;!&ndash;      <c-pager :total="20" :current.sync="current" :hide-if-one-page="true" @onChange="x"></c-pager>&ndash;&gt;-->
<!--    &lt;!&ndash;    </div>&ndash;&gt;-->
<!--&lt;!&ndash;        <div class="slides" style="margin-left: 500px">&ndash;&gt;-->
<!--&lt;!&ndash;          <c-slides :width="183" :delay="3000">&ndash;&gt;-->
<!--&lt;!&ndash;            <c-slides-item>&ndash;&gt;-->
<!--&lt;!&ndash;              <div class="xxx">1</div>&ndash;&gt;-->
<!--&lt;!&ndash;            </c-slides-item>&ndash;&gt;-->
<!--&lt;!&ndash;            <c-slides-item>&ndash;&gt;-->
<!--&lt;!&ndash;              <div class="xxx">2</div>&ndash;&gt;-->
<!--&lt;!&ndash;            </c-slides-item>&ndash;&gt;-->
<!--&lt;!&ndash;            <c-slides-item>&ndash;&gt;-->
<!--&lt;!&ndash;              <div class="xxx">3</div>&ndash;&gt;-->
<!--&lt;!&ndash;            </c-slides-item>&ndash;&gt;-->
<!--&lt;!&ndash;            <c-slides-item>&ndash;&gt;-->
<!--&lt;!&ndash;              <div class="xxx">4</div>&ndash;&gt;-->
<!--&lt;!&ndash;            </c-slides-item>&ndash;&gt;-->
<!--&lt;!&ndash;          </c-slides>&ndash;&gt;-->
<!--&lt;!&ndash;        </div>&ndash;&gt;-->
<!--    &lt;!&ndash;        <div class="cascader">&ndash;&gt;-->
<!--    &lt;!&ndash;          <c-cascader :selected.sync="selected" :db="data">&ndash;&gt;-->
<!--    &lt;!&ndash;          </c-cascader>&ndash;&gt;-->
<!--    &lt;!&ndash;        </div>&ndash;&gt;-->
<!--    &lt;!&ndash;        <div class="collapse">&ndash;&gt;-->
<!--    &lt;!&ndash;          <c-collapse :selected.sync="name">&ndash;&gt;-->
<!--    &lt;!&ndash;            <c-collapse-item title="标题1" name="1">&ndash;&gt;-->
<!--    &lt;!&ndash;              内容1&ndash;&gt;-->
<!--    &lt;!&ndash;            </c-collapse-item>&ndash;&gt;-->
<!--    &lt;!&ndash;            <c-collapse-item title="标题2" name="2">&ndash;&gt;-->
<!--    &lt;!&ndash;              内容2&ndash;&gt;-->
<!--    &lt;!&ndash;            </c-collapse-item>&ndash;&gt;-->
<!--    &lt;!&ndash;            <c-collapse-item title="标题3" name="3">&ndash;&gt;-->
<!--    &lt;!&ndash;              内容3&ndash;&gt;-->
<!--    &lt;!&ndash;            </c-collapse-item>&ndash;&gt;-->
<!--    &lt;!&ndash;            <c-collapse-item title="标题4" name="4">&ndash;&gt;-->
<!--    &lt;!&ndash;              内容4&ndash;&gt;-->
<!--    &lt;!&ndash;            </c-collapse-item>&ndash;&gt;-->
<!--    &lt;!&ndash;          </c-collapse>&ndash;&gt;-->
<!--    &lt;!&ndash;        </div>&ndash;&gt;-->
<!--    &lt;!&ndash;    <div class="popover" style="margin-left: 200px;">&ndash;&gt;-->
<!--    &lt;!&ndash;      <c-popover trigger="click" direction="left">&ndash;&gt;-->
<!--    &lt;!&ndash;        <template v-slot:content>&ndash;&gt;-->
<!--    &lt;!&ndash;          Left&ndash;&gt;-->
<!--    &lt;!&ndash;        </template>&ndash;&gt;-->
<!--    &lt;!&ndash;        <c-button>Left(click)</c-button>&ndash;&gt;-->
<!--    &lt;!&ndash;      </c-popover>&ndash;&gt;-->
<!--    &lt;!&ndash;      <c-popover trigger="click" direction="bottom" delay="300">&ndash;&gt;-->
<!--    &lt;!&ndash;        <template v-slot:content="slotProps">&ndash;&gt;-->
<!--    &lt;!&ndash;          <p>我里面可以加html标签,还可以加关闭按钮</p>&ndash;&gt;-->
<!--    &lt;!&ndash;          <c-button @click="slotProps.close()">关闭</c-button>&ndash;&gt;-->
<!--    &lt;!&ndash;        </template>&ndash;&gt;-->
<!--    &lt;!&ndash;        <c-button>Delay 300ms</c-button>&ndash;&gt;-->
<!--    &lt;!&ndash;      </c-popover>&ndash;&gt;-->
<!--    &lt;!&ndash;      <c-popover trigger="hover" direction="top" delay="1000">&ndash;&gt;-->
<!--    &lt;!&ndash;        <template v-slot:content="slotProps">&ndash;&gt;-->
<!--    &lt;!&ndash;          <c-button @click="slotProps.close()">关闭</c-button>&ndash;&gt;-->
<!--    &lt;!&ndash;        </template>&ndash;&gt;-->
<!--    &lt;!&ndash;        <c-button>Top(hover)</c-button>&ndash;&gt;-->
<!--    &lt;!&ndash;      </c-popover>&ndash;&gt;-->
<!--    &lt;!&ndash;      <c-popover trigger="click" direction="right">&ndash;&gt;-->
<!--    &lt;!&ndash;        <template v-slot:content>&ndash;&gt;-->
<!--    &lt;!&ndash;          Rightxxxxxxxxxxxxxxx&ndash;&gt;-->
<!--    &lt;!&ndash;          xxxxxxxxxxxxxxxxxxxxxxxxxxx&ndash;&gt;-->
<!--    &lt;!&ndash;        </template>&ndash;&gt;-->
<!--    &lt;!&ndash;        <c-button>Right(click)</c-button>&ndash;&gt;-->
<!--    &lt;!&ndash;      </c-popover>&ndash;&gt;-->
<!--    &lt;!&ndash;    </div>&ndash;&gt;-->

<!--&lt;!&ndash;    <div class="tabs">&ndash;&gt;-->
<!--&lt;!&ndash;      <c-tabs :selectedItems.sync="selectedItems" direction="row">&ndash;&gt;-->
<!--&lt;!&ndash;        <c-tab-nav>&ndash;&gt;-->
<!--&lt;!&ndash;          <c-tab name="setting" icon="i-setting">Setting</c-tab>&ndash;&gt;-->
<!--&lt;!&ndash;          <c-tab name="tab2">Tab2</c-tab>&ndash;&gt;-->
<!--&lt;!&ndash;          <c-tab name="tab3">Tab3</c-tab>&ndash;&gt;-->
<!--&lt;!&ndash;          <c-tab name="tab4">Tab4</c-tab>&ndash;&gt;-->
<!--&lt;!&ndash;          <c-tab name="tab5">Tab5</c-tab>&ndash;&gt;-->
<!--&lt;!&ndash;          <c-tab name="tab6">Tab6</c-tab>&ndash;&gt;-->
<!--&lt;!&ndash;          <c-tab name="girl" disabled>美女</c-tab>&ndash;&gt;-->
<!--&lt;!&ndash;        </c-tab-nav>&ndash;&gt;-->

<!--&lt;!&ndash;        <c-tab-content>&ndash;&gt;-->
<!--&lt;!&ndash;          <c-tab-pane name="setting">&ndash;&gt;-->
<!--&lt;!&ndash;            <div>content1</div>&ndash;&gt;-->
<!--&lt;!&ndash;          </c-tab-pane>&ndash;&gt;-->
<!--&lt;!&ndash;          <c-tab-pane name="tab2">&ndash;&gt;-->
<!--&lt;!&ndash;            <div>content2</div>&ndash;&gt;-->
<!--&lt;!&ndash;          </c-tab-pane>&ndash;&gt;-->
<!--&lt;!&ndash;          <c-tab-pane name="tab3">&ndash;&gt;-->
<!--&lt;!&ndash;            <div>content2</div>&ndash;&gt;-->
<!--&lt;!&ndash;          </c-tab-pane>&ndash;&gt;-->
<!--&lt;!&ndash;          <c-tab-pane name="tab4">&ndash;&gt;-->
<!--&lt;!&ndash;            <div>content2</div>&ndash;&gt;-->
<!--&lt;!&ndash;          </c-tab-pane>&ndash;&gt;-->
<!--&lt;!&ndash;          <c-tab-pane name="tab5">&ndash;&gt;-->
<!--&lt;!&ndash;            <div>content2</div>&ndash;&gt;-->
<!--&lt;!&ndash;          </c-tab-pane>&ndash;&gt;-->
<!--&lt;!&ndash;          <c-tab-pane name="tab6">&ndash;&gt;-->
<!--&lt;!&ndash;            <div>content2</div>&ndash;&gt;-->
<!--&lt;!&ndash;          </c-tab-pane>&ndash;&gt;-->
<!--&lt;!&ndash;          <c-tab-pane name="girl">&ndash;&gt;-->
<!--&lt;!&ndash;            <div>骗你的</div>&ndash;&gt;-->
<!--&lt;!&ndash;          </c-tab-pane>&ndash;&gt;-->
<!--&lt;!&ndash;        </c-tab-content>&ndash;&gt;-->
<!--&lt;!&ndash;      </c-tabs>&ndash;&gt;-->
<!--&lt;!&ndash;    </div>&ndash;&gt;-->

<!--    <div class="tabs">-->
<!--      &lt;!&ndash;      <c-tabs :selectedItems.sync="selectedItems" direction="column">&ndash;&gt;-->
<!--      &lt;!&ndash;        <c-tab-nav>&ndash;&gt;-->
<!--      &lt;!&ndash;          <c-tab name="setting" icon="i-setting">Setting</c-tab>&ndash;&gt;-->
<!--      &lt;!&ndash;          <c-tab name="tab2">Tab2</c-tab>&ndash;&gt;-->
<!--      &lt;!&ndash;          <c-tab name="girl" disabled>美女</c-tab>&ndash;&gt;-->
<!--      &lt;!&ndash;        </c-tab-nav>&ndash;&gt;-->

<!--      &lt;!&ndash;        <c-tab-content>&ndash;&gt;-->
<!--      &lt;!&ndash;          <c-tab-pane name="setting">&ndash;&gt;-->
<!--      &lt;!&ndash;            <div>content1</div>&ndash;&gt;-->
<!--      &lt;!&ndash;          </c-tab-pane>&ndash;&gt;-->
<!--      &lt;!&ndash;          <c-tab-pane name="tab2">&ndash;&gt;-->
<!--      &lt;!&ndash;            <div>content2</div>&ndash;&gt;-->
<!--      &lt;!&ndash;          </c-tab-pane>&ndash;&gt;-->
<!--      &lt;!&ndash;          <c-tab-pane name="girl">&ndash;&gt;-->
<!--      &lt;!&ndash;            <div>骗你的</div>&ndash;&gt;-->
<!--      &lt;!&ndash;          </c-tab-pane>&ndash;&gt;-->
<!--      &lt;!&ndash;        </c-tab-content>&ndash;&gt;-->
<!--      &lt;!&ndash;      </c-tabs>&ndash;&gt;-->
<!--    </div>-->
<!--  </div>-->
</template>

<script>
  import Button from './Button/Button'
  import ButtonGroup from './Button/Button-Group'
  import Input from './Input/Input'
  import Col from './Grid System/Col'
  import Row from './Grid System/Row'
  import Slider from './Layout/Sidebar'
  import Wrapper from './Layout/Wrapper'
  import Header from './Layout/Header'
  import Footer from './Layout/Footer'
  import Content from './Layout/Content'
  import Tabs from './Tab/Tab'
  import TabContent from './Tab/Tab-Content'
  import TabNav from './Tab/Tab-Nav'
  import TabPane from './Tab/Tab-Pane'
  import TabItem from './Tab/Tab-Item'
  import Popover from './Popover/Popover'
  import Collapse from './Collapse/Collapse'
  import CollapseItem from './Collapse/CollapseItem'
  import Cascader from './Cascader/Cascader'
  import Slides from './Carousel/Carousel'
  import SlidesItem from './Carousel/Carousel-Item'
  import Pager from './Pager/Pager'
  import Table from './Table/Table'
  import Sticky from './Sticky/Sticky'
  import data from './Cascader/database'

  export default {
    name: 'app',
    components: {
      'c-button': Button,
      'c-button-group': ButtonGroup,
      'c-input': Input,
      'c-col': Col,
      'c-row': Row,
      'c-footer': Footer,
      'c-header': Header,
      'c-wrapper': Wrapper,
      'c-slider': Slider,
      'c-content': Content,
      'c-tabs': Tabs,
      'c-tab': TabItem,
      'c-tab-pane': TabPane,
      'c-tab-nav': TabNav,
      'c-tab-content': TabContent,
      'c-popover': Popover,
      'c-collapse': Collapse,
      'c-collapse-item': CollapseItem,
      'c-cascader': Cascader,
      'c-slides': Slides,
      'c-slides-item': SlidesItem,
      'c-pager': Pager,
      'c-table': Table,
      'c-sticky': Sticky
    },
    data() {
      return {
        ifLoading: false,
        data,
        message: 'Hi,我支持v-model!',
        promptType: 'error',
        selectedTab: "setting",
        selectedItems: "setting",
        name: '1',
        selected: [],
        current: 5,
        columns: [  // 确保最后一个column的width为空, 以便自适应
          {text: '姓名', field: 'name', width: '300px'},
          {text: '分数', field: 'score', width: '300px'},
          {text: '年龄', field: 'age'}
        ],
        dataSource: [  // id从0开始!
          {id: 0, name: '楠', score: 100, age: 21},
          {id: 1, name: '小红', score: 90, age: 22},
          {id: 2, name: '小明', score: 80, age: 30},
          {id: 3, name: '小敏', score: 91, age: 16},
          {id: 4, name: '小埋', score: 60, age: 8},
          {id: 5, name: '小妹', score: 89, age: 17},
          {id: 6, name: '小猫', score: 70, age: 24},
          {id: 7, name: '小麦', score: 93, age: 88},
          {id: 9, name: '楠', score: 100, age: 21},
          {id: 10, name: '小红', score: 90, age: 22},
          {id: 11, name: '小红', score: 90, age: 22},
          {id: 12, name: '小明', score: 80, age: 30},
          {id: 13, name: '小敏', score: 91, age: 16},
          {id: 14, name: '小埋', score: 60, age: 8},
          {id: 15, name: '小妹', score: 89, age: 17},
          {id: 16, name: '小猫', score: 70, age: 24},
          {id: 17, name: '小麦', score: 93, age: 88},
        ],
        sortRules: {
          score: '',
          age: ''
        },
        tableLoading: false
      }
    },
    methods: {
      toast() {
        this.$toast(
            {
              message: 'hello',
              autoClose: false,
              // callback: () => {
              //   alert(1)
              // },
              position: 'top'
            }
        )
      },
      x(e) {
        console.log(e);
      },
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
    mounted() {
        console.log(this.$mousePosition())
    }
  }
</script>

<style lang="scss">
  * {box-sizing: border-box;margin: 0;padding: 0;}
  html,body {
    height: 100%;
  }
  .xxx {
    width: 400px;
    height: 200px;
    background-color: rgb(204, 204, 204);
    text-align: center;
    line-height: 200px;
    box-sizing: border-box;
  }
</style>
