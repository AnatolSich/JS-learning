let myIterableObj = { 
    [Symbol.iterator] : function* () {
      yield 1; yield 2; yield 3;
    }
  };
  console.log([...myIterableObj]); // [ 1, 2, 3 ]



  function* idMaker() {
    let index = 0;
    while (index < 5)
      yield index++;
  }
  var gen = idMaker();

  for (let index = 0; index < 5; index++) {
    console.log(gen.next().value);    
  }


const arr = ['0', '1', '4', 'a', '9', 'c', '16'];
const my_obj = {
  [Symbol.iterator]: function*() {
    for(let index of arr) {
      yield `${index}`;
    }
  }
};
const all = [...my_obj]
  .map(i => parseInt(i, 10))
  .map(Math.sqrt)
  .filter((i) => i < 4);
 // .reduce((i, d) => i + d);
console.log(all); //10
  


