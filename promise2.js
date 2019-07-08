// Промис выполнится сразу же
var promise = new Promise((resolve, reject) => {
    console.log(1);
    resolve(1)
});

// PromiseState = "resolved"
// PromiseResult = 1

// Добавили обработчик к выполненному промису
promise.then(console.log("Выполненный промис")); // ...он сработает тут же