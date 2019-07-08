function* generateSequence() {
    yield 1;
    yield 2;
    yield 3;
    return 4;
  }
  
  let generator = generateSequence();
  
  let one = generator.next();
  
  console.log(JSON.stringify(one)); // {value: 1, done: false}

  let two = generator.next();

  console.log(JSON.stringify(two)); // {value: 2, done: false}

  let three = generator.next();

  console.log(JSON.stringify(three)); // {value: 3, done: true}

  let four = generator.next();

  console.log(JSON.stringify(four)); // {value: 3, done: true}
  

  function* generateSequence(start, end) {

    for (let i = start; i <= end; i++) {
      yield i;
    }
  
  }
  
  // Используем оператор … для преобразования итерируемого объекта в массив
  let sequence = [...generateSequence(2,5)];
  
  console.log(sequence); // 2, 3, 4, 5


  function* generateSequence(start, end) {
    for (let i = start; i <= end; i++) yield i;
  }
  
  function* generateAlphaNum() {
    //for (let i = 48; i <= 57; i++) yield i;
  yield* generateSequence(48, 57);

    // for (let i = 65; i <= 90; i++) yield i;
  yield* generateSequence(65, 90);

   // for (let i = 97; i <= 122; i++) yield i;
  yield* generateSequence(97, 122);
  }
  
  let str = '';
  
  for(let code of generateAlphaNum()) {
    str += String.fromCharCode(code);
  }
  
  console.log(str); // 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz

  function* gen() {
    // Передать вопрос во внешний код и подождать ответа
    let result = yield "2 + 2?";
    console.log(result);
  }
  
  let generator = gen();
  
  // Первый вызов – всегда без аргумента, он начинает выполнение и возвращает результат первого yield. 
  //На этой точке генератор приостанавливает выполнение.
  let question = generator.next().value;
  //Результат yield переходит во внешний код (в question).
  console.log(question); // "2 + 2?"

  //Внешний код может выполнять любые асинхронные задачи, генератор стоит «на паузе».
  setTimeout(() => console.log("Asynchronic code working for 2 sec"), 2000);
  
  //Когда асинхронные задачи готовы, внешний код вызывает generator.next(4) с аргументом. 
  //Выполнение генератора возобновляется, а аргумент - результат вызова


  function* gen() {
    let ask1 = yield "2 + 2?";
  
    console.log(ask1); // 4
  
    let ask2 = yield "3 * 3?"
  
    console.log(ask2); // 9
  }
  
  let generator = gen();
  
  // Первый вызов – всегда без аргумента, он начинает выполнение и возвращает результат первого yield. 
  //На этой точке генератор приостанавливает выполнение.
  console.log( generator.next().value ); // "2 + 2?"
  
  //Внешний код вызывает generator.next(4) с аргументом. 
  //Выполнение генератора возобновляется, аргумент пишется в ask1 и печатается ask1
  //возвращается результат второго yield.
  //На этой точке генератор приостанавливает выполнение.
  console.log( generator.next(4).value ); 
  // 4
  // "3 * 3?"
  
  //Внешний код вызывает generator.next(9) с аргументом. 
  //Выполнение генератора возобновляется, аргумент пишется в ask2 и печатается ask2
  //возвращается результат вызова next() : { value: undefined, done: true }.
  //Печатается значение свойства done.
  console.log( generator.next(9).done); 
  // 9
  // true

  function* gen() {
    console.log(yield "2 + 2?");

    console.log(yield "3 * 3?");

    return "end";
  }
  
  let generator = gen();
  
  // Первый вызов – всегда без аргумента, он начинает выполнение и возвращает результат первого yield. 
  //На этой точке генератор приостанавливает выполнение.
  console.log( generator.next().value ); // "2 + 2?"
  
  //Внешний код вызывает generator.next(4) с аргументом. 
  //Выполнение генератора возобновляется, аргумент пишется в результат первого yield и печатается 
  //возвращается результат второго yield.
  //На этой точке генератор приостанавливает выполнение.
  console.log( generator.next(4).value ); 
  // 4
  // "3 * 3?"
  
  //Внешний код вызывает generator.next(9) с аргументом. 
  //Выполнение генератора возобновляется, аргумент пишется в результат второго yield и печатается
  //возвращается результат вызова next() : { value: undefined, done: true }.
  //Печатается значение свойства done.
  console.log( generator.next(9).done); 
  // 9
  // true

  //Последующие вызовы generator.next() с аргументом или без дадут постоянный результат
  console.log(generator.next(10)); 
  //{ value: undefined, done: true }

  console.log(generator.next()); 
  //{ value: undefined, done: true }

  function* gen() {
    try {
      // в этой строке возникнет ошибка
      let result = yield "Сколько будет 2 + 2?"; // (**)
  
      console.log("эта строка не отработает");
    } catch(e) {
      console.log(e); // выведет ошибку
    }
  }
  
  let generator = gen();
  
  let question = generator.next().value;
  
  //передает ошибку в результат yield (**)
  generator.throw(new Error("ответ не найден в моей базе данных")); // (*)


  function* gen() {
    // В этой строке возникнет ошибка
    let result = yield "Сколько будет 2 + 2?";
  }
  
  let generator = gen();
  
  console.log(generator.next());
  //{ value: 'Сколько будет 2 + 2?', done: false }
 
  try {
    //передает ошибку в результат yield (**)
    generator.throw(new Error("ответ не найден в моей базе данных"));
  } catch(e) {
    console.log(e); // выведет ошибку
  }