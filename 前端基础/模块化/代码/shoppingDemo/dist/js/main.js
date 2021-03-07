/* 
    配置引入文件的路径
*/
// console.log("加载完成");
require.config({
    paths: {
        "jquery": "jquery-1.11.3",
        "jquery-cookie": "jquery.cookie",
        'parabola': "parabola",
        "index": "index",
        "banner": "banner"
    },
    shim: {
        //设置依赖关系  先引入jquery.js  然后在隐去jquery-cookie
        "jquery-cookie": ["jquery"],
        //声明当前模块不遵从AMD
        "parabola": {
			exports: "_"
		}
    }
})


require(['index', "banner"], function(index, banner){
    index.index();
    banner.banner();
})