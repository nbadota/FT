function searchXiaoJieJie3(...xuqiu:any[]):string{

    let  yy:string = '找到了'
    for (let i =0;i<xuqiu.length;i++){
        yy = yy + xuqiu[i]
        if(i<xuqiu.length){
            yy=yy+'、'
        }
    }
    yy=yy+'的小姐姐'
    return yy

}

var result:string  =  searchXiaoJieJie3('22岁',1,'瓜子脸','水蛇腰')
console.log(result)


function zhengXing():void{
    var yangzia:string = '刘德华'
    {
        let  yangzib:string = '小沈阳'
        console.log('技术胖整形成了'+yangzib+'的样子')
    }

    console.log('技术胖整形成了'+yangzia+'的样子')
    //console.log('技术胖整形成了'+yangzib+'的样子')
}
zhengXing()

