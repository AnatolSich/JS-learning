var array = ["Яблоко", "Апельсин", "Груша"];

array.forEach(function(item, i, array) {
  console.log( i + ": " + item + " (массив:" + array + ")" );
});



var arr = [1, -1, 2, -2, 3];

var positiveArr = arr.filter(function(number) { //[ 1, 2, 3 ]
  return number > 0;
});

var negativeArr = arr.filter((i) => i < 0) //[ -1, -2 ]

console.log( positiveArr );
console.log( negativeArr );




var names = ['HTML', 'CSS', 'JavaScript'];

var nameLengths = names.map(function(name) {
  return name.length;
});

var nameLengths2 = names.map(name => name.length);
//получили массив с длинами
console.log( nameLengths ); [ 4, 3, 10 ]
console.log( nameLengths2 ); [ 4, 3, 10 ]




var arr = [1, -1, 2, -2, 3];

function isPositive(number) {
  return number > 0;
}

console.log( arr.every(isPositive) ); // false, не все положительные
console.log( arr.some(isPositive) ); // true, есть хоть одно положительное




var arr2 = [1, 2, 3, 4, 5]

// для каждого элемента массива запустить функцию,
// промежуточный результат передавать первым аргументом далее
var result = arr2.reduceRight(function(sum, current) {
  return sum + current;
}, 0);  //initialValue можно не указывать

console.log( result ); // 15


console.log([4, 5, 1, 8, 2, 0].find(x => x > 5));
console.log([4, 5, 1, 8, 2, 0].findIndex(x => x > 5));


var ages = [3, 10, 18, 20];
function checkAdult(age) {
  return age >= 18;
}
console.log(ages.find(checkAdult));



var arr = ['Маша', 'Петя', 'Марина', 'Василий'];
var str = arr.join(';');
console.log( str ); // Маша;Петя;Марина;Василий


console.log( new Array(4).join("ля") ); // ляляля
/*Как видно, new Array(4) делает массив без элементов длины 4, который join объединяет в строку,
вставляя между его элементами строку "ля".
В результате, так как элементы пусты, получается повторение строки. */

console.log(Array(3 + 1).join("foo")); // foofoofoo
