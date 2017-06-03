/**
 * Created by moyu on 2017/6/2.
 */
import BinNode from './BinNode';
export declare const enum COLOR {
    RED = 0,
    BLACK = 1,
}
export default class BinClrNode<T> extends BinNode<T> {
    color: COLOR;
    constructor(val: T, color: COLOR);
}
