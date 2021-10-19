function generateDocument(characters, document) {

    const hash = new Map();

    for (let i = 0; i < characters.length; i++) {
        if (!hash.has(characters[i])) {
            hash.set(characters[i], 1);
        } else {
            let value = hash.get(characters[i]);
            hash.set(characters[i], value + 1);
        }
    }

    for (let i = 0; i < document.length; i++) {
        if (hash.get(document[i]) > 0) {
            let value = hash.get(document[i]);
            hash.set(document[i], value - 1);
        } else {
            return false;
        }

    }

    // console.log(hash);
    return true;
  }

module.exports = generateDocument