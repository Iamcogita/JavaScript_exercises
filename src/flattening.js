const arrays = [[1, 2, 3], [4, 5], [6] , [7,[8,9]]];

const flattening = (arr) => { return arr.reduce((acc , curr) => acc.concat(curr) , [] );}
console.log(flattening(arrays));

const deepFlat = (arr) => { return arr.reduce((array1,array2) => {
    if(Array.isArray(array2)) {
        return array1.concat(deepFlat(array2))
    } else {
        return array1.concat(array2);
        }
    }, []);
}
console.log(deepFlat(arrays));

module.exports = deepFlat;
module.exports = flattening;