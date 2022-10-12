const loop = require('./src/own_loop');

let total;
let amountOfTimes;
test("Testing loop", () => {
    amountOfTimes = 0;
    total = 0;
    function x(a){
        total += a;
        amountOfTimes++;
    }
    loop(3,(n) => n > 0,(n) => n - 1,x);
    expect(total).toEqual(6);
    expect(amountOfTimes).toEqual(3);
});