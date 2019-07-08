'use strict';

// Создаётся объект promise
let promise = new Promise((resolve, reject) => {
  console.log("0: " + new Date().getSeconds()); 
  setTimeout(() => {
    console.log("1: " + new Date().getSeconds()); 
    reject(new Error("время вышло!"));
  }, 1000);

  setTimeout(() => {
    console.log("2: " + new Date().getSeconds()); 
    // переведёт промис в состояние fulfilled с результатом "result"
    resolve("result");
  }, 3000);

});

// promise.then навешивает обработчики на успешный результат или ошибку
promise
  .then(
    result => {
      // первая функция-обработчик - запустится при вызове resolve
      console.log("Fulfilled: " + result); // result - аргумент resolve
    },
    error => {
      // вторая функция - запустится при вызове reject
      console.log("Rejected: " + error); // error - аргумент reject
    }
  );

setTimeout(() => {
    promise.then(
    result => {
      // первая функция-обработчик - запустится при вызове resolve
      console.log("Fulfilled: " + result); // result - аргумент resolve
    },
    error => {
      // вторая функция - запустится при вызове reject
      console.log("Rejected: " + error); // error - аргумент reject
    }
  )}, 4000);

