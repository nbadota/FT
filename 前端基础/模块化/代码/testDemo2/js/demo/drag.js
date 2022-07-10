define(function(){
    function drag(node){
        node.onmousedown = function(ev){
            var e = ev || window.event;
            var offsetX = e.clientX - this.offsetLeft;
            var offsetY = e.clientY - this.offsetTop;

            document.onmousemove = function(ev){
                var e = ev || window.event;
                var l = e.clientX - offsetX;
                var t = e.clientY - offsetY;

                var windowWidth = document.documentElement.clientWidth || document.body.clientWidth;
                var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;

                l = range(l, 0, windowWidth - node.offsetWidth);
                t = range(t, 0, windowHeight - node.offsetHeight);


                node.style.left = l + 'px';
                node.style.top = t + 'px';
            }
        }
        document.onmouseup = function(){
            document.onmousemove = null;
        }
    }

    function range(iCur, iMin, iMax){
        if(iCur >= iMax){
            return iMax;
        }else if(iCur <= iMin){
            return iMin;
        }else{
            return iCur;
        }
    }

    return {
        drag: drag,
        range: range
    }
})