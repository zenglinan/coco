## Table
### 项目难点: 
#### 1. 表格固定表头
要做到固定表头, 即下拉表格的时候, thead 固定, <br>
首先需要用户指定表格高度(写在div上, 写在表格上无效), 同时设置```overflow: auto```<br>
至于固定表头, 首先的想法是将 thead 移出 table, 放在原先展示的地方, 这样就不会随着table的滚动而滚动<br>

但是这样有一个问题, 就是 thead 不能脱离 table 显示, 所以得先将 table 整个拷贝一份, 将副本中的 tbody tfoot移除, 保留 thead 插入到原有的地方<br>

这样确实可行, 利用一个假表头伪装成表头, 但是又引发了一个问题: 就是拷贝 table 的时候虽然采用了深拷贝, 但是只能拷贝元素, 元素上的事件全都没有拷贝, 表头上的事件都失效了<br>

所以不能用拷贝的 thead, 这次, 用浅拷贝的 table (不拷贝内部元素), 然后将原本 table 中的 真thead 移出, 并插入到副本 table 中.<br>

这样就基本实现了功能, 唯一需要处理的就是, 移除了原本的 thead , tbody自动顶上去了, 所以第一栏可能会被 thead 遮住一部分, 只需获取 thead 的高度, 加做margin即可<br>
