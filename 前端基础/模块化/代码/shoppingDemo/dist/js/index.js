/* 
    遵从AMD规范
*/
define(["parabola", "jquery", "jquery-cookie"], function(parabola, $){
    function index(){
        $(function(){
            sc_num();
            sc_msg();
        
            $.ajax({
                type: "get",
                url: "../data/data.json",
                success: function(arr){
                    for(var i = 0; i < arr.length; i++){
                        var node = $(`<li class = 'goods_item'>
                                <div class = 'goods_pic'>
                                    <img src="${arr[i].img}" alt=""/>
                                </div>
                                <div class = 'goods_title'>
                                    <p>【京东超市】奥利奥软点小草莓</p>
                                </div>
                                <div class = 'sc'>
                                    <div id = "${arr[i].id}" class = 'sc_btn'>加入购物车</div>
                                </div>
                            </li>`);
                        node.appendTo(".goods_box ul");
                    }
                },
                error: function(msg){
                    alert(msg)
                }
            })
        
            //给加入购物车按钮添加点击事件
            $(".goods_box ul").on("click", ".sc_btn", function(){
                //取出当前按钮所在商品的id
                var id = this.id;
                /* 
                    本地存储cookie(存储的必须是字符串)   4kb
                    商品id和商品数量。
                    本地存储商品的结果：[{id:id,num:1},{id:id,num:2}]
        
                    cookie存储：键:goods  值：数据结构转成json格式字符串。
        
                 */
                //判断是否是第一次存储
                var first = $.cookie("goods") == null ? true : false;
                if(first){
                    //是第一次存储
                    var arr = [{id: id, num: 1}];
                    $.cookie("goods", JSON.stringify(arr), {
                        expires: 7
                    })
                }else{
                    //判断之前是否添加过
                    var cookieStr = $.cookie("goods");
                    var cookieArr = JSON.parse(cookieStr);
                    var same = false; //假设没有存储过
                    //通过循环遍历是否有之前存储过的商品
                    for(var i = 0; i < cookieArr.length; i++){
                        if(cookieArr[i].id == id){
                            cookieArr[i].num++;
                            same = true;
                            break;
                        }
                    }
        
                    //判断如果没有添加过
                    if(!same){
                        var obj = {id: id, num: 1};
                        cookieArr.push(obj);
                    }
        
                    $.cookie("goods", JSON.stringify(cookieArr), {
                        expires: 7
                    })
                    
                }
        
                sc_num();
                sc_msg();
                ballMove(this);
            })
        
            /* 
                右侧购物车添加移入移出
             */
            $(".sc_right").mouseenter(function(){
                $(this).stop(true).animate({
                    right: 0
                }, 1000);
            })
        
            $(".sc_right").mouseleave(function(){
                $(this).stop(true).animate({
                    right: -270
                }, 1000);
            })
        
            //删除商品
            $(".sc_right ul").on("click", ".sc_removeBtn", function(){
                //商品id
                var id = $(this).closest("li").remove().attr("id");
                /* 
                    1、删除页面上的节点
                    2、cookie存储的该数据删除
                 */
                var cookieArr = JSON.parse($.cookie("goods"));
                for(var i = 0; i < cookieArr.length; i++){
                    if(id == cookieArr[i].id){
                        cookieArr.splice(i, 1);
                        break;
                    }
                }
        
                //存储数据到cookie的时候，判断数组是否为空
                if(cookieArr.length){
                    $.cookie("goods", JSON.stringify(cookieArr), {
                        expires: 7
                    })
                }else{
                    $.cookie("goods", null);
                }
                sc_num();
            })
        
            //加和减
            $(".sc_right ul").on("click", ".sc_goodsNum button", function(){
                //商品id
                var id = $(this).closest("li").attr("id");
                //取出对应cookie中的数据
                var cookieArr = JSON.parse($.cookie("goods"));
                for(var i = 0; i < cookieArr.length; i++){
                    if(id == cookieArr[i].id){
                        //要修改的数据
                       var goodObj = cookieArr[i];
                       break;
                    }
                }
                if(this.innerHTML == "+"){
                    goodObj.num++;
                }else{
                    if(goodObj.num == 1){
                        alert("数量已经见到最小了！");
                    }else{
                        goodObj.num--;
                    }
                }
        
                //重新显示新的数量
                $(this).prevAll("span").html(goodObj.num);
        
                $.cookie("goods", JSON.stringify(cookieArr), {
                    expires: 7
                });
                sc_num();
        
            })
            
        
            /* 
                统计购物车里商品数量
             */
            function sc_num(){
                var cookieStr = $.cookie("goods");
                if(cookieStr){
                    var cookieArr = JSON.parse(cookieStr);
                    var sum = 0;
                    for(var i = 0; i < cookieArr.length; i++){
                        sum += cookieArr[i].num;
                    }
                    $(".sc_right .sc_num").html(sum);
                }else{
                    $(".sc_right .sc_num").html(0);
                }
            }
        
            /* 
                加载右侧购物车
             */
            function sc_msg(){
                $(".sc_right ul").empty(); //清空ul所有子节点
                $.ajax({
                    type: "get",
                    url: "../data/data.json",
                    success: function(arr){
                        //取出cookie中的数据
                        var cookieStr = $.cookie("goods");
                        if(cookieStr){
                            var cookieArr = JSON.parse(cookieStr);
                            //找出加入购物车的商品数据
                            var newArr = [];
                            for(var i = 0; i < arr.length; i++){
                                for(var j = 0; j < cookieArr.length; j++){
                                    if(arr[i].id == cookieArr[j].id){
                                        //增加购物车商品数量
                                        arr[i].num = cookieArr[j].num;
                                        newArr.push(arr[i]);
                                    }
                                }
                            }
        
                            // console.log(newArr);
                            //每次加载数据的时候，都将上一次的数据清空
                            // $(".sc_right ul").html("");
                            
                            for(var i = 0; i < newArr.length; i++){
                                var node = $(`<li id = "${newArr[i].id}">
                                    <div class = 'sc_goodsPic'>
                                        <img src="${newArr[i].img}" alt=""/>
                                    </div>
                                    <div class = 'sc_goodsTitle'>
                                        <p>这是商品曲奇饼干</p>
                                    </div>
                                    <div class = 'sc_goodsBtn'>购买</div>
                                    <div class = 'sc_removeBtn'>删除</div>
                                    <div class = 'sc_goodsNum'>
                                        商品数量:<span>${newArr[i].num}</span>
                                        <button>+</button>
                                        <button>-</button>
                                    </div>
                                </li>`);
                                node.appendTo(".sc_right ul");
                            }
        
                        }
                    },
                    error: function(msg){
                        console.log(msg);
                    }
                })
            }
            
            
            
            //抛物线的函数
            function ballMove(oBtn){
                //小球位置显示在加入购物车按钮这个位置
                $("#ball").css({
                    display: 'block',
                    left: $(oBtn).offset().left,
                    top: $(oBtn).offset().top
                })
        
                var X = $(".sc_right .sc_pic").offset().left - $(oBtn).offset().left;
                var Y = $(".sc_right .sc_pic").offset().top - $(oBtn).offset().top;
        
                //创建一个抛物线对象
                var bool = new Parabola({
                    el: "#ball",
                    offset: [X, Y],
                    duration: 800,
                    curvature: 0.0005,
                    callback: function(){
                        $("#ball").hide();
                    }
                });
                //开始运动
                bool.start();
            }
        
            //清空购物车
            $("#removeBtn").click(function(){
                $.cookie("goods", null);
                sc_num();
                sc_msg();
            })
        });
    }

    return {
        index: index
    }
})