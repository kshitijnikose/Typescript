var Collage = /** @class */ (function () {
    function Collage(name) {
        this.name = name;
    }
    Collage.prototype.getName = function () {
        return this.name;
    };
    return Collage;
}());
var collage = new Collage("sumit");
console.log(collage.getName());
