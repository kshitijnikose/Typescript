enum Cardinal_Directions {
    north = 1,
    east = 2,
    sout = 3,
    west = 4
  };
  
  // logs 1 since we initialized the first value to something other than '0'
  console.log(Cardinal_Directions.north);
  
  // logs 4 as it continued on from the initial '1' value
  console.log(Cardinal_Directions.west);

  console.log(Cardinal_Directions.sout);
  console.log(Cardinal_Directions.east);Cardinal_Directions