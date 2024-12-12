var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Ellipse = /** @class */ (function () {
    function Ellipse(width, height) {
        this.width = width;
        this.height = height;
    }
    Ellipse.prototype.getArea = function () {
        return this.width * this.height;
    };
    Ellipse.prototype.toString = function () {
        return "Ellipse[width=".concat(this.width, ", height=").concat(this.height, "]");
    };
    return Ellipse;
}());
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(width) {
        return _super.call(this, width, width) || this;
    }
    Square.prototype.toString = function () {
        return "Square[width=".concat(this.width, "]");
    };
    return Square;
}(Ellipse));
var mySq = new Square(20);
console.log(mySq.toString());
