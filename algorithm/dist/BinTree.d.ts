/**
 * Created by moyu on 2017/6/2.
 */
import BinNode from './BinNode';
export default class BinTree<T> {
    root: BinNode<T>;
    constructor(...array: Array<T>);
    toString(): string;
    inOrder(worker: Function): void;
    preOrder(worker: Function): void;
    postOrder(worker: Function): void;
    private _inOrder(node, worker);
    private _preOrder(node, worker);
    private _postOrder(node, worker);
    insert(val: T): void;
    private _insert_recursive(node, val);
    find(value: T): BinNode<T>;
    private _find(x, value);
    private _min(x);
    private _max(x);
    readonly max: T;
    readonly min: T;
    successor(x: BinNode<T>): BinNode<T>;
}
