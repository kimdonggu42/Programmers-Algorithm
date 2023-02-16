// 가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 한다.
function solution(sides) {  // [11, 7]
    let result = [];
    let maxNum = Math.max(...sides);  // 11
    let minNum = Math.min(...sides);  // 7

    // 1. sides에서 가장 긴 변이 있는 경우 -> i는 5부터 11까지
    for (let i = maxNum - minNum + 1; i <= maxNum; i++) {
        result.push(i);
    }

    // 2. sides 외 다른 한 변이 가장 긴 변인 경우 -> i는 12부터 17까지
    for (let i = maxNum + 1; i < minNum + maxNum; i++) {
        result.push(i);
    }
    return result.length;
}

// function solution(sides) {
//     let result = 0;
//     let maxNum = Math.max(...sides);
//     let minNum = Math.min(...sides);

//     for (let i = maxNum - minNum + 1; i < maxNum + minNum; i++) {
//         result += 1;
//     }
//     return result;
// }