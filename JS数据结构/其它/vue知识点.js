//1.computed watch
/*
computed有缓存，data不变则不会重新计算
 */
/*
watch如何深度监听
export default {
    data() {
        return {
            name: '双越',
            info: {
                city: '北京'
            }
        }
    },
    watch: {
        name(oldVal, val) {
            // eslint-disable-next-line
            console.log('watch name', oldVal, val) // 值类型，可正常拿到 oldVal 和 val
        },
        info: {
            handler(oldVal, val) {
                // eslint-disable-next-line
                console.log('watch info', oldVal, val) // 引用类型，拿不到 oldVal 。因为指针相同，此时已经指向了新的 val
            },
            deep: true // 深度监听
        }
    }
}
 */

//v-show v-if
/*
v-if 不渲染   更新不频繁
v-show display: none  更新频繁
 */

//循环列表渲染
/*
v-for
v-for 和 v-if 不能一起使用(v-for 优先级高于 v-if)
 */

//事件
/*
@click="increment1"   increment1(event)
@click="increment2(2,$event)"   increment2(val,event)
event.target  事件挂载的当前元素
event.currentTarget   触发该事件的元素
 */

//表单
/*
v-model
 */


//组件间传值
/*
父传子  props  provide,inject
子传父 子组件向父组件触发事件  this.$emit('add', this.title)
兄弟间 自定义事件  event.$emit('onAddTitle', this.title)  event.$on('onAddTitle', this.addTitleHandler)
 event.$off('onAddTitle', this.addTitleHandler)
 */

//vue生命周期
/*
1.beforeCreate  ；钩子函数里拿不到data和methods。
2。created vue   实例初始化，存在于内存中，还未开始渲染。
                在实例创建完成后被立即调用。在这一步，实例已完成以下的配置：数据观测 (data observer)，属性和方法的运算，watch/event 事件回调。
3.beforeMount   在挂载开始之前被调用：相关的render函数首次被调用。
4.mounted  网页已渲染完成，可以拿到dom元素，但也只是能拿到初始化数据里的dom元素，如果是存在异步对dom元素数据进行更改我们就只能在updated里获取。
5.beforeUpdate  当数据更新后出发的钩子函数，这个钩子函数里拿到的是更改之前的数据，虚拟DOM重新渲染和打补丁之前被调用，
                你可以在这个钩子中进一步地修改data，这不会触发附加的重渲染过程。
6.updated  如果对数据更新做一些统一处理在updated钩子中处理即可
7.beforeDestroy  1.解绑自定义事件event.$off  2.清除定时器  3.解绑自定义的DOM事件，如window scroll等
8.destroyed  Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁
 */

//vue高级特性
/*
1.获取dom元素  this.$refs.ul1  ref="ul1"
2.异步渲染  $nextTick 异步渲染，待DOM渲染完再回调 this.$nextTick(()=>{})
3.slot插槽  作用域插槽 具名插槽
4.动态组件
<div v-for="item in data" :key="item.id">
    <component :is="item.type"/>
<div>
5.异步组件
FormDemo: () => import('../BaseUse/FormDemo')
6.keep-alive
 */

//vue-router
/*
1.路由懒加载
component: () => import{ './../components/FeedBack' }
 */

//如何理解MVVM
/*
M: Model 层 （vuex，data）
V：View 层 （视图）
VM： ViewModel 层
View 层通过 ViewModel 和 Model 做关联，像监听事件，监听指令等等。

在 Model 修改的时候，就能立刻执行 View 的渲染，View 层里面有什么点击事件，各种 DOM 事件监听的时候， 都可以去修改
Model 这一层的数据。

所以说这就是数据驱动视图。通过修改 Model 数据去驱动视图 View。这个视图不用我们亲自操作。

解题思路:
MVVM 要能把图画出来，并且结合代码来讲清楚。

在解释 MVVM 时要把组件化和数据驱动视图也讲出来，会更全面一些。
 */

//监听data变化的核心api
/*
const data = {}
const name = 'zhangsan'
Object.defineProperty(data,"name",{
    get: function () {
        return name
    },
    set: function (newVal) {
        name= newVal
    }
})
 */

//如何深度监听data变化
/*
 */

//Object.defineProperty缺点
/*
深度监听，需要递归到底，一次性计算量大
无法监听新增/删除属性(Vue.set Vue.delete)
无法原生监听数组，需要特殊处理
 */

//如何监听数组变化
/*
// 重新定义数组原型
const oldArrayProperty = Array.prototype
// 创建新对象，原型指向 oldArrayProperty ，再扩展新的方法不会影响原型
const arrProto = Object.create(oldArrayProperty);
['push', 'pop', 'shift', 'unshift', 'splice'].forEach(methodName => {
    arrProto[methodName] = function () {
        updateView() // 触发视图更新
        oldArrayProperty[methodName].call(this, ...arguments)
        // Array.prototype.push.call(this, ...arguments)
    }
})
 */


