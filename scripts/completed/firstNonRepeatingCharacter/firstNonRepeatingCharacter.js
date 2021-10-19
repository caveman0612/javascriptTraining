function firstNonRepeatingCharacter(string) {
    const addedHash = new Map();
    const delHash = new Map();

    for (let i = 0; i < string.length; i++) {

        if (!addedHash.get(string[i]) && !delHash.get(string[i])) {
            addedHash.set(string[i], {"index": i, "count": 1})
        } else {
            addedHash.delete(string[i])
            delHash.set(string[i], true)
        }
    }

    console.log(addedHash);
    const answers = addedHash.values();
    const answer = answers.next().value;
    if (answer === undefined) {
        return -1;
    }
    console.log(answer);
    return answer["index"]
  }

module.exports = firstNonRepeatingCharacter