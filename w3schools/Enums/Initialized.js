var Cardinal_Directions;
(function (Cardinal_Directions) {
    Cardinal_Directions[Cardinal_Directions["north"] = 1] = "north";
    Cardinal_Directions[Cardinal_Directions["east"] = 2] = "east";
    Cardinal_Directions[Cardinal_Directions["sout"] = 3] = "sout";
    Cardinal_Directions[Cardinal_Directions["west"] = 4] = "west";
})(Cardinal_Directions || (Cardinal_Directions = {}));
;
// logs 1 since we initialized the first value to something other than '0'
console.log(Cardinal_Directions.north);
// logs 4 as it continued on from the initial '1' value
console.log(Cardinal_Directions.west);
console.log(Cardinal_Directions.sout);
console.log(Cardinal_Directions.east);
Cardinal_Directions;
