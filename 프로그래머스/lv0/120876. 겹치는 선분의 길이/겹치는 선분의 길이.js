// lines === [[start, end], [start, end], [start, end]]
function solution(lines) {
    let result = 0;
    let start = 0;
    let end = 0;
    let linesRange = new Array(200).fill(0);

    for (let i = 0; i < lines.length; i++) {
        start = lines[i][0];
        end = lines[i][1];
        for (let j = start; j < end; j++) {
            linesRange[j + 100] = linesRange[j + 100] + 1;
        }
    }

    for (let k = 0; k < linesRange.length; k++) {
        if (1 < linesRange[k]) {
            result = result + 1;
        }
    }
    return result;
}