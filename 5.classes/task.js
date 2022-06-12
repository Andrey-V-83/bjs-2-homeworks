'use strict';

class PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state = 100, type = null) {
	this.name = name; 
	this.releaseDate = releaseDate;
	this.pagesCount = pagesCount;
	this.state = state;
	this.type = type;
  }

  fix() {
    this.state = this.state * 1.5;	
  }

  set state(stateNew) {
    if (stateNew < 0) {
	    this._state = 0;  
    } else if (stateNew > 100) {
	      this._state = 100;
    } else {
	      this._state = stateNew;  
    }
  }

  get state() {
    return this._state;
  }

}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state = 100, type = "magazine") {
    super(name);     
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = state;
    this.type = type;
  }
}

class Book extends PrintEditionItem {
  constructor(author, name,  releaseDate, pagesCount, state = 100, type = "book") {
    super(name);
    this.author = author;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = state;
    this.type = type;
  }
}

class NovelBook extends Book {
  constructor(author, name,  releaseDate, pagesCount, state = 100, type = "novel") {
    super(name);
    this.author = author;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = state;
    this.type = type;
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state = 100, type = "fantastic") {
    super(name);
    this.author = author;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = state;
    this.type = type;
  }
}

class DetectiveBook extends Book {
  constructor(author, name,  releaseDate, pagesCount, state = 100, type = "detective") {
    super(name);
    this.author = author;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = state;
    this.type = type;
  }
}

class Library extends PrintEditionItem {
  constructor(name, author, releaseDate, pagesCount, state = 100, books = []) {
    super(name); 
    this.author = author;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = state;
    this.books = books;
  }
 
  
  addBook(book) {
    let state = this.state;
    
    if(state > 30) {
      this.books.push(book); 
    }  
    return this.books;
  }
  
  findBookBy(type, value) {
    let book;
    
    function getBook(type) {
      return book => book[type] == value;
    } 
    
    book = this.books.find(getBook(type));
    
    if (book !== undefined) {
      this.books.pop(book);
      return book;
    } else {
      return null;
    }
    
  }

  giveBookByName(bookName) {
    let book = this.books.find(book => book.name == bookName);

    if (book !== undefined) {
      this.books.pop(book);
      return book;
    } else {
      return null;
    }

  }
}

/*
const library = new Library("Библиотека имени Ленина");
printItem = new PrintEditionItem('Типовой школьный журнал', 2019, 102);
library.addBook(printItem);

const secondBook = library.findBookBy("releaseDate", 1895);
const firstBook = library.findBookBy("releaseDate", 2019);
console.log(library.name);
console.log(library.books);
console.log(firstBook.name);
const sherlock = new PrintEditionItem("Полное собрание повестей и рассказов  о Шерлоке Холмсе в одном томе", 2019, 1008);

console.log(sherlock.releaseDate); //2019
console.log(sherlock.state); //100
sherlock.fix();
console.log(sherlock.state); //100

const picknick = new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168);

console.log(picknick.author); //"Аркадий и Борис Стругацкие"
picknick.state = 10;
console.log(picknick.state); //10
picknick.fix();
console.log(picknick.state); //15




library.addBook(
  new DetectiveBook(
    "Артур Конан Дойл",
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008
  )
);
library.addBook(
  new FantasticBook(
    "Аркадий и Борис Стругацкие",
    "Пикник на обочине",
    1972,
    168 
  )
);
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(library.findBookBy("name", "Властелин колец")); //null
console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"
*/

class Student {
  constructor() {
    this.marks = [];
  }

  addMark(mark, subject) {
    if (this.marks[subject] === undefined) {
      this.marks[subject] = [];
    }

    this.marks[subject].push(mark);
  }

  getAverageBySubject(subject) {
    return this.marks[subject].reduce((a, b) => (a + b)) / this.marks[subject].length;
  }

  getAverage() {
    let val = Object.values(this.marks);

    for (let i = 0; i < val.length; i++){
      let sum1 = val[i].reduce((a, b) => (a + b));
      let sum2 = val[i+1].reduce((a, b) => (a + b));
      let sum = sum1 + sum2;
      let len = val[i].length + val[i+1].length;
      let average = sum / len;
      return average;
    }
    
  }
}