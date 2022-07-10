/*
findInTree(list: TreeData[], id: number): TreeData
type TreeData = {
    id: number
    name: string
    children: TreeData[]
}

*/
const list = [
    {id: 1, name: 'a', children: [
        {id: 2, name: 'a1', children: null},
        {id: 3, name: 'a2', children: [
            {id: 4, name: 'a22', children: null}
        ]}
    ]},
    {id: 5, name: 'b', children: null}
]
//取出id对应的对象，也就是遍历，可以深度也可以广度


function find(list, id) {
    const func = (list, id) => {
        for(const item of list) {
            if(item.id === id) {
                return item;
            }
            if(item.children) {
                return func(item.children,id);
            }
        }
    }

    const res = func(list,id);
    return res;
}

console.log(find(list,7));

