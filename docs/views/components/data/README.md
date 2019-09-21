---
title: 'Data'
sidebarDepth: 2
---

## Input 输入框
<ClientOnly>
  <input-demo/>
<font size=5>Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| value | 输入框的值 | String | - | - |
| disabled | 是否禁用 | Boolean | true, false | false |
| placeholder | placeholder | String | - | - |
| prompt | 提示信息的类型 | String | 'pass', 'error' | - |
| errorMessage | 错误提示信息 | String | - | - |
| passMessage | 成功提示信息 | String | - | - |
| promptPosition | 提示信息出现位置 | String | 'right', 'bottom' | 'bottom' |
| size | 输入框大小 | String, Number | 3, 2, 1 | 2 |
</ClientOnly>

<br><br>

## Cascader 级联选择器
<ClientOnly>
  <cascader-demo/>
<font size=5>Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| selected | 选中项的数组 | Array | - | - |
| db | 级联数据 | Array | - | - |
</ClientOnly>

<br><br>

## Table 表格
<ClientOnly>
  <table-demo/>
<font size=5>Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| columns | 表头数据 | Array | - | - |
| data | 表格内容数据 | Array | - | - |
| indexVisible | 是否开启索引列 | Boolean | true, false | false |
| compressed | 紧凑型表格 | Boolean | true, false | false |
| striped | 间隔颜色是否发生变化 | Boolean | true, false | false |
| selectable | 是否开启勾选列 | Boolean | true, false | false |
| selectedItems | 勾选项 | Array | - | [] |
| sortRules | 键值对的键为列名, 值为该列的排序状态, 可选: 'desc', 'asc', '' | Object | - | {} |
| loading | 是否为 loading 状态 | Boolean | true, false | false |
| height | 表格可视区高度, 需指定单位 | String | - | - |
</ClientOnly>