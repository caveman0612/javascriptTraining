const generateDocument = require("./generateDocument")

// test('should generate document 1', () => {
//     expect(generateDocument('ab', 'b')).toBeFalsy();
// })

// test('should generate document 1', () => {
//     expect(generateDocument('ab', 'bb')).toBeFalsy();
// })



// test('should generate document 1', () => {
//     expect(generateDocument('ab', 'ab')).toBeTruthy();
// })

// test('should generate document 1', () => {
//     expect(generateDocument('cab', 'abc')).toBeTruthy();
// })

// test('should generate document 1', () => {
//     expect(generateDocument('cab', 'abc')).toBeTruthy();
// })

test('should generate document 1', () => {
    expect(generateDocument(' "Bste!hetsi ogEAxpelrt x "', "AlgoExpert is the Best!")).toBeTruthy();
})

