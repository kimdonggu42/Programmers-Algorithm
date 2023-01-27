// lines === [[0, 1], [2, 5], [3, 9]]
function solution(lines) {
    let result = 0;
    let linesRange = new Array(200).fill(0);

    // 각 선분들이 지나간 자리(index)를 1로 채운다.
    for (let i = 0; i < lines.length; i++) {
        for (let j = lines[i][0]; j < lines[i][1]; j++) {  // [1, 0, 1, 2, 2, 2]
            linesRange[j + 100] = linesRange[j + 100] + 1;
        }
    }

    // 선분들이 한 번 이상 지나간 구간의 수를 구한다.
    for (let k = 0; k < linesRange.length; k++) {
        if (1 < linesRange[k]) {
            result = result + 1;
        }
    }
    return result;
}