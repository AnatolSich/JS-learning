'use strict';

let user = {
  name: "Вася",
  age: 30,
  [Symbol.for("isAdmin")]: true
};

// в цикле for..in также не будет символа
console.log( Object.keys(user) ); // name, age

for (const key in user) {
    if (user.hasOwnProperty(key)) {
        const element = user[key];
        console.log(element);
    }
}
/*
Вася
30
*/


// доступ к свойству через глобальный символ — работает
console.log( user[Symbol.for("isAdmin")] ); //true

// доступ к свойству по имени — не работает
console.log( user.isAdmin); //undefined

let myIterableObj = { 
    [Symbol.iterator] : function () {
      yield 1; yield 2; yield 3;
    }
  };
  console.log([...myIterableObj]); // [ 1, 2, 3 ]