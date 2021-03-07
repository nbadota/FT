define(['drag'], function(drag){
    /* 
        node1 被缩放的控件
        node2 按下的控件
    */
    function scale(node1, node2){
        node2.onmousedown = function(ev){
            var e = ev || window.event;
            //1、记录
            var w = node1.offsetWidth;
            var h = node1.offsetHeight;
            var l = e.clientX;
            var t = e.clientY;

            document.onmousemove = function(ev){
                var e = ev || window.event;
                //改变宽和高，进行缩放
                var W = w + (e.clientX - l);
                var H = h + (e.clientY - t);

                //限制出界
                W = drag.range(W, 100, 500);
                H = drag.range(H, 100, 500);

                node1.style.width = W + 'px';
                node1.style.height = H + 'px';
            }
        }
        document.onmouseup = function(){
            document.onmousemove = null;
        }
    }
    return {
        scale: scale
    }
})