// playing with arrow functions for learning purposes,
// creating a simple range iterator with recursion
console.log("-".repeat(40).concat("\nSimple range iterator with recursion\n"));
const recursion = (x , y) => {
    console.log(x);
    return x++ >= y ? "DONE" : recursion(x,y);
}
console.log(recursion(1, 10));
console.log("_".repeat(40));
// decorator: trying it out for the first time
function decorator(x){
    return function f(){
        let result = `old value is: ${f(x)}`;
        return result;
    }
}
let oldF = (x) => {return x + 1 ;}
//oldF = decorator(oldF);
console.log(decorator(oldF(1)));