//虚拟DOM(Virtual DOM)和diff
/*
1.vdom 用js模拟DOM结构，计算出最小的变更，操作DOM
2.模拟vnode
3.新旧vnode对比，得出最小的更新范围，最后更新DOM
4.数据驱动视图的模式下，有效控制DOM操作
5.snabbdom(vdom库)，vue参考它实现的vdom和diff
 */

//diff算法
/*
1.diff即对比，是一个广泛的概念，如git diff,linux diff等
2.树的diff优化
只比较同一层级
tag不相同，直接删掉重建，不再深度比较
tag和key，两者都相同，则认为是相同节点，不再深度比较
3.源码 patch patchVnode updateChildren
 */

//编译模板
/*
1.模板一定是转换为某种JS代码，即编译模板
2.模板编译为render函数，执行render函数返回vnode
3.基于vnode再执行patch和diff
4.使用webpack vue-loader,会在开发环境下编译模板
5.vue组件可以用render代替template
 */

//初次渲染过程
/*
1.解析模板为render函数
2.触发响应式，监听data属性getter setter
3.执行render函数，生成vnode,patch(elem,vnode)
 */

//更新过程
/*
1.修改data，触发setter（此前再getter中已被监听）
2.重新执行render函数，生成newVnode
3.patch(vnode,newVnode)
 */

//异步渲染
/*
1.$nextTick
2.汇总data的修改，一次性更新视图
3.减少DOM操作次数，提高性能
 */

//为何在v-for中用key
/*
1.必须用key,且不能是index和random
2.diff算法中通过tag和key来判断，是否是sameNode
3.减少渲染次数，提升渲染性能
 */

//父子组件声明周期
/*
当涉及父子组件，假设父组件为A，子组件为B

初次渲染
  A created
  B created
  B mounted
  A mounted
只销毁子组件
  A beforeUpdate
  B beforeDestory
  B destoryed
  A updated
直接销毁父组件
  A beforeDestory
  B beforeDestory
  B destoryed
  A destoryed
 */

//双向数据绑定v-model的实现原理
/*
0.数据模型（Module）和视图（View）之间的双向绑定。(单向绑定：们先把模板写好，然后把模板和数据（数据可能来自后台）整合到一起形成HTML代码，然后把这段HTML代码插入到文档流里面。)
1.input元素的value = this.name
2.绑定input事件this.name = $event.target.value
3.data更新触发re-render
 */


//如何将组件所有的props传递给子组件
/*
1.$props
2.<user v-bind="$props"/>
 */

//何时要使用异步组件
/*
1.加载大组件 2.路由异步加载
 */

//何时需要使用keep-alive
/*
缓存组件，不需要重复渲染，如多个静态tab的切换
 */

//何时需要使用beforeDestory
/*
1.解绑自定义事件event.$off
2.清除定时器
3.解绑自定义的DOM事件，如window scroll等
 */

//vuex中action和mutation的区别
/*
1.action中处理异步，mutation不可以
2.mutation可以跳过action
 */

//vue常见优化方式
/*
1.合理使用v-show和v-if
2.合理使用computed
3.自定义事件，DOM事件及时销毁
4.合理使用异步组件
5.合理使用keep-alive
 */

//ajax请求应该放在哪个生命周期
/*
1.mounted(dom加载完成后)
2.ajax异步获取数据
2.页面初始化时，created 到 mounted 的耗时非常短。所以 ajax 放在 created 里所能带来的优化效果，并不明显
 */

//为什么vue中的data一定是函数
/*
因为如果data是一个对象则会造成数据共享，在多次使用该组件时，改变其中一个组件的值会影响全部该组件的值。
而如果是通过函数的形式返回出一个对象的话，在每次使用该组件时返回出的对象的地址指向都是不一样的，这样就能让各个组件的数据独立
 */

//updated，watch和nextTick区别
/*
updated对所有数据的变化进行统一处理

watch对具体某个数据变化做统一处理

nextTick是对某个数据的某一次变化进行处理
 */


//vue前端路由原理(hash,H5 history)
/*
1.hash变化会触发网页跳转，即浏览器的前进，后退
2.hash变化不会刷新页面，spa的特点
3.hash不会提交到服务端
4.window.onhashchange= (event) => {
    console.log(event.oldURL,event.newURL,location.hash)
}
 */
//history
/*
用url规范的路由，但跳转时不刷新页面
history.pushState
window.onpopstate
 */

//前端调试
/*
debugger
 */
