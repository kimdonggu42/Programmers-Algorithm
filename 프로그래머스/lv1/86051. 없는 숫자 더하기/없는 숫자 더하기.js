// 1. 0부터 9까지 numbers에 없는 수만 추출해서,
// 2. 더해준다.

function solution(numbers) {
  let sum = 0;

  for (let i = 0; i < 10; i++) {
    if (!numbers.includes(i)) {
      sum = sum + i;
    };
  };
  return sum;
};


// 다른 방법
// 1. numbers에 없는 수를 찾기 위해 비교할 배열 sample 생성
// 2. sample을 돌면서 numbers에 없는 sample의 수만 추출해서,
// 3. 더해준다.

// function solution(numbers) {
//   let sample = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//   let sum = 0;

//   sample.map((value) => {
//     if (!numbers.includes(value)) {
//       sum = sum + value
//     };
//   });
//   return sum;
// };