const firstNonRepeatingCharacter = require("./firstNonRepeatingCharacter")

test('should first non repeating character', () => {
    expect(firstNonRepeatingCharacter('abcdcaf')).toBe(1);
})



test('should first non repeating character', () => {
    expect(firstNonRepeatingCharacter("ababacc")).toBe(-1);
})