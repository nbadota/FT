define(["jquery"], function($){
    function banner(){
        $(function(){
            var oUl = $("#play").find("ul");
            var aBtns = $("#play").find("ol").find("li");

            var iNow = 0; //默认让第0张图片显示
            var timer = null;

            aBtns.click(function(){
                iNow = $(this).index();
                //切换
                tab();
            })

            //自动完成切换
            timer = setInterval(function(){
                iNow++;
                tab();
            }, 2000);


            $("#play").hover(function(){
                clearInterval(timer);
            }, function(){
                timer = setInterval(function(){
                    iNow++;
                    tab();
                }, 2000);
            })


            function tab(){
                document.title = iNow;
                aBtns.attr("class", '').eq(iNow).attr("class", 'active');
                if(iNow == aBtns.size()){
                    aBtns.eq(0).attr("class", 'active');
                }

                oUl.animate({top: -150 * iNow}, 500, function(){
                    //动画结束的时候
                    if(iNow == aBtns.size()){
                        oUl.css("top", 0);
                        iNow = 0;
                    }
                });
            }

            
        });
    }
    return {
        banner: banner
    }
})