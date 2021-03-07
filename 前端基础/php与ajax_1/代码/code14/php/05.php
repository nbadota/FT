<?php
    header('content-type:text/html;charset="utf-8"');
    /* 
        1、索引数组  下标是数字叫做索引数组
        2、关联数组  下标是字符串叫关联数组   （类似于ECMA6的map类型）
        3、全局数组
            $_GET  接收通过get提交过来的所有的数据
            $_POST 接收通过post提交过来的所有的数据

            数组中的索引数组和关联数组可以相互结合，结合成多维数组。

        数组的长度 count($cars)  返回数组的长度
    */

    //1、索引数组
    $cars = array("大众", "别克", "现代");
    array_push($cars, "宝马", "奔驰");
    // var_dump($cars);

    // echo $cars[1];

    for($i = 0; $i < count($cars); $i++){
        echo "下标:{$i}, 数据:{$cars[$i]}<br/>";
    }

    //2、关联数组/键值数组
    /* $arr = array("王五" => "打渔的", "李四" => "种地的", "张三" => "打猎的");
    // var_dump($arr);

    foreach($arr as $key => $value){
        echo "下标:{$key}, 数据:{$value}<br/>";
    } */

   /*  $arr = array(
        array("name" => "小白", "english" => 100, "math" => 50),
        array("name" => "小花", "english" => 60, "math" => 80),
        array("name" => "小红", "english" => 100, "math" => 100)
    );

    echo $arr[2]["math"]; */

    /* for($i = 0; $i < count($arr); $i++){
        var_dump($arr[$i]."<br/>");
    } */

?>