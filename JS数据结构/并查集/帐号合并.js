import {UnionFind} from "./index.js";

const users = [{a:1,b:2,c:3},{a:4,b:2,c:5},{a:6,b:7,c:5}];
console.log(mergeUser(users));

function mergeUser(users) {
    const unionFind = new UnionFind(users);
    const mapA = new Map();
    const mapB = new Map();
    const mapC = new Map();

    for (const user of users) {
        if(mapA.has(user.a)) {
            unionFind.union(user,mapA.get(user.a));
        }else {
            mapA.set(user.a,user);
        }
        if(mapB.has(user.b)) {
            unionFind.union(user,mapB.get(user.b));
        }else {
            mapB.set(user.b,user);
        }
        if(mapC.has(user.c)) {
            unionFind.union(user,mapC.get(user.c));
        }else {
            mapC.set(user.c,user);
        }
    }

    return unionFind.getUnionNum();
}