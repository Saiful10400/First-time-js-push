function sortMaker(arr) {
  const arrFinal = [];

  if (arr[0] < 0 || arr[1] < 0) {
    return "Invalid Input";
  } else if (arr[0] == arr[1]) {
    return "equal";
  } else if (arr[0] > 0 || arr[1] > 0) {
    if (arr[0] > arr[1]) {
      arrFinal.push(arr[0]);
      arrFinal.push(arr[1]);
    } else if (arr[1] > arr[0]) {
      arrFinal.push(arr[1]);
      arrFinal.push(arr[0]);
    }
  }

  return arrFinal;
}
