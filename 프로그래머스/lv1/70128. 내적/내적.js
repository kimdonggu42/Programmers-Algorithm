function solution(a, b) {
    let result = 0;

    // a와 b의 같은 index의 요소끼리 곱해서 result에 더해준다.
    for (let i = 0; i < a.length; i++) {
        result = result + a[i] * b[i];
    }
    return result;
}