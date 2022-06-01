"use strict";

function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

let student1 = new Student("Tony", "male", 37);  
let student2 = new Student("Buzz", "female", 35);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

student1.setSubject("Algebra");
student2.setSubject("Geometry");

let arrMarks = [];

Student.prototype.addMark = function (mark) {  
  
  
  if(this.marks === undefined){    
    this.marks = mark;
    
  } else {
    
    arrMarks.push(mark);
    this.marks = arrMarks;
  }
  
} 
   
student1.addMark(5);
student1.addMark(4); 
student1.addMark(5);


let arrMarks2 = [];
this.marks = arrMarks2;
Student.prototype.addMarks = function (mark1, mark2, ...rest) {
  arrMarks2.push(mark1, mark2, ...rest);         
  
}

student2.addMarks(2, 3, 2);

Student.prototype.getAverage = function () {
  return this.marks.reduce((a, b) => (a + b)) / this.marks.length;
}

console.log(student1.getAverage());
console.log(student2.getAverage());

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}

student2.exclude('low grades');

console.log(student1);
console.log(student2);
