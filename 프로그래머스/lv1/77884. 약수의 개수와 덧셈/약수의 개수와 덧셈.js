function solution(left, right) {
    let arr = [];  // [13, 14, 15, 16, 17]
    let result = 0;

    // left부터 right까지의 수들을 arr에 담는다.
    for (let i = left; i <= right; i++) {
        arr.push(i);
    }

    for (let j = 0; j < arr.length; j++) {
        // 3. 2번의 과정이 끝나면 emptyArr를 다시 빈배열로 초기화하고,
        // arr의 마지막 요소까지 1, 2의 과정을 반복한다.
        let emptyArr = [];
        // 1. arr[j]의 약수들을 emptyArr에 담아준다.
        for (let k = 1; k <= arr[j]; k++) {
            if (arr[j] % k === 0) {
                emptyArr.push(k);
            }
        }
        // 2. (arr[j]의 약수들을 담는 반복문이 끝나면)emptyArr에 담겨 있는 약수의 개수가
        // 짝수이면 result에 arr[j]를 더하고, 홀수이면 result에 arr[j]를 뺀다.
        if (emptyArr.length % 2 === 0) {
            result = result + arr[j];
        } else {
            result = result - arr[j];
        }
    }
    return result;
}