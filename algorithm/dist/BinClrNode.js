"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by moyu on 2017/6/2.
 */
var BinNode_1 = require('./BinNode');
var BinClrNode = (function (_super) {
    __extends(BinClrNode, _super);
    function BinClrNode(val, color) {
        _super.call(this, val);
        this.color = color;
        this.color = color;
    }
    return BinClrNode;
}(BinNode_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BinClrNode;
//# sourceMappingURL=BinClrNode.js.map