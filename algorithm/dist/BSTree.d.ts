/**
 * Created by moyu on 2017/6/2.
 */
import BinNode from './BinNode';
import BinTree from './BinTree';
export default class BSTree<T> extends BinTree<T> {
    root: BinNode<T>;
    toString(): string;
    /**
     * 插入新值，迭代实现
     * @param val
     */
    insert(val: T): void;
    /**
     * 插入新结点（递归实现）
     * @param node {BinNode<T>} 根节点
     * @param val 插入值
     * @returns {BinNode<T>} 插入后，新的根节点
     * @private
     */
    private _insert_recursive(node, val);
    /**
     * 寻找树中，值为 value 的节点
     * @param value
     * @returns {BinNode<T>} 寻找到则返回节点，否则返回空
     */
    find(value: T): BinNode<T>;
    /**
     * 寻找节点值为 value
     * @param x {BinNode<T>}
     * @param value {T} 待寻找的值
     * @returns {BinNode<T>} 寻找到则返回节点，否则返回空
     * @private
     */
    private _find(x, value);
    private _max(x);
    private _min(x);
    readonly max: T;
    readonly min: T;
    /**
     * x的后驱节点
     * @param x {BinNode<T>}
     * @returns {BinNode<T>} 后驱节点
     */
    successor(x: BinNode<T>): BinNode<T>;
    private _replace(placer, replacer);
    /**
     * 删除某值为 val 的节点
     * @param val
     * @returns {BinNode<T>} 删除的节点
     */
    delete(val: T): BinNode<T>;
    deleteNode(del: BinNode<T>): void;
}
