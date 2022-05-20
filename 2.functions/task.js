// Задание 1
function getArrayParams(arr) {
  let min = arr[0];
  let max = -Infinity;
  let sum = 0;
  let avg;

  for (let i = 0; i < arr.length; i++) { 
    sum += arr[i];
    avg = sum / arr.length;

    if (arr[i] < min) {
      min = arr[i];
     
    } else if (arr[i] > max) {
      max = arr[i];
    }
    avg = Number(avg.toFixed(2));
  }

  return { min: min, max: max, avg: avg };
}
  
// Задание 2
function worker(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) { 
    sum += arr[i];
  }

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = 0;
  
  for (let i = 0; i < arrOfArr.length; i++) { 
    let sum = func(arrOfArr[i]);

    if (sum > max) {
      max = sum;
    }

  }
  
  return max;
}

// Задание 3
function worker2(arr) {
  let min = arr[0];
  let max = -Infinity;
  let diff;
  
  for (let i = 0; i < arr.length; i++) { 
    diff = max - min;
    
    if (arr[i] < min) {
      min = arr[i];     
    } else if (arr[i] > max) {
      max = arr[i];
    }
    
    diff = Math.abs(max - min);
  }
  
  return diff;
}
