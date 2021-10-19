function numberOfWaysToMakeChange(n, denoms) {
  denoms.sort((a, b) => b - a);
  const answer = [];

  if (n == 0) return 1;

  for (let i = 0; i <= n; i++) {
    let num = i;
    let value = 0;
    const combinations = [];
    for (let j = 0; j < denoms.length; j++) {
      const coin = denoms[j];
      if (num >= coin) {
        let times = Math.floor(num / coin);
        num -= times * coin;
        value += times * coin;
        // console.log(times, coin);
        combinations.push([times, coin]);
        // console.log("combinations", combinations);
      }
    }
    if (value == i) {
      answer.push(combinations);
    }
  }
  return answer[answer.length - 1].length;
}

// let num = numberOfWaysToMakeChange(6, [1, 5]);

// console.log(num);

module.exports = numberOfWaysToMakeChange;
