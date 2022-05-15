"use strict";

function solveEquation(a,b,c) {
  let arr = [];
  let d = b**2-4*a*c;
  let x1, x2;
  		
  if (d === 0) {
	x1 = (-b) / (2*a);
	arr.push(+x1);
  } else if (d > 0) {
	x1 = (-b + Math.sqrt(d))/(2*a);
	x2 = (-b - Math.sqrt(d))/(2*a);
	arr.push(+x1);
	arr.push(+x2);
  }	
  return arr; // array
};

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
	let monthAmount;
  let percent1 = Number(percent); 
  let contribution1 = Number(contribution);
  let amount1 = Number(amount);
  
  if (Number.isInteger(percent1) == false){
    return (`Параметр "Процентная ставка" содержит неправильное значение "${percent}"`);
  };
  if (Number.isInteger(contribution1) == false){
    return (`Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`);
  };
  if (Number.isInteger(amount1) == false){
    return (`Параметр "Общая стоимость" содержит неправильное значение "${amount}"`);
  };
  
  let P = percent1*0.01 / 12;
  let S = amount1 - contribution1;
  let newDate = new Date();
  let newDateMonth = newDate.getFullYear()*12 + newDate.getMonth();
  let dateMonth = date.getFullYear()*12 + date.getMonth(); 
  let n = dateMonth - newDateMonth;
 
  monthAmount = S * (P + (P / (Math.pow((1 + P), n) - 1)));
	totalAmount = monthAmount*n;
  
  if (totalAmount !== 0) {
	  totalAmount = Number(totalAmount.toFixed(2));
  }
  
	console.log("Ввод: " + percent + ", " + contribution + ", " + amount + ". Вывод: " + totalAmount);
  return totalAmount;
  
}

