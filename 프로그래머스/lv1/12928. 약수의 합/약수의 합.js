// n = 12, n의 약수 1 2 3 4 6 12 = 28
// [i] * [j] === 12

// 1. n의 약수는 2개의 수를 곱해서 n이 되는 모든 2개의 수들 이므로 x * y === 12가 되는 모든 x, y를 구한다.
// 2. x, y를 빈 배열에 추가하면서 이미 구한 약수를 중복으로 추가하는 것을 방지하기 위해 새로 추가할 약수가 이미 배열에 포함되어 있다면 추가하지 않는다.
// 3. 약수들이 담겨 있는 배열의 모든 요소들의 합을 구한다.

function solution(n) {
  let arr = [];

  for (let i = 1; i <= n; i++) {  // [1, 12, 2, 6, 3, 4]
    for (let j = 1; j <= n; j++) {
      if ([i] * [j] === n && !arr.includes(i, j)) {
        arr.push(i);
      }
    }
  }

  let result = 0;

  for (let k = 0; k < arr.length; k++) {
    result = result + arr[k];
  }
  return result;
}

// function solution(n) {
//   let result = 0;

//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n; j++) {
//       if (i * j === n) {
//         result = result + i;  // i만 더하는 이유 : 3 * 4 와 4 * 3는 결과값이 12로 같아서 조건에 부합하지만 대칭되는 수의 경우 중복을 피하기 위해
//       }
//     }
//   }
//   return result;
// }