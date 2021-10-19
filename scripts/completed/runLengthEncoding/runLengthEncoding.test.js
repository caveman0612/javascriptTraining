const runLengthEncoding = require("./runLengthEncoding")

test('should runLengthEncoding0', () => {
    expect(runLengthEncoding('aaaaaaaaaaaabcc')).toEqual("9a3a1b2c");
})

test('should runLengthEncoding1', () => {
    expect(runLengthEncoding('=========')).toEqual("9=");
})

test('should runLengthEncoding2', () => {
    expect(runLengthEncoding('.........')).toEqual("9.");
})

test('should runLengthEncoding3', () => {
    expect(runLengthEncoding("........______=========AAAA   AAABBBB   BBB")).toEqual("8.6_9=4A3 3A4B3 3B");
})