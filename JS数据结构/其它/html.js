/*
如何理解HTML语义化
1.让人更容易读懂
2.让机器更容易读懂（搜索引擎优化）
 */

/*
块级元素
1.display:block/table   div h1 ul ol p ...
内联元素
2.display:inline/inline-block span img input button
 */


/*
盒模型
box-sizing  border-box(IE) Element width = width   content-box(默认) Element width = width + border + padding
 */

/*
margin负值
left top 元素反向移动(本向右移动)
right bottom  右侧，下侧元素反向移动
 */

/*
bfc
块级格式化上下文
一块独立渲染区域，内部元素地渲染不会影响边界以外的元素
形成条件
float不是none
position是absolute或fixed
overflow不是visible
display是flex inline-block
 */

/*
padding与margin的百分比值都是基于父元素的宽度的
 */

/*
手写clearfix
.clearfix:after {
content: '';
display: table;
clear: both;
}
 */

/*
relative 依据自身定位
absolute 依据最近一层的定位元素定位
fixed  通过指定元素相对于屏幕视口（viewport）的位置来指定元素位置
 */


/*
水平居中
内联元素  text-align:center
块级元素  margin:0 auto
absolute   left:50% + margin-left设为absolute元素宽度一半的负数
 */

/*
垂直居中
内联元素 line-height = height
absolute top:50% + margin-top设为absolute元素高度一半的负数
absolute top,left,bottom,right = 0 + margin:auto
块级元素 1.子元素position: absolute;top: 50%;同时margin-top值为-(子元素高度的一半)
        2.display: flex;align-items: center;
 */


/*
window.screen.height //屏幕高度
window.innerHeight   //网页视口高度
document.body.clientHeight  //body高度
 */

//h5新特性
/*
1.h5新语义元素  header footer section article nav
2.h5提供sessionStorage,localStorage,indexedDB
3.网页上嵌入音视频 <audio> <video>
 */

//css3新特性
/*
1.box-sizing
2.flexbox 弹性盒模型
3.动画
 */

//label标签
/*
<form>
  <label for="male">Male</label>
  <input type="radio" name="sex" id="male" />
  <br />
  <label for="female">Female</label>
  <input type="radio" name="sex" id="female" />
</form>

<label> 标签的 for 属性应当与相关元素的 id 属性相同
 */

//表单
/*
//input type类型
<input type="text" name="name" value="">
<input type="password" name="psw" value="">
<input type="radio" name="sex" value="male" checked>
<input type="submit" value="Submit">

//input属性
type name value disabled maxlength


//多选框
<form>
<input type="checkbox" name="vehicle" value="Bike">I have a bike
<br>
<input type="checkbox" name="vehicle" value="Car">I have a car
</form>

//下拉列表
<select name="cars">
<option value="volvo">Volvo</option>
<option value="saab">Saab</option>
<option value="fiat">Fiat</option>
<option value="audi">Audi</option>
</select>

 */

//flex布局
/*
//作用在flex容器上
flex-direction: row/row-reverse/column/column-reverse 控制布局方向
flex-wrap: 控制子项整体单行显示还是换行显示 nowrap/wrap/wrap-reverse
flex-flow: 前两项缩写
justify-content: flex-start/flex-end/center/space-between/space-around/space-evenly
align-items: stretch/flex-start/flex-end/center
align-content(flex子项有多行时使用): flex-start/flex-end/center/space-between/space-around/space-evenly

//作用在flex子项上
order(默认0)
flex-grow(扩展宽度，默认0,即如果存在剩余空间，也不放大)
flex-shrink(空间不足，收缩元素，默认1,即如果空间不足，该项目将缩小)
flex-basis(定义分配剩余空间之前元素的默认大小)
align-self

//缩写
flex: 1 === flex: 1 1 0
 */

//回流与重绘
/*
1. 当render tree中的一部分(或全部)因为元素的规模尺寸，布局，隐藏等改变而需要重新构建。这就称为回流。每个页面至少需要一次回流，就是在页面第一次加载的时候。

2. 当render tree中的一些元素需要更新属性，而这些属性只是影响元素的外观，风格，而不会影响布局的，比如background-color。则就叫称为重绘。

注：回流必将引起重绘，而重绘不一定会引起回流。
 */