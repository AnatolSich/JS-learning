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


var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sln = txt.length;
console.log(sln); //26
var str = "My\n"; // 3 символа. Третий - перевод строки
console.log( str.length ); // 3


var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate");
console.log(pos); //7
var str = "Widget with id";
console.log( str.indexOf("Widget") ); // 0, т.к. "Widget" найден прямо в начале str
console.log( str.indexOf("id") ); // 1, т.к. "id" найден, начиная с позиции 1
console.log( str.indexOf("widget") ); // -1, не найдено, так как поиск учитывает регистр
console.log(str.indexOf("id", 2)) // 12, поиск начат с позиции 2
console.log( ~2 ); // -(2+1) = -3
console.log( ~1 ); // -(1+1) = -2
console.log( ~0 ); // -(0+1) = -1
console.log( ~-1 ); // -(-1+1) = 0
//~n – ноль только в случае, когда n == -1
/*проверка if ( ~str.indexOf(...) ) означает, что результат indexOf отличен от -1, 
т.е. совпадение есть. */
var str = "Widget";
if (~str.indexOf("get")) {
  console.log( 'совпадение есть!' );
}
var str = "Please locate where 'locate' occurs!";
var pos = str.lastIndexOf("locate");
console.log(pos);  //21
var str = "Please locate where 'locate' occurs!";
var pos = str.lastIndexOf("locate", 15);
console.log(pos);   //7


var str = "Ослик Иа-Иа посмотрел на виадук"; // ищем в этой строке
var target = "Иа"; // цель поиска

var pos = 0;
while (true) {
  var foundPos = str.indexOf(target, pos);
  if (foundPos == -1) break;
  console.log( foundPos ); // нашли на этой позиции
  pos = foundPos + 1; // продолжить поиск со следующей
}
/*
6
9
*/

var str = "Ослик Иа-Иа посмотрел на виадук"; // ищем в этой строке
var target = "Иа"; // цель поиска
var pos = -1;
while ((pos = str.indexOf(target, pos + 1)) != -1) {
  console.log( pos );
}
/*
6
9
*/

var str = "Please locate where 'locate' occurs!";
var pos = str.search("locate");
console.log(pos);  //7

var str = "Apple, Banana, Kiwi";
var res = str.slice(7, 13);
console.log(res);  //Banana

var str = "Apple, Banana, Kiwi";
var res = str.slice(-12, -6);
console.log(res);  //Banana

var str = "stringify";
console.log(str.slice(2)); // ringify, символы с позиции 2 до конца
var res = str.slice(-2);
console.log(res);  //fy


var str = "stringify";
console.log(str.substring(0,1)); // "s", символы с позиции 0 по 1 не включая 1.

var str = "stringify";
str = str.substr(2,4); // ring, со 2-й позиции 4 символа
console.log(str)



str = "Please visit Microsoft and Microsoft!";
var n = str.replace("Microsoft", "W3Schools");
console.log(n); //Please visit W3Schools and Microsoft!

str = "Please visit Microsoft!";
var n = str.replace("MICROSOFT", "W3Schools");
console.log(n); //Please visit Microsoft!
str = "Please visit Microsoft!";
var n = str.replace(/MICROSOFT/i, "W3Schools");
console.log(n); //Please visit W3Schools!

str = "Please visit Microsoft and Microsoft!";
var n = str.replace(/Microsoft/g, "W3Schools");
console.log(n); //Please visit W3Schools and W3Schools!

var str = "       Hello World!        ";
console.log(str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ''));  //Hello World!



var text1 = "Hello World!";       // String
var text2 = text1.toUpperCase();  // text2 is text1 converted to upper
console.log(text2); //HELLO WORLD!
console.log("Интерфейс" [0].toLowerCase()); // 'и' 

var text = "Hello" + " " + "World!";
var text = "Hello".concat(" ", "World!");


var str = "jQuery";
console.log( str.charAt(0) ); // "j"
var str = "Я - современный браузер!";
console.log( str[0] ); // "Я"
console.log ( "".charAt(0) ); // пустая строка
console.log ( "" [0] ); // undefined


var str = "HELLO WORLD";
str.charCodeAt(0);         // returns 72
alert( String.fromCharCode(1072) ); // 'а'



"Вася" > "Ваня" // true, т.к. начальные символы совпадают, а потом 'с' > 'н'
"Дома" > "До" // true, т.к. начало совпадает, но в 1-й строке больше символов
alert( "2" > "14" ); // true, так как это строки, и для первых символов верно "2" > "1"
/*Если хотя бы один аргумент – не строка, то другой будет преобразован к числу*/
alert( 2 > "14" ); // false
console.log('8' == 8); //true



var str = "Ёлки";
console.log( str.localeCompare("Яблони") ); // -1



var txt = "a,b,c,d,e";   // String
txt.split(",");          // Split on commas
txt.split(" ");          // Split on spaces
txt.split("|");          // Split on pipe
var txt = "Hello";       // String
txt.split("");           // Split in characters



console.log("foo".repeat(3)); // foofoofoo



var str = "Hello world, welcome to the universe.";
var n = str.includes("world");
console.log(n);  //true
var str = "Hello world, welcome to the universe.";
var n = str.includes("world", 12);
console.log(n);  //false



var str = "Hello world, welcome to the universe.";
var n = str.startsWith("world", 6);
console.log(n);  //true
var str = "Hello world, welcome to the universe.";
var n = str.endsWith("world", 11);
console.log(n);  //true



