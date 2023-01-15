// 조건: 쿠폰 10장 당 서비스 치킨 1마리, 서비스 치킨 1마리 당 다시 쿠폰 1장 발급

// 1. 1081장 / 10 -> 주문한 서비스 치킨 수(몫): 108마리 && 남은 쿠폰 수(나머지): 1장
// => 현재 남은 쿠폰 수(몫 + 나머지): 108장 + 1장 === '109장'

// 2. 109장 / 10 -> 주문한 서비스 치킨 수(몫): 10마리 && 남은 쿠폰 수(나머지): 9장
// => 현재 남은 쿠폰 수(몫 + 나머지): 10장 + 9장 === '19장'

// 3. 19장 / 10 -> 주문한 서비스 치킨 수(몫): 1마리 && 남은 쿠폰 수(나머지): 9장
// => 현재 남은 쿠폰 수(몫 + 나머지): 1장 + 9장 === '10장'

// 4. 10장 / 10 -> 주문한 서비스 치킨 수(몫): 1마리 && 남은 쿠폰 수(나머지): 0장
// => 현재 남은 쿠폰 수(몫 + 나머지): 1장 + 0장 === '1장' -> 쿠폰 수가 10장이 안되므로 더 이상 주문 불가

function solution(chicken) {
    let serviceChicken = 0;

    for (let i = chicken; 1 < i; i /= 10) {
        serviceChicken = serviceChicken + i;
    }
    // 10을 또 나눠주는 이유는 for문은 처음 시작할 때는 증감문을 건너 뛰고 바로 코드블럭을 실행하기 때문이다.
    return Math.floor(serviceChicken / 10);
}


// 다른 방법 1(while문 사용)
// function solution(chicken) {
//     let coupon = chicken;
//     let serviceChicken = 0;

//     while (coupon >= 10) {
//         serviceChicken = serviceChicken + Math.floor(coupon / 10)
//         coupon = Math.floor(coupon / 10) + coupon % 10
//     }
//     return serviceChicken;
// }
