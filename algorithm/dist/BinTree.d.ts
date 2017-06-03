/**
 * Created by moyu on 2017/6/2.
 */
import BinNode from './BinNode';
declare abstract class BinTree<T> {
    root: BinNode<T>;
    constructor(...array: Array<T>);
    toString(): string;
    inOrder(worker: Function): void;
    preOrder(worker: Function): void;
    postOrder(worker: Function): void;
    protected _inOrder(node: BinNode<T>, worker: Function): void;
    protected _preOrder(node: BinNode<T>, worker: Function): void;
    protected _postOrder(node: BinNode<T>, worker: Function): void;
    abstract insert(val: T): void;
    abstract find(value: T): BinNode<T>;
    abstract delete(val: T): BinNode<T>;
    abstract deleteNode(del: BinNode<T>): void;
}
export default BinTree;
