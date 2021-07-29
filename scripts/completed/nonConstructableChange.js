const coins = [5, 7, 1, 1, 2, 3, 22];

const answer = nonConstructibleChange(coins);
console.log(answer);


function nonConstructibleChange(coins) {
    coins.sort((a, b) => {return a - b;})
    if (coins.length == 0) {
        return 1
    }
    let total = 0;
    for (coin of coins) {
        // console.log(total, coin);
        if (coin <= total + 1) {
            total += coin;
        }
        else{
            return (total + 1);
        }
    }
    return (total + 1);
  }

  