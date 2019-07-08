var dateFields = [1970, 0, 1];  // 1 Jan 1970
var date = new Date(...dateFields); //local date
var date2 = new Date(Date.UTC(...dateFields)); //UTC date

console.log(date);
console.log(date2);

var c1 = ["HTML", "CSS"];
var c2 = ["JS", "C++"];
var courses = c1.concat(c2);
console.log(courses);


const obj1 = { foo: 'bar', x: 42 };
const obj2 = { foo: 'baz', y: 5 };

const clonedObj = {...obj1}; // { foo: "bar", x: 42 }
const mergedObj = {...obj1, ...obj2}; // { foo: "baz", x: 42, y: 5 }
console.log(mergedObj);

const obj1 = { foo: 'bar', x: 42 };
const obj2 = { foo: 'baz', y: 5 };
const merge = (...objects) => ({...objects});

let mergedObj = merge(obj1, obj2);
// { 0: { foo: 'bar', x: 42 }, 1: { foo: 'baz', y: 5 } }
console.log(mergedObj);
let mergedObj2 = merge({}, obj1, obj2);
// { 0: {}, 1: { foo: 'bar', x: 42 }, 2: { foo: 'baz', y: 5 } }
console.log(mergedObj2);

function asyncFunc(work) {
    return new Promise(function(resolve, reject) {
        if (work === "")
            reject(Error("Nothing"));
         else   
        setTimeout(function() {
            resolve(work);
        }, 5000);
    });
}

asyncFunc("Work 1").then(
                    function(result) {
                        console.log(result);
                        return asyncFunc("");           
                                    }, 
                    function(error) {
                        console.log(error);
                                    }
                    )
                .then(
                    function(result) {
                        console.log(result);
                                    }, 
                    function(error) {
                        console.log(error);
                                    }
                    );
console.log("End");