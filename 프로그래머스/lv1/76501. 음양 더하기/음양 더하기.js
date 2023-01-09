// 1. i번째 signs가 false면 같은 i번째 absolutes값으 빼주고,
// 2. i번째 signs가 true면 같은 i번째 absolutes값으 더해준다.

function solution(absolutes, signs) {
  let sum = 0;

  for (let i = 0; i < absolutes.length; i++) {
    if (signs[i] === false) {
      sum = sum - absolutes[i];
    } else {
      sum = sum + absolutes[i];
    }
  };
  return sum;
};


// 다른 방법
// 1. signs[index]가 false면 value에 -를 붙여서 리턴하고,
// signs[index]가 true면 value를 그대로 리턴한다.
// 2. 리턴된 새로운 배열들의 합을 구한다.

// function solution(absolutes, signs) {
//   let num = absolutes.map((value, index) => {
//     if (signs[index] === false) {
//       return -value;
//     } else {
//       return value;
//     }
//   });

//   return num.reduce((acc, cur) => {
//     return acc + cur;
//   });
// };