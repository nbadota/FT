<?php
    header('content-type:text/html;charset="utf-8"');
    /* 
        md5编码
        功能：md5将任何的数据，编成一个32位的十六进制的字符串。
        【注】不可逆加密，同样的字符串加密以后，长的一样。
    */

    /* $str1 = "123abc";

    echo md5($str1); 
    //a906449d5769fa7361d7ecc6aa3f6d28

    echo "<br/>";

    $str2 = "123abc";
    echo md5($str2); */

    /* 
        自行去设计一套加密规则。
    */
    $str1 = "123abc";
    echo md5(md5(md5($str1).'qianfeng')."qingdao");
    echo "<br/>";
    $str2 = "123abc";
    echo md5(md5(md5($str2).'qianfeng')."qingdao");

?>