// function getNthFib(n) {
// 	if (n == 1) return 0;
// 	if (n == 2) return 1;
//     let start = 0;
//     let second = 1;
//     let temp;
//   for (let i = 3; i <= n; i++) {
//     temp = start + second;
//     start = second;
//     second = temp;
//   }
// 		return second
// }

function getNthFib(n) {
	if (n == 1) return 0;
	if (n == 2) return 1;
    return getNthFib(n - 1) + getNthFib(n - 2);
  }

  module.exports = getNthFib