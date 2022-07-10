function Letter(str) {
    if(str=="begin")
        console.log('(beginsym,begin)');
    else if(str=="call")
        console.log('(callsym,call)');
    else if(str=="const")
        console.log('(constsym,const)');
    else if(str=="do")
        console.log('(dosym,do)');
    else if(str=="end")
        console.log('(endsym,end)');
    else if(str=="if")
        console.log('(ifsym,if)');
    else if(str=="odd")
        console.log('(oddsym,odd)');
    else if(str=="procedure")
        console.log('(proceduresym,procedure)');
    else if(str=="read")
        console.log('(readsym,read)');
    else if(str=="then")
        console.log('(thensym,then)');
    else if(str=="while")
        console.log('whilesym,while');
    else if(str=="var")
        console.log('(varsym,var)');
    else if(str=="write")
        console.log('(writesym,write)');
    else
        console.log(`(ident,${str})`);
}

let str1 = `var a;`;

function fuc(str1)
{
    //开始处理读入的代码
    let length_str=str1.length;
    let exp1 = /[0-9]/;
    let exp2 = /[a-zA-Z]/;
    for(let i=0;i<length_str;i++){
    if(str1[i]==' ' || str1[i]=='\n' || str1[i]=='\t')//当遇到空格或换行时，跳过继续执行
        continue;
    /*-------------------识别常数-------------------*/
    else if(exp1.test(str1[i])){//常数
        let digit = '';
        while(exp1.test(str1[i])){
            digit +=str1[i];
            i++;
        }
        i--;
        console.log(`(ident,${digit})`);
    }
        /*-------------------end---------------------------*/
    /*-------------------识别基本字/标识符--------------------*/
    else if(exp2.test(str1[i])){
        //字母
        let lett = '';
        while(exp1.test(str1[i])||exp2.test(str1[i])){
            lett +=str1[i];
            i++;
        }
        i--;
        Letter(lett);
    }
        /*-------------------end---------------------------*/
    //odd运算符按基本字处理
    else{
        switch (str1[i]) {
            case '+':
                console.log('(plus,+)');
                break;
            case '-':
                console.log('(minus,-)');
                break;
            case '*':
                console.log('(times,*)');
                break;
            case '/':
                console.log('(slash,/)');
                break;
            case '=':
                console.log('(eql,=)');
                break;
            case '#':
                console.log('(neq,#)');
                break;
            case '<':
                i++;
                if(str1[i]=='>'){
                    console.log('(neq,<>)');
                }
                else if(str1[i]=='='){
                    console.log('(leq,<=)');
                }
                else{
                    i--;
                    console.log('(lss,<)');
                }
                break;
            case '>':
                i++;
                if(str1[i]=='='){
                    console.log('(geq,>=)');
                }
                else{
                    i--;
                    console.log('(gtr,>)');
                }
                break;
            case ':':
                i++;
                if(str1[i]=='='){
                    console.log('(becomes,:=)');
                }
                else{
                    //错误处理
                }
                break;
            case '(':
                console.log('(lparen,()');
                break;
            case ')':
                console.log('(rparen,))');
                break;
            case ',':
                console.log('(comma,,)');
                break;
            case ';':
                console.log('(semicolon,;)');
                break;
            case '.':
                console.log('(period,.)');
                break;
            default:
                //错误处理
                break;
        }
    }
}
}

fuc(str1);

