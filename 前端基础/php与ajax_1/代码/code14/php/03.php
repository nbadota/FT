<?php
    header('content-type:text/html;charset="utf-8"');
    /* 
        php声明变量通过$符号进行声明
        弱引用类型：给变量赋值什么数据，就是什么数据类型。


        php字符串拼接的时候，用的不是加号，而是 .
        php在进行字符串拼接的时候：占位符的方式进行拼接 {变量/表达式}
    */
    $username = "钢铁侠";
    $age = 18;

    echo "我是".$username.",今年".$age."岁<br/>";
    echo "我是{$username},今年{$age}岁";
?>