var text = "моя строка";

var anotherText = 'еще строка';

let str = `обратные кавычки`;

console.log(`моя
  многострочная
  строка`);


  'use strict';
let apples = 2;
let oranges = 3;
console.log(`${apples} + ${oranges} = ${apples + oranges}`); // 2 + 3 = 5


console.log("Bytes = " + '𝒳'.length ); // Bytes = 2, MATHEMATICAL SCRIPT CAPITAL X
console.log("Bytes = " + '😂'.length ); // Bytes = 2, FACE WITH TEARS OF JOY

// как будто в строке два разных символа (на самом деле один)
console.log( '𝒳'.charCodeAt(0) + ' ' + '𝒳'.charCodeAt(1) ); // 55349 56499
// один символ с "длинным" (более 2 байт) unicode-кодом
console.log( '𝒳'.codePointAt(0) ); // 119987


// Правильно
console.log( String.fromCodePoint(119987) ); // 𝒳
// Неверно!
console.log( String.fromCharCode(119987) ); // 풳

console.log( "\u2033" ); // ″, символ двойного штриха
console.log( "\u20331" ); // Два символа: символ двойного штриха ″, а затем 1
console.log( "\u{20331}" ); // 𠌱, китайский иероглиф с этим кодом

var str = "I'm a JavaScript \"programmer\" ";
console.log( str ); // I'm a JavaScript "programmer"
var str = ' символ \\ ';
console.log( str ); // символ \
console.log( "\a" ); // a
// идентично alert(  "a"  );


'use strict';

function f(strings, ...values) {
    console.log(JSON.stringify(strings));     // ["Sum of "," + "," =\n ","!"]
    console.log(JSON.stringify(strings.raw)); // ["Sum of "," + "," =\\n ","!"]
    console.log(JSON.stringify(values));      // [3,5,8]
}
let apples = 3;
let oranges = 5;
//          |  s[0] | v[0] |s[1]| v[1]  |s[2]  |      v[2]      |s[3]
let str = f`Sum of ${apples} + ${oranges} =\n ${apples + oranges}!`;

'use strict';

// str восстанавливает строку
function str(strings, ...values) {
  let str = "";
  for(let i=0; i<values.length; i++) {
    str += strings[i];
    str += values[i];
  }

  // последний кусок строки
  str += strings[strings.length-1];
  return str;
}

let apples = 3;
let oranges = 5;

// Sum of 3 + 5 = 8!
console.log( str`Sum of ${apples} + ${oranges} = ${apples + oranges}!`);


'use strict';

let messages = {
  "Hello, {0}!": "Привет, {0}!"
};

function i18n(strings, ...values) {
  // По форме строки получим шаблон для поиска в messages
  // На месте каждого из значений будет его номер: {0}, {1}, …
  let pattern = "";
  for(let i=0; i<values.length; i++) {
    pattern += strings[i] + '{' + i + '}';
  }
  pattern += strings[strings.length-1];
  // Теперь pattern = "Hello, {0}!"

  let translated = messages[pattern]; // "Привет, {0}!"

  // Заменит в "Привет, {0}" цифры вида {num} на values[num]
  return translated.replace(/\{(\d)\}/g, (s, num) => values[num]);
}

// Пример использования
let name = "Вася";

// Перевести строку
console.log( i18n`Hello, ${name}!` ); // Привет, Вася!




console.log("foo".repeat(3)); // foofoofoo