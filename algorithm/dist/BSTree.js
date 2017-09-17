"use strict";
/**
 * Created by moyu on 2017/6/2.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BinNode_1 = require("./BinNode");
var BinTree_1 = require("./BinTree");
var BSTree = (function (_super) {
    __extends(BSTree, _super);
    function BSTree() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BSTree.prototype.toString = function () {
        return "BSTree::{[root] -> " + this.root + "}";
    };
    /**
     * 插入新值，迭代实现
     * @param val
     */
    BSTree.prototype.insert = function (val) {
        var x = this.root, y = null, z = new BinNode_1.default(val);
        // find BinNode position for insert.
        while (x) {
            y = x;
            x = z.value < x.value ? x.left : x.right;
        }
        z.parent = y;
        if (!y) {
            this.root = z;
        }
        else if (z.value < y.value) {
            y.left = z;
        }
        else {
            y.right = z;
        }
    };
    /**
     * 插入新结点（递归实现）
     * @param node {BinNode<T>} 根节点
     * @param val 插入值
     * @returns {BinNode<T>} 插入后，新的根节点
     * @private
     */
    BSTree.prototype._insert_recursive = function (node, val) {
        if (!node) {
            node = new BinNode_1.default(val);
        }
        else {
            if (node.value > val) {
                node.left = this._insert_recursive(node.left, val);
                node.left.parent = node;
            }
            else {
                node.right = this._insert_recursive(node.right, val);
                node.right.parent = node;
            }
        }
        return node;
    };
    /**
     * 寻找树中，值为 value 的节点
     * @param value
     * @returns {BinNode<T>} 寻找到则返回节点，否则返回空
     */
    BSTree.prototype.find = function (value) {
        return this._find(this.root, value);
    };
    /**
     * 寻找节点值为 value
     * @param x {BinNode<T>}
     * @param value {T} 待寻找的值
     * @returns {BinNode<T>} 寻找到则返回节点，否则返回空
     * @private
     */
    BSTree.prototype._find = function (x, value) {
        while (x && x.value != value) {
            if (value < x.value) {
                x = x.left;
            }
            else {
                x = x.right;
            }
        }
        return x;
    };
    BSTree.prototype._max = function (x) {
        while (x.right) {
            x = x.right;
        }
        return x;
    };
    BSTree.prototype._min = function (x) {
        while (x.left) {
            x = x.left;
        }
        return x;
    };
    Object.defineProperty(BSTree.prototype, "max", {
        get: function () {
            var x = this._max(this.root);
            return x ? x.value : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BSTree.prototype, "min", {
        get: function () {
            var x = this._min(this.root);
            return x ? x.value : null;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * x的后驱节点
     * @param x {BinNode<T>}
     * @returns {BinNode<T>} 后驱节点
     */
    BSTree.prototype.successor = function (x) {
        if (x.right) {
            return this._min(x.right);
        }
        var parent = x.parent;
        while (parent && x === parent.right) {
            x = parent;
            parent = parent.parent;
        }
        return parent;
    };
    BSTree.prototype._replace = function (placer, replacer) {
        if (!placer.parent) {
            this.root = replacer;
        }
        else if (placer === placer.parent.left) {
            placer.parent.left = replacer;
        }
        else {
            placer.parent.right = replacer;
        }
        if (replacer) {
            replacer.parent = placer.parent;
        }
    };
    /**
     * 删除某值为 val 的节点
     * @param val
     * @returns {BinNode<T>} 删除的节点
     */
    BSTree.prototype.delete = function (val) {
        var finded = this.find(val);
        if (finded) {
            this.deleteNode(finded);
        }
        return finded;
    };
    BSTree.prototype.deleteNode = function (del) {
        if (!del.left) {
            this._replace(del, del.right);
        }
        else if (!del.right) {
            this._replace(del, del.left);
        }
        else {
            var pre = del.left, next = del.right;
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
            }
            else {
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
    };
    return BSTree;
}(BinTree_1.default));
exports.default = BSTree;
var tree = new BSTree(15, 6, 15, 18, 3, 7, 17, 20, 2, 4, 13, 9);
// console.log(tree);
tree.inOrder(function (x) { return process.stdout.write(x + ","); });
console.log('');
tree.delete(15);
tree.delete(2);
tree.delete(15);
tree.delete(6);
tree.inOrder(function (x) { return process.stdout.write(x + ","); });
console.log(tree);
//# sourceMappingURL=BSTree.js.map