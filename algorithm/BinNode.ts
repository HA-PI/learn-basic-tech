/**
 * Created by moyu on 2017/6/2.
 */


export default class BinNode<T> {
    public value: T;
    public left: BinNode<T>;
    public right: BinNode<T>;
    public parent: BinNode<T>;
    constructor(val: T) {
        this.value = val;
    }
    toString() {
        return `BinNode::{[value] -> ${this.value}, [left] -> ${this.left}, [right] -> ${this.right}}`
    }
}