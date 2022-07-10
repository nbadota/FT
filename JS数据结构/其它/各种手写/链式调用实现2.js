/* 实现一个get(0).add(1).sub(2).mul(3)*/

function Calculator() {
    this.taskList = [];
    this.base = null;
    this.get = function(num) {
        this.base = num;
        return this
    }

    this.add = function(num) {
        this.taskList.push(() => {
            this.base += num;
        })
        return this;
    }

    this.sub = function(num) {
        this.taskList.push(() => {
            this.base *= num;
        })
        return this;
    }

    this.mul =function(num) {
        this.taskList.push(() => {
            this.base -= num;
        })
        return this;
    }

    setTimeout(()=>{
        for (const func of this.taskList) {
            func();
        }
        console.log(this.base);
    },0)

}

let calculator = new Calculator();

calculator.get(0).add(1).sub(2).mul(3);

//console.log(res);