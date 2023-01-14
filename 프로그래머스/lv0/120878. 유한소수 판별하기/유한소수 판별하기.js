// 소인수 : 약수 중 소수인 수 === 약수 중 1과 자기 자신으로만 나누어 떨어지는 수
// 유한소수 : 기약분수 분모의 약수들이 모두 2 또는 5로 나누어 떨어지는 경우 === 기약분수 분모의 소인수가 2 또는 5만 존재하는 경우

function solution(a, b) {
    // 최대공약수 구하기
    let GCD = 0;

    for (let i = 1; i <= Math.min(a, b); i++) {
        if (a % i === 0 && b % i === 0) {
            GCD = i;  // 1
        };
    };

    // (기약분수)분모의 약수 구하기
    let denominator = b / GCD
    let factorsOfB = [];

    for (let j = 2; j <= denominator; j++) {
        if (denominator % j === 0) {
            factorsOfB.push(j);  // [2, 4, 5, 10, 20], [3, 7, 17, 21, 51, 119, 357]
        };
    };

    // 유한소수 판별하기
    // factorsOfB에서 2와 5 둘 다 나누어 떨어지지 않는 요소들을 새로운 배열로 반환한다.
    let result = factorsOfB.filter((value) => {
        return value % 2 !== 0 && value % 5 !== 0
    });

    if (result.length === 0) {
        return 1;
    } else {
        return 2;
    }
}