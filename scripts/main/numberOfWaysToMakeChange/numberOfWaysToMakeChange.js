function numberOfWaysToMakeChange(n, denoms) {
  denoms.sort((a, b) => b - a);

  const filledArray = [];
  for (let i = 0; i <= n; i++) {
    let value = i;
    for (let j = 0; i < denoms.length; j++) {
      let coin = denoms[j];
      if (denoms[j] <= i) {
        let times = Math.floor(value / coin);
        value = -times * coin;
        filledArray[i].push([times, coin]);
      }
    }
  }

  return denoms;
}

let num = numberOfWaysToMakeChange(6, [1, 5]);

console.log(num);

module.exports = numberOfWaysToMakeChange;
