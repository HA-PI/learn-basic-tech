/**
 * Created by moyu on 2017/6/2.
 */
"use strict";
var BinNode_1 = require('./BinNode');
var BinTree = (function () {
    function BinTree() {
        var _this = this;
        var array = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            array[_i - 0] = arguments[_i];
        }
        array.forEach(function (ele) {
            _this.insert(ele);
        });
    }
    BinTree.prototype.toString = function () {
        return "BinTree::{[root] -> " + this.root + "}";
    };
    BinTree.prototype.inOrder = function (worker) {
        this._inOrder(this.root, worker);
    };
    BinTree.prototype.preOrder = function (worker) {
        this._preOrder(this.root, worker);
    };
    BinTree.prototype.postOrder = function (worker) {
        this._postOrder(this.root, worker);
    };
    BinTree.prototype._inOrder = function (node, worker) {
        if (node) {
            this._inOrder(node.left, worker);
            worker(node.value);
            this._inOrder(node.right, worker);
        }
    };
    BinTree.prototype._preOrder = function (node, worker) {
        if (node) {
            worker(node.value);
            this._preOrder(node.left, worker);
            this._preOrder(node.right, worker);
        }
    };
    BinTree.prototype._postOrder = function (node, worker) {
        if (node) {
            this._postOrder(node.left, worker);
            this._postOrder(node.right, worker);
            worker(node.value);
        }
    };
    BinTree.prototype.insert = function (val) {
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
    BinTree.prototype._insert_recursive = function (node, val) {
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
    BinTree.prototype.find = function (value) {
        return this._find(this.root, value);
    };
    BinTree.prototype._find = function (x, value) {
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
    BinTree.prototype._min = function (x) {
        while (x.right) {
            x = x.right;
        }
        return x;
    };
    BinTree.prototype._max = function (x) {
        while (x.left) {
            x = x.left;
        }
        return x;
    };
    Object.defineProperty(BinTree.prototype, "max", {
        get: function () {
            var x = this._max(this.root);
            return x ? x.value : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BinTree.prototype, "min", {
        get: function () {
            var x = this._min(this.root);
            return x ? x.value : null;
        },
        enumerable: true,
        configurable: true
    });
    BinTree.prototype.successor = function (x) {
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
    return BinTree;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BinTree;
var tree = new BinTree(15, 6, 15, 18, 3, 7, 17, 20, 2, 4, 13, 9);
// console.log(tree);
tree.inOrder(console.log);
console.log(tree.find(15));
console.log(tree.max);
console.log(tree.min);
//# sourceMappingURL=BinTree.js.map