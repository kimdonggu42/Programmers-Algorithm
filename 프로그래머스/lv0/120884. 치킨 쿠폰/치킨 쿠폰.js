// 1. 1081장 / 10 = 몫 : 서비스 치킨 108마리, 나머지 : 쿠폰 1장
// 2. 108장 / 10 = 몫 : 서비스 치킨 10마리, 나머지 : 쿠폰 8장
// 3. 10장 / 10 = 몫 : 서비스 치킨 1마리, 나머지 : 쿠폰 1장
// 4. 나머지가 누적 10이면 서비스 치킨 1마리 추가
// 108 + 10 + 1 + 1 = 120

function solution(chicken) {
    let serviceChicken = 0;

    for (let i = chicken; 1 < i; i /= 10) {
        serviceChicken = serviceChicken + i;
    }
    return Math.floor(serviceChicken / 10);
}