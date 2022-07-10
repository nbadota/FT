class SegmentTree {
    constructor(origin) {
        this.maxN = origin.length + 1;
        this.arr = new Array(this.maxN).fill(0);
        for (let i = 1; i < this.maxN; i++) {
            this.arr[i] = origin[i - 1];
        }
        this.sum = new Array(this.maxN << 2).fill(0);
        this.lazy = new Array(this.maxN << 2).fill(0);
        this.change = new Array(this.maxN << 2).fill(0);
        this.update = new Array(this.maxN << 2).fill(0);
    }
    build(l, r, rt) {
        if (l === r) {
            this.sum[rt] = this.arr[l];
        }
        const mid = (l + r) >> 1;
        this.build(l, mid, rt << 1);
        this.build(mid + 1, r, rt << 1 | 1);
        this.pushUp(rt);
    }
    // L~R, C 任务！
    // rt，l~r
    add(L, R, C, l, r, rt) {
        if (L <= l && r <= R) {
            this.sum[rt] += C * (r - l + 1);
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
    updateFunc(L, R, C, l, r, rt) {
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
    query(L, R, l, r, rt) {
        if (L <= l && r <= R) {
            return this.sum[rt];
        }
        const mid = (l + r) >> 1;
        this.pushDown(rt, mid - l + 1, r - mid);
        let res = 0;
        if (L <= mid) {
            res += this.query(L, R, l, mid, rt << 1);
        }
        if (R > mid) {
            res += this.query(L, R, r, mid + 1, rt << 1 | 1);
        }
        return res;
    }
    pushUp(rt) {
        this.sum[rt] = this.sum[rt << 1] + this.sum[rt << 1 | 1];
    }
    // 之前的，所有懒增加，和懒更新，从父范围，发给左右两个子范围
    // 分发策略是什么
    // ln表示左子树元素结点个数，rn表示右子树结点个数
    pushDown(rt, ln, rn) {
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
