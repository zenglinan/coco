---
title: 'Others'
sidebarDepth: 2
---

## Carousel 幻灯片
<ClientOnly>
  <carousel-demo/>
<font size=5>Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| delay | 自动播放幻灯片的时间间隔 | String, Number | - | - |
| indicator | 是否添加指示器 | Boolean | true, false | false |
| auto | 是否自动播放 | Boolean | true, false | true |

<font size=5>Event Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| toLast | 点击上一页按钮时触发, 传递上一页的索引 | - | - |
| toNext | 点击下一页按钮时触发, 传递上一页的索引 | - | - |
</ClientOnly>
