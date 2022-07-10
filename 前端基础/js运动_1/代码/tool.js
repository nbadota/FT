function addEvent(node, eventType, funcName){
	if(node.addEventListener){
		node.addEventListener(eventType, funcName, false);
	}else{
		node.attachEvent("on" + eventType, funcName);
	}
}

function removeEvent(node, eventType, funcName){
	if(node.removeEventListener){
		node.removeEventListener(eventType, funcName);
	}else{
		node.detachEvent("on" + eventType, funcName);
	}
}

function drag(node){
	node.onmousedown = function(ev){
		var e = ev || window.event;
		//记录相对位置
		var offsetX = e.clientX - node.offsetLeft;
		var offsetY = e.clientY - node.offsetTop;
		//添加鼠标移动事件
		document.onmousemove = function(ev){
			var e = ev || window.event;
			node.style.left = e.clientX - offsetX + 'px';
			node.style.top = e.clientY - offsetY + 'px';
		}

	}
	//鼠标抬起取消拖拽
	document.onmouseup = function(){
		document.onmousemove = null;
	}
}

function dragLimit(node){
	node.onmousedown = function(ev){
		var e = ev || window.event;
		//记录相对位置
		var offsetX = e.clientX - node.offsetLeft;
		var offsetY = e.clientY - node.offsetTop;
		//添加鼠标移动事件
		document.onmousemove = function(ev){
			var e = ev || window.event;
			var l = e.clientX - offsetX;
			var t = e.clientY - offsetY;

			if(l <= 0){
				l = 0;
			}
			var windowWidth = document.documentElement.clientWidth || document.body.clientWidth;
			if(l >= windowWidth - node.offsetWidth){
				l = windowWidth - node.offsetWidth;
			}

			var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
			if(t <= 0){
				t = 0;
			}
			if(t >= windowHeight - node.offsetHeight){
				t = windowHeight - node.offsetHeight;
			}

			node.style.left = l + 'px';
			node.style.top = t + 'px';
		}

	}
	//鼠标抬起取消拖拽
	document.onmouseup = function(){
		document.onmousemove = null;
	}
}

/*
	跨浏览器阻止事件冒泡的写法
 */
function stopBubble(e){
	if(e.stopPropagation){
		e.stopPropagation();
	}else{
		e.cancelBubble = true;
	}
}

//忽略空白字符的文本节点。
function removeSpaceNode(node){
	var nodes = node.childNodes;
	for(var i = 0; i < nodes.length; i++){
		if(nodes[i].nodeType == 3 && /^\s+$/.test(nodes[i].
nodeValue)){
			//如果符合条件，删除这个节点
			node.removeChild(nodes[i]);
		}
	}
}
//封装一个获取当前有效样式的跨浏览器兼容的方法
function getStyle(node, cssStyle){
	if(node.currentStyle){
		return node.currentStyle[cssStyle];
	}else{
		return getComputedStyle(node)[cssStyle];
	}
}


function randomColor(){
	var str = "rgba(" + parseInt(Math.random() * 256) + "," + parseInt(Math.random() * 256) + "," + parseInt(Math.random() * 256) + ",1)";
	return str;
}

/*
	node 从哪个节点开始去找
	classStr 获取class的名字

 */
function elementsByClassName(node, classStr){
	var result = [];
	var nodes = node.getElementsByTagName("*");
	for(var i = 0; i < nodes.length; i++){
		if(nodes[i].className == classStr){
			result.push(nodes[i]);
		}
	}
	return result;
}
function showTime(){
	var d = new Date();
	var year = d.getFullYear();
	var month = d.getMonth() + 1;
	var date = d.getDate();

	var week = d.getDay();

	week = chineseFormNum(week);
	/*
		0~6  星期0 周日
	 */

	var hour = doubleNum(d.getHours());
	var min = doubleNum(d.getMinutes());
	var sec = doubleNum(d.getSeconds());


	//字符串拼接
	var str = year + "年" + month + "月" + date + "日 星期" + week + " " + hour + ":" + min + ":" + sec;

	return str; 
}
//传入数字，返回对应的中文
function chineseFormNum(num){
	var arr = ["日", "一", "二", "三", "四", "五", "六"];
	return arr[num];
}

//将单位数，变成双位数
function doubleNum(num){
	if(num < 10){
		return "0" + num;
	}else{
		return num;
	}
}

function testCode(n){
	var arr = [];
	for(var i = 0; i < n; i++){
		var tmp = parseInt(Math.random() * 123);
		if(tmp >= 0 && tmp <= 9){
			arr.push(tmp);
		}else if(tmp >= 97 && tmp <= 122 || tmp >= 65 && tmp <= 90){
			arr.push(String.fromCharCode(tmp));
		}else{
			//没有用的数，也会占用我的循环次数
			i--;
		}
	}

	return arr.join("");
}

function testCodeNum(n){
	var arr = [];
	for(var i = 0; i < n; i++){
		var tmp = parseInt(Math.random() * 10);
		arr.push(tmp);
	}
	return arr.join("");
}


function bubbleSort(arr){
	//通过冒泡排序从小到大排序
	for(var i = 0; i < arr.length - 1; i++){
		//每一轮比较的次数
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
	//当前的擂台
	for(var i = 0; i < arr.length - 1; i++){
		//被比较的数
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
			alert(i + ", " + j);
			if(arr[i] == arr[j]){
				arr.splice(j, 1);
				j--;
			}
		}
	}
}

function norepeat2(arr){
	for(var i = arr.length - 1; i > 0; i--){
		for(var j = i - 1; j >= 0; j--){
			if(arr[i] == arr[j]){
				arr.splice(j, 1);
			}
		}
	}
}