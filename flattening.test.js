const flattening = require('./src/flattening');
const deepFlat = require('./src/flattening');

const arrays = [[1,2,3,4],[5,6],[7],[8,9]];
test('[[1,2,3,4],[5,6],[7],[8,9]]', () => {
    expect(flattening(arrays)) === [1,2,3,4,5,6,7,[8,9]];
});

test('[[1,2,3,4],[5,6],[7],[8,9]]', () => {
    expect(deepFlat(arrays)) === [1,2,3,4,5,6,7,8,9];
});


