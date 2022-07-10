<?php
    header('content-type:text/html;charset="utf-8"');
    $isYes = true;
    if($isYes){
        echo "是";
    }else{
        echo "否";
    }

    $num = 2;
    switch($num){
        case 1:
            echo "数字1";
            break;
        case 2:
            echo "数字2";
            break;
        default:
            echo "输入错误";
            break;

    }

    echo "<br/>";

    for($i = 0; $i < 5; $i++){
        echo "下标".$i."<br/>";
    }


    function printHello(){
        print "hello world<br/>";
    }

    printHello();
    printHello();

?>