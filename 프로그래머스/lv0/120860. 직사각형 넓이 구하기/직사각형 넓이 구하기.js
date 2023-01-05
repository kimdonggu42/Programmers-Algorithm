// x중 가장 큰 값 - x중 가장 작은 값 -> x축의 길이(직사각형의 가로 길이) dots[i][0]
// y중 가장 큰 값 - y중 가장 작은 값 -> y축의 길이(직사각형의 세로 길이) dots[j][1]

function solution(dots) {
  let maxX = dots[0][0];  // x중 가장 큰 값
  let minX = dots[0][0];  // x중 가장 작은 값
  let maxY = dots[0][1];  // y중 가장 큰 값
  let minY = dots[0][1];  // y중 가장 작은 값

  // x중 최대값  
  for (let i = 0; i < dots.length; i++) {
    if (maxX < dots[i][0]) {
      maxX = dots[i][0];
    }
  }
  // x중 최소값  
  for (let j = 0; j < dots.length; j++) {
    if (minX > dots[j][0]) {
      minX = dots[j][0];
    }
  }
  // y중 최대값  
  for (let k = 0; k < dots.length; k++) {
    if (maxY < dots[k][1]) {
      maxY = dots[k][1];
    }
  }
  // y중 최소값  
  for (let l = 0; l < dots.length; l++) {
    if (minY > dots[l][1]) {
      minY = dots[l][1];
    }
  }
  return (maxX - minX) * (maxY - minY);
}


// // 다른 방법 1
// function solution(dots) {
//   // dots의 x값들을 배열로 추출한다.
//   let xValue = dots.map((value) => value[0]);
//   // dots의 y값들을 배열로 추출한다.
//   let yValue = dots.map((value) => value[1]);

//   // 각각 x값들 중 최대, 최소값과 y값들 중 최대 최소 값들을 구한다.
//   let maxX = Math.max(...xValue);
//   let minX = Math.min(...xValue);
//   let maxY = Math.max(...yValue);
//   let minY = Math.min(...yValue);

//   // x의 최대값 - x의 최소값이 직사각형의 가로 길이이고
//   // y의 최대값 - y의 최소값이 직사각형의 세로 길이이다.
//   return Math.abs(maxX - minX) * Math.abs(maxY - minY);
//   // Math.abs : 절대값으로 변경해주는 이유? 없어도 통과 되는데
// }

// // 다른 방법 2 (다른 방법 1의 축약형)
// function solution(dots) {
//   let width = Math.max(...dots.map(value => value[0])) - Math.min(...dots.map(value => value[0]));
//   let length = Math.max(...dots.map(value => value[1])) - Math.min(...dots.map(value => value[1]));

//   return width * length;
// }

// // 다른 방법 3
// function solution(dots) {
//   const sort = dots.sort((a, b) => b[1] - a[1])

//   return Math.abs((sort[0][0] - sort[1][0]) * (sort[0][1] - sort[3][1]));
// }

// // 다른 방법 4
// function solution(dots) {
//   dots.sort((a, b) => a[0] + a[1] - b[0] - b[1]);

//   return (dots[3][0] - dots[0][0]) * (dots[3][1] - dots[0][1]);
// }