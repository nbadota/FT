<?php
    header('content-type:text/html;charset="utf-8"');

    /* 
        时间戳  1568602644  存储时间
    */
    // echo time();

    /* 
        date() 获取当前时间显示的时候，必须传入参数
            Y  代表四位数的年
            m  月份
            d  日
            H  小时
            i  分钟
            s  秒数
    */
    date_default_timezone_set("PRC");
    echo date("Y年m月d日 H:i:s");
    echo "<br/>";
    echo date("Y/m/d H:i:s");
    

?>