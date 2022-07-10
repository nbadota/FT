<?php
    header('content-type:text/html;charset="utf-8"');

    /* 
    【注】PHP代码兼容html和css所有的代码。
        php =》 数据库
        php =》 编写Html代码

        前后端分离进行开发
        后台开发工程师：php + mysql
        前端开发工程师：html+css+javascript  网站，我们能看到的部分。

        全栈开发工程师。

        php的输出函数  如果语句中含有标签会自动解析。


        【注】php的语法是非常严格的，每一条语句后面都必须加分号。
    */
    echo "<h1>hello world</h1>";
    echo("<h1>hello world</h1>");

    print_r("<h1>hello world</h1>");
   
    /* 
        类似于js中的console.log()   测试程序
    */
    var_dump(100);
    var_dump("hello");
?>