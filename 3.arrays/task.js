function compareArrays(arr1, arr2) {
  let result;

  if (arr1.length === arr2.length && arr1.every((v, i) => arr2[i] === v)) {
    result = true;
  } else {
    result = false;
  }

  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;

  resultArr = arr.filter((item) => item > 0).filter((item) => item % 3 === 0).map( (item) => item * 10);

  return resultArr; // array
}
