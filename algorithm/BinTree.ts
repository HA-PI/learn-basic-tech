/**
 * Created by moyu on 2017/6/2.
 */


import BinNode from './BinNode';

abstract class BinTree<T> {
    root: BinNode<T>;
    constructor(...array: Array<T>) {
        array.forEach(ele => {
            this.insert(ele);
        })
    }
    toString(): string {
        return `BinTree::{[root] -> ${this.root}}`
    }
    inOrder(worker: Function): void {
        this._inOrder(this.root, worker);
    }
    preOrder(worker: Function): void {
        this._preOrder(this.root, worker);
    }
    postOrder(worker: Function): void {
        this._postOrder(this.root, worker);
    }
    protected _inOrder(node: BinNode<T>, worker: Function): void {
        if (node) {
            this._inOrder(node.left, worker);
            worker(node.value);
            this._inOrder(node.right, worker);
        }
    }
    protected _preOrder(node: BinNode<T>, worker: Function): void {
        if (node) {
            worker(node.value);
            this._preOrder(node.left, worker);
            this._preOrder(node.right, worker);
        }
    }
    protected _postOrder(node: BinNode<T>, worker: Function): void {
        if (node) {
            this._postOrder(node.left, worker);
            this._postOrder(node.right, worker);
            worker(node.value);
        }
    }
    abstract insert(val: T): void;
    abstract find(value: T): BinNode<T>;
    abstract delete(val: T): BinNode<T>;
    abstract deleteNode(del: BinNode<T>): void;
}

export default BinTree;