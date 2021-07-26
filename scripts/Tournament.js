



const competitions = [
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python", "HTML"]
]

const results = [0, 0, 1]

let answer1 = tournamentWinner(competitions, results)
console.log(answer1);


function tournamentWinner(competitions, results) {
    const len = results.length;
    let totals = {};
    for (let i = 0; i < len; i++){
        
        if (results[i] == 1){
            let winner = competitions[i][0];
            if (winner in totals) {
                totals[winner] += 1;
            }
            else {
                totals[winner] = 1;
            }
        }
        else {
            let winner = competitions[i][1];
            if (winner in totals) {
                totals[winner] += 1;
            }
            else {
                totals[winner] = 1;
            }
        }
    }
    const answer = highestValue(totals)
    return answer;
  }


  function highestValue(obj1) {
    let winner;
    let max = 0;
    for (const [key, value] of Object.entries(obj1)) {
        if (value > max) {
            winner = key
            max = value
            
        }
    }
    return winner;
}