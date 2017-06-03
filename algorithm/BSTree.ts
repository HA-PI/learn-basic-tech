/**
 * Created by moyu on 2017/6/2.
 */


import BinNode from './BinNode';
import BinTree from './BinTree';

export default class BSTree<T> extends BinTree<T> {
    root: BinNode<T>;
    toString(): string {
        return `BSTree::{[root] -> ${this.root}}`
    }

    /**
     * 插入新值，迭代实现
     * @param val
     */
    insert(val: T): void {
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

    /**
     * 插入新结点（递归实现）
     * @param node {BinNode<T>} 根节点
     * @param val 插入值
     * @returns {BinNode<T>} 插入后，新的根节点
     * @private
     */
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

    /**
     * 寻找树中，值为 value 的节点
     * @param value
     * @returns {BinNode<T>} 寻找到则返回节点，否则返回空
     */
    find(value: T): BinNode<T> {
        return this._find(this.root, value);
    }

    /**
     * 寻找节点值为 value
     * @param x {BinNode<T>}
     * @param value {T} 待寻找的值
     * @returns {BinNode<T>} 寻找到则返回节点，否则返回空
     * @private
     */
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
    private _max(x: BinNode<T>): BinNode<T> {
        while (x.right) {
            x = x.right;
        }
        return x;
    }
    private _min(x: BinNode<T>): BinNode<T> {
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

    /**
     * x的后驱节点
     * @param x {BinNode<T>}
     * @returns {BinNode<T>} 后驱节点
     */
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

    private _replace(placer: BinNode<T>, replacer: BinNode<T>): void{
        if (!placer.parent) {
            this.root = replacer;
        } else if (placer === placer.parent.left) {
            placer.parent.left = replacer;
        } else {
            placer.parent.right = replacer;
        }
        if (replacer) {
            replacer.parent = placer.parent;
        }
    }

    /**
     * 删除某值为 val 的节点
     * @param val
     * @returns {BinNode<T>} 删除的节点
     */
    delete(val: T): BinNode<T> {
        let finded: BinNode<T> = this.find(val);
        if (finded) {
            this.deleteNode(finded);
        }
        return finded;
    }
    deleteNode(del: BinNode<T>): void {
        if (!del.left) {
            this._replace(del, del.right);
        } else if (!del.right) {
            this._replace(del, del.left);
        } else {
            let pre = del.left, next = del.right;
            while (next.left && pre.right) {
                if (next.left)
                    next = next.left;
                if (pre.right)
                    pre = pre.right;
            }
            if (!next.left) {
                if (next.parent !== del) {
                    this._replace(next, next.right);
                    next.right = del.right;
                    del.right.parent = next;
                }
                this._replace(del, next);
                next.left = del.left;
                next.left.parent = next;
            } else {
                if (pre.parent !== del) {
                    this._replace(pre, pre.left);
                    pre.left = del.left;
                    del.left.parent = pre;
                }
                this._replace(del, pre);
                pre.right = del.right;
                pre.right.parent = pre;
            }
        }
    }
}

let tree = new BSTree<Number>(15, 6, 15, 18, 3, 7, 17, 20, 2, 4, 13, 9);
// console.log(tree);
tree.inOrder(x => process.stdout.write(x+","));
console.log('');
tree.delete(15);
tree.delete(2);
tree.delete(15);
tree.delete(6);
tree.inOrder(x => process.stdout.write(x+","));
console.log(tree)