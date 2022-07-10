class  SegmentTree {
    // arr[]为原序列的信息从0开始，但在arr里是从1开始的
    // sum[]模拟线段树维护区间和
    // lazy[]为累加和懒惰标记
    // change[]为更新的值
    // update[]为更新慵懒标记
    private  maxN:number;
    private arr:number[];
    private sum:number[];
    private lazy:number[];
    private change:number[];
    private update:boolean[];

    constructor(origin:number[]) {
        this.maxN = origin.length + 1;
        this.arr = new Array(this.maxN).fill(0);
        for (let i = 1;i < this.maxN;i++) {
            this.arr[i] = origin[i - 1];
        }
        this.sum = new Array(this.maxN << 2).fill(0);
        this.lazy = new Array(this.maxN << 2).fill(0);
        this.change = new Array(this.maxN << 2).fill(0);
        this.update = new Array(this.maxN << 2).fill(0);
    }

    public build(l:number,r:number,rt:number):void {
        if(l === r) {
            this.sum[rt] = this.arr[l];
        }
        const mid = (l + r) >> 1;
        this.build(l,mid,rt << 1);
        this.build(mid+1,r,rt << 1 | 1);
        this.pushUp(rt);
    }

    // L~R, C 任务！
    // rt，l~r
    public add(L:number,R:number,C:number,l:number,r:number,rt:number):void {
        if(L <= l && r <= R) {
            this.sum[rt] += C*(r - l + 1);
            this.lazy[rt] += C;
            return;
        }
        const mid = (l + r) >> 1;
        this.pushDown(rt, mid - l + 1, r - mid);
        // L~R
        if (L <= mid) {
            this.add(L, R, C, l, mid, rt << 1);
        }
        if (R > mid) {
            this.add(L, R, C, mid + 1, r, rt << 1 | 1);
        }
        this.pushUp(rt);
    }

    public updateFunc(L:number,R:number,C:number,l:number,r:number,rt:number):void {
        if (L <= l && r <= R) {
            this.update[rt] = true;
            this.change[rt] = C;
            this.sum[rt] = C * (r - l + 1);
            this.lazy[rt] = 0;
            return;
        }
        const mid = (l + r) >> 1;
        this.pushDown(rt, mid - l + 1, r - mid);
        if (L <= mid) {
            this.updateFunc(L, R, C, l, mid, rt << 1);
        }
        if (R > mid) {
            this.updateFunc(L, R, C, mid + 1, r, rt << 1 | 1);
        }
        this.pushUp(rt);
    }

    public query(L:number,R:number,l:number,r:number,rt:number):number {
        if(L <= l && r <= R) {
            return this.sum[rt];
        }
        const mid = (l+r) >> 1;
        this.pushDown(rt,mid - l + 1,r - mid);
        let res = 0;
        if(L <= mid) {
            res += this.query(L,R,l,mid,rt << 1);
        }
        if(R > mid) {
            res += this.query(L,R,r,mid + 1,rt << 1 | 1);
        }
        return res;
    }

    private pushUp(rt:number):void {
        this.sum[rt] = this.sum[rt << 1] + this.sum[rt << 1 | 1];
    }

    // 之前的，所有懒增加，和懒更新，从父范围，发给左右两个子范围
    // 分发策略是什么
    // ln表示左子树元素结点个数，rn表示右子树结点个数
    private pushDown(rt:number,ln:number,rn:number):void {
        if (this.update[rt]) {
            this.update[rt << 1] = true;
            this.update[rt << 1 | 1] = true;
            this.change[rt << 1] = this.change[rt];
            this.change[rt << 1 | 1] = this.change[rt];
            this.lazy[rt << 1] = 0;
            this.lazy[rt << 1 | 1] = 0;
            this.sum[rt << 1] = this.change[rt] * ln;
            this.sum[rt << 1 | 1] = this.change[rt] * rn;
            this.update[rt] = false;
        }
        if (this.lazy[rt] !== 0) {
            this.lazy[rt << 1] += this.lazy[rt];
            this.sum[rt << 1] += this.lazy[rt] * ln;
            this.lazy[rt << 1 | 1] += this.lazy[rt];
            this.sum[rt << 1 | 1] += this.lazy[rt] * rn;
            this.lazy[rt] = 0;
        }
    }

}