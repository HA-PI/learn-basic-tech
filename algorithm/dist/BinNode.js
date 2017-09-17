"use strict";
/**
 * Created by moyu on 2017/6/2.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var BinNode = (function () {
    function BinNode(val) {
        this.value = val;
    }
    BinNode.prototype.toString = function () {
        return "BinNode::{[value] -> " + this.value + ", [left] -> " + this.left + ", [right] -> " + this.right + "}";
    };
    return BinNode;
}());
exports.default = BinNode;
//# sourceMappingURL=BinNode.js.map