// 1. 나머지 연산자(%) 사용

function solution(num) {
  if (num % 2 === 0) {
    return 'Even';
  } else if (num % 2 !== 0) {
    return 'Odd';
  }
}


// 2. 반복문(while) 사용

// function solution(num) {
//   while (0 <= num) {
//     if (num === 1) {
//       return 'Odd';
//     } else if (num === 0) {
//       return 'Even';
//     }
//     num = num - 2
//   }
// }

