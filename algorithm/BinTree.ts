/**
 * Created by moyu on 2017/6/2.
 */

import BinNode from './BinNode';

export default class BinTree<T> {
    root: BinNode<T>;
    constructor(...array: Array<T>) {
        array.forEach(ele => {
            this.insert(ele);
        })
    }
    toString() {
        return `BinTree::{[root] -> ${this.root}}`
    }
    inOrder(worker: Function) {
        this._inOrder(this.root, worker);
    }
    preOrder(worker: Function) {
        this._preOrder(this.root, worker);
    }
    postOrder(worker: Function) {
        this._postOrder(this.root, worker);
    }
    private _inOrder(node: BinNode<T>, worker: Function) {
        if (node) {
            this._inOrder(node.left, worker);
            worker(node.value);
            this._inOrder(node.right, worker);
        }
    }
    private _preOrder(node: BinNode<T>, worker: Function) {
        if (node) {
            worker(node.value);
            this._preOrder(node.left, worker);
            this._preOrder(node.right, worker);
        }
    }
    private _postOrder(node: BinNode<T>, worker: Function) {
        if (node) {
            this._postOrder(node.left, worker);
            this._postOrder(node.right, worker);
            worker(node.value);
        }
    }
    insert(val: T) {
        let x: BinNode<T> = this.root, y = null, z = new BinNode<T>(val);
        // find BinNode position for insert.
        while (x) {
            y = x;
            x = z.value < x.value ? x.left : x.right;
        }
        z.parent = y;
        if (!y) {
            this.root = z;
        } else if (z.value < y.value) {
            y.left = z;
        } else {
            y.right = z;
        }
    }
    private _insert_recursive(node: BinNode<T>, val: T): BinNode<T> {
        if (!node) {
            node = new BinNode(val);
        } else {
            if (node.value > val) {
                node.left = this._insert_recursive(node.left, val);
                node.left.parent = node;
            } else {
                node.right = this._insert_recursive(node.right, val);
                node.right.parent = node;
            }
        }
        return node;
    }
    find(value: T): BinNode<T> {
        return this._find(this.root, value);
    }
    private _find(x: BinNode<T>, value: T): BinNode<T> {
        while (x && x.value != value) {
            if (value < x.value) {
                x = x.left;
            } else {
                x = x.right;
            }
        }
        return x;
    }
    private _min(x: BinNode<T>): BinNode<T> {
        while (x.right) {
            x = x.right;
        }
        return x;
    }
    private _max(x: BinNode<T>): BinNode<T> {
        while (x.left) {
            x = x.left;
        }
        return x;
    }
    get max(): T {
        let x: BinNode<T> = this._max(this.root);
        return x ? x.value : null;
    }
    get min(): T {
        let x: BinNode<T> = this._min(this.root);
        return x ? x.value : null;
    }

    successor(x: BinNode<T>): BinNode<T> {
        if (x.right) {
            return this._min(x.right);
        }
        let parent: BinNode<T> = x.parent;
        while (parent && x === parent.right) {
            x = parent;
            parent = parent.parent;
        }
        return parent;
    }
}

let tree = new BinTree<Number>(15, 6, 15, 18, 3, 7, 17, 20, 2, 4, 13, 9);
// console.log(tree);
tree.inOrder(console.log);

console.log(tree.find(15));
console.log(tree.max);
console.log(tree.min);