function solution(x, n) {
    let result = [];

    if (0 < x) {
        for (let i = x; i <= n * x; i += x) {
            result.push(i);
        }
    } else if (0 > x) {
        for (let i = x; n * x <= i; i += x) {
            result.push(i);
        }
    } else {
        for (let i = x; i < n; i++) {
            result.push(0);
        }
    }
    return result;
}