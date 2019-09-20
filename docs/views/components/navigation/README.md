---
title: 'Navigation'
sidebarDepth: 2
---

## Tabs 标签页
<ClientOnly>
  <tab-demo/>
<font size=5>Tab Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| selectedItems | 默认选中的 tab 标签的 name 值 | String | - | - |
| direction | Tab 的方向 | String | row, column | row |
</ClientOnly>

<font size=5>Tab-Item Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| name | tab-item 的 name 标识 | String | - | - |
| icon | 图标名称 | String | - | - |
</ClientOnly>

<font size=5>Tab-Pane Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| name | 内容的 name 标识, 与对应的 tab-item 应为一致 | String | - | - |
</ClientOnly>

<br><br>

## Pager 分页器
<ClientOnly>
  <pager-demo></pager-demo>
<font size=5>Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| total | 总页码数 | Number, String | - | - |
| current | 当前显示页码 | Number, String | - | - |
| hideIfOnePage | 总页码为 1 时是否隐藏分页器 | Boolean | true, false | true |
| transfer | 是否开启传送门 | Boolean | true, false | false |

<font size=5>Attributes</font>
| 参数| 说明 | 参数 |
| :------ | ------ | ------ | ------ | ------ |
| error | 错误捕获函数 | 错误信息 |

</ClientOnly>

