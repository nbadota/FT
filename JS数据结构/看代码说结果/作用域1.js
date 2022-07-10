const a=1
const obj={
    a:2,
    show1:function(){
        console.log(this.a)
    },
    show2:()=>{
        console.log(this.a)
    },
}

obj.show1()// 2
obj.show2()// undefined

const func1=obj.show1
const func2=obj.show2
func1()// undefined
func2()// undefined