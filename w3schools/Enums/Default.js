var Directions;
(function (Directions) {
    Directions[Directions["North_"] = 0] = "North_";
    Directions[Directions["East_"] = 1] = "East_";
    Directions[Directions["South_"] = 2] = "South_";
    Directions[Directions["West_"] = 3] = "West_";
})(Directions || (Directions = {}));
var currentDirection = Directions.North_;
console.log(currentDirection);
