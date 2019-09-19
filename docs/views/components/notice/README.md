---
title: 'Notice'
sidebarDepth: 2
---

## Toast 提示
<ClientOnly>
  <toast-demo/>
<font size=5>Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| position | Toast 出现的位置 | String | 'top', 'middle', 'bottom' | 'top' |
| autoClose | 是否自动关闭 | Boolean | - | - |
| closeDelay | 自动关闭的时间, 单位为秒(s) | String | - | - |

<font size=5>Events Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| callback | 关闭 Toast 后触发 | - | - | - |
</ClientOnly>

<br><br>

## Popover 弹出框
<ClientOnly>
  <popover-demo/>

<font size=5>Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| trigger | 触发方式 | String | 'hover', 'click' | 'click' |
| direction | Popover 出现方向 | String |'top', 'bottom', 'left', 'right' | 'top' |
| delay | 'hover' 触发下, 延迟消失的时间 | String, Number | - | 0 |

</ClientOnly>
