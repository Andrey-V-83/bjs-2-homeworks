'use strict';

function parseCount(str) {
  let count = Number.parseInt(str);

  if (isNaN(count) === true) {

    const divideError = new Error("Невалидное значение");
    throw divideError;
      
  } else {
    return count;
  }
       
}

function validateCount(str) {

  try {
    return parseCount(str);
  } catch (error) {
    return error;
  }
    
}

class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;

    if ((a+b) < c) {
      throw new Error('Треугольник с такими сторонами не существует');
    } 

    if ((a+c) < b) {
        throw new Error('Треугольник с такими сторонами не существует');
    } 

    if ((b+c) < a) {
        throw new Error('Треугольник с такими сторонами не существует');
    } 

  }

  getPerimeter() {
    let perimeter = this.a + this.b + this.c;
    return perimeter;
  }

  getArea() {
    let p = (this.a + this.b + this.c)/2;
    let area = Math.sqrt(p*(p - this.a)*(p - this.b)*(p - this.c));
    return Number(area.toFixed(3));
  }

}

const errorText = 'Ошибка! Треугольник не существует';

const errorTriangle = {
  
    getPerimeter() {
        return errorText;
      },
  
    getArea() {
    return errorText;
  },
  
  
};

const getTriangle = (a, b, c) => {
  try {
    return new Triangle(a, b, c);
  } catch (err) {
    return errorTriangle;
  }
};
//console.log(parseCount('123'));