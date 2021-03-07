/*
webpack搭建流程
npm init -y
npm install webpack webpack-cli -D
 */

/*
loader:用于对模块的源代码进行转换。loader 可以使你在 import 或"加载"模块时预处理文件。
plugins:插件目的在于解决 loader 无法实现的其他事。
 */

//webpack基本配置
/*
1.拆分配置和merge
2.启动本地服务
3.处理ES6
4.处理样式
5.处理图片
6.模块化
7.ESLint  //npm install eslint --save-dev npx eslint --init
 */

//webpack高级配置
/*
1.多入口
2.抽离css文件
3.抽离公共代码
4.懒加载
5.处理vue
 */

//module chunk bundle 的区别
/*
module 各个源码文件，webpack中一切都为模块
chunk 多模块合并成的，如entry import() splitChunk
bundle 最终的输出文件
 */

//webpack性能优化
/*
1.优化打包构建速度，提升开发体验和效率
2.优化产出代码，提升产品性能
 */

//webpack用于生产环境的性能优化-优化构建速度
/*
1.babel-loader
2.IgnorePlugin
3.noParse
4.happyPack
5.ParallelUglifyPlugin
 */

//webpack不用于生产环境的性能优化-优化构建速度
/*
1.自动刷新
2.热更新
3.DLLPlugin
 */

//webpack性能优化-产出代码
/*
1.小图片base64编码
2.bundle加hash
3.懒加载
4.提取公共代码
5.IgnorePlugin
6.使用cdn加速
7.使用production  优点：1自动开启代码压缩 2vue react 等会自动删掉调试代码 3启动Tree-Shaking
(Tree-Shaking 只支持es6module,因为es6module为编译时（静态）引入)
8.使用Scope Hosting  优点：让多个函数合并为一个函数
 */

//webpack中配置babel
/*
1.@babel/preset-env  //preset 可以作为 Babel 插件的组合
2.babel-polyfill  //es6语法补丁，包含core-js 和 regenerator,7.4已弃用
3.babel-polyfill 的问题  //会污染全局环境（作为第三方库时）
5.babel-runtime  //优点：不会污染全局环境
 */

//前端为何要进行打包和构建
/*
1.体积更小（Tree-Shaking，压缩，合并），加载更快
2.编译高级语言或语法（es6，scss等）
3.兼容性和错误性检查（Polyfill,postcss,eslint)
4.统一，高效的开发环境，统一的构建流程和产出标准
 */

//babel 和 webpack的区别
/*
1.Babel  //Babel是一个 JavaScript 编译器,不关心模块化
2.webpack  //打包构建工具，是多个loader plugin 的集合
 */

//为何Proxy不能被Polyfill
/*
Proxy的功能用Object.defineProperty无法模拟
 */
