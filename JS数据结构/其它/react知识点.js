/*
1.state: 相当于vue中的data
2.插值：vue中  {{}}
       react中 {}

3.动态绑定：vue中 v-bind:id="dynamicId" 或 :id="dynamicId"
          react中 {}

4.class和style：vue中 :class="classname" :style="style"
               react中  className="classname"  className={classname}

5.原生html：vue中 <p>Using v-html directive: <span v-html="rawHtml"></span></p>
           react中  const rawHtml = '<span>富文本内容<i>斜体</i><b>加粗</b></span>'
                    const rawHtmlData = {
                        __html: rawHtml // 注意，必须是这种格式
                    }
                    const rawHtmlElem = <div>
                        <p dangerouslySetInnerHTML={rawHtmlData}></p>
                    </div>

6.判断条件：vue中 v-if v-else-if v-else v-show
          react中 if (this.state.theme === 'black') {
                     return blackBtn
                 } else {
                     return whiteBtn
                 }

                return <div>
                  { this.state.theme === 'black' ? blackBtn : whiteBtn }
                </div>

                return <div>
                    { this.state.theme === 'black' && blackBtn }
                </div>

7.渲染列表：vue中 <li v-for="item in items" :key="item.message">
                    {{ item.message }}
                </li>
          react中 this.state.list.map(
                    (item, index) => {
                        // 这里的 key 和 Vue 的 key 类似，必填，不能是 index 或 random
                        return <li key={item.id}>
                            index {index}; id {item.id}; title {item.title}
                        </li>
                    }
                )

8.事件绑定 vue中 @click="function(arg,$event)"  function(arg,event)  vue中event为原生
         react中 <button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>  function deleteRow(arg,event) react中event封装过

        // 1. event 是 SyntheticEvent ，模拟出来 DOM 事件所有能力
        // 2. event.nativeEvent 是原生事件对象
        // 3. 所有的事件，都被挂载到 document 上
        // 4. 和 DOM 事件不一样，和 Vue 事件也不一样

9.表单 vue中 v-model 双向绑定
      react中 程序员自己实现(利用state实现受控组件)

10.state与setState

11.获取dom节点 vue中 <div ref="ul1">  this.$ref.ul1
             react中(非受控组件)  this.nameInputRef = React.createRef() <input defaultValue={this.state.name} ref={this.nameInputRef}/>
                                const elem = this.nameInputRef.current // 通过 ref 获取 DOM 节点

12.react portals 指定渲染的dom节点

13.Contest 公共信息（语言，主题）传递给每个组件

14.异步组件 vue中 FormDemo: () => import('../BaseUse/FormDemo')
          react中 const ContextDemo = React.lazy(() => import('./ContextDemo'))
                  <React.Suspense fallback={<div>Loading...</div>}>
                        <ContextDemo/>
                  </React.Suspense>

15.react性能优化 核心API shouldComponentUpdate(nextProps,nextState)  默认返回true

16.react高阶组件(hoc) 传入组件，返回组件
组件公共逻辑抽离（16，17）
17.render props

18.redux 单向数据流

19.react-redux
   redux-toolkit

20.react 原理
//函数式编程：纯函数，不可变值

//v-dom和diff

//jsx与template
template本质：不是html,编译后返回render函数，render函数执行返回vnode,然后patch等
jsx本质：编译后返回React.creatElement函数，函数执行返回vnode

//合成事件
使用原因：更好的兼容性和平台，挂载到document，减少内存消耗，避免频繁解绑

//setState机制
看看能否命中batchUpdate机制
判断isBatchingUpdates 为true(异步)或false(同步)

//组件更新与渲染
1.setState(newState) --> dirtyComponents (可能有子组件)
2.render()生成newVnode
3.patch

21.hooks
//函数式组件的特点
没有组件实例
没有生命周期
没有state和setState,只能接收props

//函数式组件+hooks，实现class组件功能

//useRef 获取dom节点

//useContext 等同于class中 Contest

//useReducer 是usestate的替代方案，用于state复杂变化
  但只能管理单个组件状态，与redux不同

//useMemo useCallback 性能优化

//自定义hook

//ReactHooks注意事项
useState初始化值，只有第一次有效
useEffect内部不能修改state
useEffect可能出现死循环
 */

//react fiber 调和引擎
/*
原：一般树节点结构实现，以递归方式深度遍历
新：fiber数据结构实现，以循环方式实现
*/