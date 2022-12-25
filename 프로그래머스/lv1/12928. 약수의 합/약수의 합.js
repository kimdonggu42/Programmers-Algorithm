// n = 12, n의 약수 1 2 3 4 6 12 = 28
// i * j === 12

// 1. n의 약수는 2개의 수를 곱해서 n이 되는 모든 2개의 수들 이므로 x * y === 12가 되는 모든 x, y를 구한다.
// 2. x, y를 구하면서 이미 구한 약수를 중복으로 구하는 것을 방지하기 위해 x만 구한다. ex) 3 * 4, 4 * 3
// 3. 모든 x의 합을 구한다.

function solution(n) {
  let result = 0;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (i * j === n) {
        result = result + i;
      }
    }
  }
  return result;
}

// 잘못된 풀이
// function solution(n) {
//   let arr = [];

//   for (let i = 1; i <= n; i++) {  // [1, 12, 2, 6, 3, 4]
//     for (let j = 1; j <= n; j++) {
//       if ([i] * [j] === n && !arr.includes(i, j)) {
//         arr.push(i, j);
//       }
//     }
//   }

//   let result = 0;

//   for (let k = 0; k < arr.length; k++) {
//     result = result + arr[k];
//   }
//   return result;
// }