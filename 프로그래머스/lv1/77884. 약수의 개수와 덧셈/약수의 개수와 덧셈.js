function solution(left, right) {
    let result = 0;

    for (let i = left; i <= right; i++) {
        // 3. 2번의 과정이 끝나면 emptyArr를 다시 빈배열로 초기화하고, right까지 1, 2의 과정을 반복한다.
        let emptyArr = [];
        // 1. i의 약수들을 emptyArr에 담아준다.
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) {
                emptyArr.push(j);
            }
        }
        // 2. (i의 약수들을 담는 반복문이 끝나면)emptyArr에 담겨 있는 약수의 개수가
        // 짝수이면 result에 i를 더하고, 홀수이면 result에 i를 뺀다.
        if (emptyArr.length % 2 === 0) {
            result = result + i;
        } else {
            result = result - i;
        }
    }
    return result;
}


// 제곱근이 정수면 약수의 개수가 홀수인 점을 이용하여 푼 풀이
// function solution(left, right) {
//     let result = 0;
//     for (let i = left; i <= right; i++) {
//         if (Number.isInteger(Math.sqrt(i))) {
//             result = result - i;
//         } else {
//             result = result + i;
//         }
//     }
//     return result;
// }

// left부터 right까지 배열로 담아서 하는 경우
// function solution(left, right) {
//     let arr = [];  // [13, 14, 15, 16, 17]
//     let result = 0;

//     for (let i = left; i <= right; i++) {
//         arr.push(i);
//     }

//     for (let j = 0; j < arr.length; j++) {
//         let emptyArr = [];
//         for (let k = 1; k <= arr[j]; k++) {
//             if (arr[j] % k === 0) {
//                 emptyArr.push(k);
//             }
//         }
//         if (emptyArr.length % 2 === 0) {
//             result = result + arr[j];
//         } else {
//             result = result - arr[j];
//         }
//     }
//     return result;
// }