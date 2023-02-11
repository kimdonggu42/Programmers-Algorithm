function solution(num, total) {
    let result = [];
    let sum = 0;

    // 0부터 1씩 증가시키면서 num개의 수의 합을 구함
    for (let i = 0; i < num; i++) {
        sum += i;
    }

    // 이 때, num이 3이고 total이 12인 경우 sum은 3(0+1+2)이고,
    // 첫 번재 값은 (12 - 3) / 3 = 3이 된다.
    let firstNum = (total - sum) / num;

    // 첫 번째 값 firstNum 부터 num개의 배열을 리턴한다.
    for (let i = 0; i < num; i++) {
        result.push(firstNum + i);
    }

    return result;
}