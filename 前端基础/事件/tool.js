function removeSpaceNode(parentNode){
    var nodes = parentNode.childNodes;
    for(var i = 0; i < nodes.length; i++){
        //当前遍历到的节点是文本节点，且文本是纯空白字符组成的
        if(nodes[i].nodeType == 3 && /^\s+$/.test(nodes[i].nodeValue)){
            parentNode.removeChild(nodes[i]);
        }
    }
}

//获取当前有效样式浏览器兼容的写法
function getStyle(node, cssStr){
    return node.currentStyle ? node.currentStyle[cssStr] : getComputedStyle(node)[cssStr];
}
function randomColor(){
    var str = "rgba(" + parseInt(Math.random() * 256) + "," + parseInt(Math.random() * 256) + "," + parseInt(Math.random() * 256) + ",1)";
    return str;
}

function showTime(){
    var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth() + 1;
    var day = d.getDate();

    var week = d.getDay();
    week = chineseFromNum(week);

    var hour = doubleNum(d.getHours());
    var min = doubleNum(d.getMinutes());
    var sec = doubleNum(d.getSeconds());

    return year + "年" + month + "月" + day + "日 星期" + week + " " + hour + ":" + min + ":" + sec;
}

function doubleNum(n){
    if(n < 10){
        return "0" + n;
    }else{
        return n;
    }
}

//把星期从数字转成中文
function chineseFromNum(num){
    var arr = ["日", "一", "二", "三", "四", "五", "六"];
    return arr[num];
}

// 封装一个可以随机任意范围整数的函数
function randomNum(min, max){
	var tmp = max - min + 1;
	return parseInt(Math.random() * tmp) + min
}
function bubbleSort(arr){
    for(var i = 0; i < arr.length - 1; i++){
        for(var j = 0; j < arr.length - (i + 1); j++){
            if(arr[j] > arr[j + 1]){
                var tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
}
function changeSort(arr){
    //选出的擂台
   for(var i = 0; i < arr.length - 1; i++){
       for(var j = i + 1; j < arr.length; j++){
           if(arr[i] > arr[j]){
               var tmp = arr[i];
               arr[i] = arr[j];
               arr[j] = tmp;
           }
       }
   }
}

function norepeat(arr){
    for(var i = 0; i < arr.length - 1; i++){
        for(var j = i + 1; j < arr.length; j++){
            //判断是否有相等的元素
            if(arr[i] === arr[j]){
                //将后面这个数删除掉
                arr.splice(j, 1);
                j--;
            }
        }
    }
}


/* 
    倒着遍历元素
*/

function norepeatDown(arr){
    for(var i = arr.length - 1; i > 0; i--){
        for(var j = i - 1; j >= 0; j--){
            if(arr[i] === arr[j]){
                arr.splice(j, 1);
            }
        }
    }
}

function testCode(n){
	var arr = [];
	for(var i = 0; i < n; i++){
		var tmp = parseInt(Math.random() * 123);
		if(tmp >= 0 && tmp <= 9){
			arr.push(tmp);
		}else if(tmp >= 65 && tmp <= 90 || tmp >= 97 && tmp <= 122){
			arr.push(String.fromCharCode(tmp));
		}else{
			//随机到别的不在范围内的数
			i--;
		}
	}
	return arr.join("");
}



function testCodeNum(n){
	//n生成n位的验证码
	var arr = [];
	for(var i = 0; i < n; i++){
		var tmp = parseInt(Math.random() * 10);
		arr.push(tmp);
	}
	return arr.join("");
}