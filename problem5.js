function canPay(changeArray, totalDue) {
  if (changeArray.length == 0) {
    return "Error! you have no money yet.";
  } else {
    let sum = 0;
    for (i = 0; i < changeArray.length; i++) {
      sum = sum + changeArray[i];
    }

    if (sum >= totalDue) {
      return true;
    } else {
      return false;
    }
  }
}
