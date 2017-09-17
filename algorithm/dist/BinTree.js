"use strict";
/**
 * Created by moyu on 2017/6/2.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var BinTree = (function () {
    function BinTree() {
        var array = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            array[_i] = arguments[_i];
        }
        var _this = this;
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
    return BinTree;
}());
exports.default = BinTree;
//# sourceMappingURL=BinTree.js.map