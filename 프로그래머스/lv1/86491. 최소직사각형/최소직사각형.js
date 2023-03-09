// 가로 길이가 세로 길이보다 짧을 때 두 수의 위치 변경
function solution(sizes) {
    for (let i = 0; i < sizes.length; i++) {
        if (sizes[i][0] < sizes[i][1]) {
            [sizes[i][0], sizes[i][1]] = [sizes[i][1], sizes[i][0]];
        }
    }

    let wMax = sizes[0][0];
    let hMax = sizes[0][1];

    for (let i = 0; i < sizes.length; i++) {
        if (wMax < sizes[i][0]) {
            wMax = sizes[i][0]
        }
    }

    for (let i = 0; i < sizes.length; i++) {
        if (hMax < sizes[i][1]) {
            hMax = sizes[i][1]
        }
    }

    return wMax * hMax;
}