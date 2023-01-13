// 소인수 : 약수 중 소수(약수가 1과 자기자신만 있는 수)인 수
// a/b가 유한소수이면 1 리턴
// a/b가 무한소수이면 2 리턴

function solution(a, b) {  // a: 7, b: 20 
    let GCD = 0;  // 최대공약수
    // 최대공약수 구하기
    for (let i = 1; i <= Math.min(a, b); i++) {
        if (a % i === 0 && b % i === 0) {
            GCD = i;  // 1
        }
    }
    // 기약분수 분모의 약수 구하기
    let denominator = b / GCD  // 기약분수 분모
    let factorsOfB = [];  // 기약분수 분모의 약수

    for (let j = 2; j <= denominator; j++) {
        if (denominator % j === 0) {
            factorsOfB.push(j);  // [2, 4, 5, 10, 20]
        }
    }
    return factorsOfB.find(n => n % 2 !== 0 && n % 5 !== 0) ? 2 : 1;
}


// function solution(a, b) {  // a: 7, b: 20 
//     let GCD = 0;  // 최대공약수

//     // 최대공약수 구하기
//     for (let i = 1; i <= Math.min(a, b); i++) {
//         if (a % i === 0 && b % i === 0) {
//             GCD = i;  // 1
//         }
//     }

//     // 기약분수 분모의 약수 구하기
//     let denominator = b / GCD  // 기약분수 분모
//     let factorsOfB = [];  // 기약분수 분모의 약수

//     for (let j = 2; j <= denominator; j++) {
//         if (denominator % j === 0) {
//             factorsOfB.push(j);  // [2, 4, 5, 10, 20]
//         }
//     }

//     // 기약분수 분모의 약수 중 소수(분모의 소인수) 구하기 -> 1은 소수 아님
//     // result에 2 또는 5만 존재하거나, 2와 5가 존재해야한다.
//     let result = [];
//     let prime = true;

//     for (let k = 0; k < factorsOfB.length; k++) {
//         for (let l = 2; l < factorsOfB[k]; l++) {
//             if (factorsOfB[k] % l === 0) {
//                 prime = false;
//                 break;
//             }
//         }
//         if (prime) {
//             result.push(factorsOfB[k]);
//         }
//     }
//    return result;
// }