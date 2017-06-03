/**
 * Created by moyu on 2017/6/2.
 */
import BinNode from './BinNode';

export const enum COLOR {
    RED, BLACK
}

export default class BinClrNode<T> extends BinNode<T> {

    constructor(val: T, public color: COLOR) {
        super(val);
        this.color = color;
    }
}