// playing with arrow functions for learning purposes,
// creating a simple range iterator with recursion
console.log("-".repeat(40).concat("\nSimple range iterator with recursion\n"));
const recursion = (x , y) => {
    console.log(x);
    return x++ >= y ? "DONE" : recursion(x,y);
}
console.log(recursion(1, 10));
console.log("_".repeat(40));