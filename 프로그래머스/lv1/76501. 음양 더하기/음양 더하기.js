// 1. signs[index]가 false면 value에 -를 붙여서 리턴하고,
// signs[index]가 true면 value를 그대로 리턴한다.
// 2. 리턴된 새로운 배열들의 합을 구한다.

function solution(absolutes, signs) {
  let num = absolutes.map((value, index) => {
    if (signs[index] === false) {
      return -value;
    } else {
      return value;
    }
  });

  let sum = num.reduce((acc, cur) => {
    return acc + cur;
  });
  return sum;
};


// 1. 빈 배열에 signs[i]가 false이면 같은 absolutes[i]에 -를 붙여서 담아주고, true면 absolutes[i]를 그대로 담아준다.
// 2. 빈 배열에 담긴 모든 요소의 합을 구한다.

// function solution(absolutes, signs) {
//     let result = [];
//     let sum = 0;
    
//     for (let i = 0; i <absolutes.length; i++) {
//         if (signs[i] === false) {
//             result.push(-absolutes[i]);
//         } else {
//             result.push(absolutes[i]);
//         }
//     }
    
//     for (let j = 0; j < result.length; j++) {
//         sum = sum + result[j];
//     }
//     return sum;
// }