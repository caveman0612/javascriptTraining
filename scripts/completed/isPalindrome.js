
const answer = isPalindrome("abcdcbd");
console.log(answer);

function isPalindrome(string) {
    let id1 = 0;
    let id2 = (string.length - 1);
    let array = string.split("");
    while (id1 < id2) {
        let start = array[id1];
        let end = array[id2];
        if (start == end) {
            id1++;
            id2--;
        }
        else {
            return false;
        }
    }
    return true;
}