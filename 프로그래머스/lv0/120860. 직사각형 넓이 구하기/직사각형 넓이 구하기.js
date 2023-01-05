// x중 가장 큰 값 - x중 가장 작은 값 -> x축의 길이(직사각형의 가로 길이) dots[i][0]
// y중 가장 큰 값 - y중 가장 작은 값 -> y축의 길이(직사각형의 세로 길이) dots[j][1]

function solution(dots) {
  let maxX = dots[0][0];  // x중 가장 큰 값
  let minX = dots[0][0];  // x중 가장 작은 값
  let maxY = dots[0][1];  // y중 가장 큰 값
  let minY = dots[0][1];  // y중 가장 작은 값

  for (let i = 0; i < dots.length; i++) {
    if (maxX < dots[i][0]) {
      maxX = dots[i][0]
    }
  }

  for (let j = 0; j < dots.length; j++) {
    if (minX > dots[j][0]) {
      minX = dots[j][0]
    }
  }

  for (let k = 0; k < dots.length; k++) {
    if (maxY < dots[k][1]) {
      maxY = dots[k][1]
    }
  }

  for (let l = 0; l < dots.length; l++) {
    if (minY > dots[l][1]) {
      minY = dots[l][1]
    }
  }
  return (maxX - minX) * (maxY - minY)
}