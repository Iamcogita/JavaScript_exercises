function memoize(fn) {
    const results = new Map();
    return (...args) => {
        const key = args.join('-');
        if (results.has(key)) {
            console.log("I'm memoized");
            return results.get(key);
        }
        const result = fn(...args);
        results.set(key, result);
        return result;
    }
}
const add = (a,b) => {return a + b}

console.log(memoize(add(1,2)));
console.log(memoize(add(1,2)));
