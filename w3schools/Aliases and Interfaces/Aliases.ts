type BikeYear = number;
type BikeType = string;
type BikeModel = string;
type Bike = {
  year: BikeYear;
  type: BikeType;
  model: BikeModel;
};

const bikeYear: BikeYear = 2022;
const bikeType: BikeType = "Royal Enfield";
const bikeModel: BikeModel = "Continental GT 650 Standard";
const b: Bike = {
  year: bikeYear,
  type: bikeModel,
  model: bikeModel,
};

console.log(b);
