var Triangle = /** @class */ (function () {
    function Triangle(base, height) {
        this.base = base;
        this.height = height;
    }
    Triangle.prototype.getArea = function () {
        return 0.5 * this.base * this.height;
    };
    return Triangle;
}());
var myTri = new Triangle(10, 20);
console.log(myTri.getArea()); // Output: 100
