// lines === [[0, 2], [-3, -1], [-2, 1]]
// i[0] === [0, 0, 0, 1, 1, 0]
// i[1] === [1, 1, 0, 1, 1, 0]
// i[2] === [1, 2, 1, 2, 1, 0]
function solution(lines) {
  let result = 0;
  let flatLines = lines.flat();
  let absFlatLines = [];

  for (let i = 0; i < flatLines.length; i++) {
    absFlatLines.push(Math.abs(flatLines[i]));
  }

  let maxNum = Math.max(...absFlatLines);
  let linesRange = new Array(maxNum * 2).fill(0);

  // 각 선분들이 지나간 자리(index)를 1로 채운다.
  for (let i = 0; i < lines.length; i++) {
    for (let j = lines[i][0]; j < lines[i][1]; j++) {
      linesRange[j + linesRange.length / 2] += 1;
    }
  }

  // 선분들이 한 번 이상 지나간 구간(2 이상)의 수를 구한다.
  for (let i = 0; i < linesRange.length; i++) {
    if (1 < linesRange[i]) {
      result = result + 1;
    }
  }
  return result;
}