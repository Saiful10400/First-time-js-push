function findAddress(obj) {
  let street = "";
  let house = "";
  let society = "";

  if (obj.street == undefined) {
    street = "__";
  } else {
    street = obj.street;
  }

  if (obj.house == undefined) {
    house = "__";
  } else {
    house = obj.house;
  }

  if (obj.society == undefined) {
    society = "__";
  } else {
    society = obj.society;
  }

  return street + "," + house + "," + society;
}


