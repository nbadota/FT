//express中间件原理
/*
1.使用app.use 或 app.get app.post 注册中间件
2.遇到http请求，根据path和method判断触发
3.实现next机制，即上一个通过next触发下一个
 */

//commonjs与es6 module的区别
/*
1.commonjs是动态引入，执行时引入，可放在如if语句中执行
2.es6 module是静态引入，编译时引入，必须放在最外层
3.tree shaking 仅仅适用于es6 module
 */

//path.resolve 与 path.join的区别
/*
1.path.resolve返回绝对路径
2.path.join返回相对路径
 */
