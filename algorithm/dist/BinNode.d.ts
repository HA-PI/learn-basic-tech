/**
 * Created by moyu on 2017/6/2.
 */
export default class BinNode<T> {
    value: T;
    left: BinNode<T>;
    right: BinNode<T>;
    parent: BinNode<T>;
    constructor(val: T);
    toString(): string;
}
