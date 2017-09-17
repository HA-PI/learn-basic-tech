"use strict";
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
/**
 * Created by moyu on 2017/6/2.
 */
var BinNode_1 = require("./BinNode");
var BinClrNode = (function (_super) {
    __extends(BinClrNode, _super);
    function BinClrNode(val, color) {
        var _this = _super.call(this, val) || this;
        _this.color = color;
        _this.color = color;
        return _this;
    }
    return BinClrNode;
}(BinNode_1.default));
exports.default = BinClrNode;
//# sourceMappingURL=BinClrNode.js.map