function Chain() {
    this.taskList = [];
    this.eat = function () {
        this.taskList.push(()=>{
            console.log("eat");
        });
        return this;
    };

    this.work = function () {
        this.taskList.push(()=>{
            console.log("work");
        });
        return this;
    };

    this.sleep = function (time) {
        this.taskList.push(
            () =>
                new Promise(res => {
                    setTimeout(res, time*1000);
                })
        );
        return this;
    };

    //自执行函数：setTimeout里加上执行函数（还是鹅厂那三种形式）
    //这里我只写了第一种
    setTimeout(async ()=>{//注意：这里必须为箭头函数，不然下面的this会变就取不到正确的taskList
        for(let v of this.taskList){
            await v();
        }
    }, 0);
    //return this; //实现函数不是类，类会自动return，函数需要手动
}

let obj = new Chain();
obj.eat().sleep(5).work();