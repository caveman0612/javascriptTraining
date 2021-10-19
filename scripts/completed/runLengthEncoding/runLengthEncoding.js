function runLengthEncoding(string) {
    let newString = ''
    let storedValue= string[0];
    let amountOfValue = 1;
    for (let i = 1; i < string.length; i++) {

        if (storedValue == string[i]) {
            amountOfValue++
        } 
        else {
            newString += `${amountOfValue}${storedValue}`;
            storedValue = string[i];
            amountOfValue = 1;
        }
        if (amountOfValue == 9 && amountOfValue != string.length) {
            newString += `${amountOfValue}${storedValue}`;
            storedValue = string[i + 1];
            amountOfValue = 0
        }
    }
    newString += `${amountOfValue}${storedValue}`;
    return newString;
  }

module.exports = runLengthEncoding