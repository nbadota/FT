class Jspang {
    constructor(name, age, skill) {
        this.name = name;
        this.age = age;
        this.skill = skill;
    }
    interest() {
        console.log('找小姐姐');
    }
}
let jspangObj = new Jspang('技术胖', 18, 'web');
jspangObj.interest();
class JsShuai extends Jspang {
    constructor() {
        super(...arguments);
        this.xingxiang = '帅气';
    }
    interest() {
        //super.interest()
        console.log('建立电商平台');
    }
    zhuangQian() {
        console.log('一天赚了一个亿');
    }
}
let aa = new JsShuai('aaa', 5, 'ccc');
aa.interest();
