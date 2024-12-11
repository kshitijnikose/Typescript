var Directions;
(function (Directions) {
    Directions["North"] = "North";
    Directions["East"] = "East";
    Directions["South"] = "South";
    Directions["West"] = "West";
})(Directions || (Directions = {}));
// logs "North"
console.log(Directions.North);
// logs "West"
console.log(Directions.East);
console.log(Directions.South);
console.log(Directions.West);
