// 1 + 0 = 1
// 1 + 1 = 10
// 1 + 1 + 1 = 11

// 1. bin1과 bin2를 10진법으로 변환 후 더하고(parseInt)
// 2. 더한 결과값을 다시 2진법으로 변환(toString)

function solution(bin1, bin2) {
    let binSum = parseInt(Number(bin1), 2) + parseInt(Number(bin2), 2)
    return binSum.toString(2)
    
}