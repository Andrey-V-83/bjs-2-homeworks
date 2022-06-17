'use strict';

function cachingDecoratorNew(func) {
  let cache = [];
  
  function wrapper(...args) {
    const hash = args.join(','); // получаем правильный хэш
    let idx = cache.findIndex((item)=> item.hash === hash ); // ищем элемент, хэш которого равен нашему хэшу
    if (idx !== -1 ) { // если элемент найден
      console.log("Из кэша: " + cache[idx].result); // индекс нам известен, по индексу в массиве лежит объект, получаем нужное значение
      return "Из кэша: " + cache[idx].result;
    }
  
    let result = func(...args); // в кэше результата нет - придётся считать
    cache.push({hash, result}); // добавляем элемент с правильной структурой
    if (cache.length > 5) { 
      cache.shift(); // если слишком много элементов в кэше, удаляем самый старый (первый) 
    }
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;  
  }

  return wrapper;
  }


function debounceDecoratorNew(func) {
  // Ваш код
}

function debounceDecorator2(func) {
  // Ваш код
}
