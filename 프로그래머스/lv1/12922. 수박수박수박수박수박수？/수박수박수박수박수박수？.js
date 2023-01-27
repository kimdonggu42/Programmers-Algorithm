function solution(n) {
    let result = ''
    let str = '수박'

    for (let i = 1; i <= n; i++) {
        if (i % 2 !== 0) {
            result += str[0]
        } else {
            result += str[1]
        }
    }
    return result
}