// 전제 조건: 2개의 직선의 기울기가 서로 같으면 평행이다
// 기울기 공식: (y2 - y1) / (x2 - x1)

// case 1. dots[0]dots[1]의 기울기 === dots[2]dots[3]의 기울기
// dots[0]dots[1]의 기울기([1, 4], [9, 2]): (dots[1][1] - dots[0][1]) / (dots[1][0] - dots[0][0])
// dots[2]dots[3]의 기울기([3, 8], [11, 6]): (dots[3][1] - dots[2][1]) / (dots[3][0] - dots[2][0])

// case 2. dots[0]dots[2]의 기울기 === dots[1]dots[3]의 기울기
// dots[0]dots[2]의 기울기([1, 4], [3, 8]): (dots[2][1] - dots[0][1]) / (dots[2][0] - dots[0][0])
// dots[1]dots[3]의 기울기([9, 2], [11, 6]): (dots[3][1] - dots[1][1]) / (dots[3][0] - dots[1][0])

// case 3. dots[0]dots[3]의 기울기 === dots[1]dots[2]의 기울기
// dots[0]dots[3]의 기울기([1, 4], [11, 6]): (dots[3][1] - dots[0][1]) / (dots[3][0] - dots[0][0])
// dots[1]dots[2]의 기울기([9, 2], [3, 8]): (dots[2][1] - dots[1][1]) / (dots[2][0] - dots[1][0])

function solution(dots) {
    let slopeZeroOne = (dots[1][1] - dots[0][1]) / (dots[1][0] - dots[0][0]);
    let slopeTwoThree = (dots[3][1] - dots[2][1]) / (dots[3][0] - dots[2][0]);

    let slopeZeroTwo = (dots[2][1] - dots[0][1]) / (dots[2][0] - dots[0][0]);
    let slopeOneThree = (dots[3][1] - dots[1][1]) / (dots[3][0] - dots[1][0]);

    let slopeZeroThree = (dots[3][1] - dots[0][1]) / (dots[3][0] - dots[0][0]);
    let slopeOneTwo = (dots[2][1] - dots[1][1]) / (dots[2][0] - dots[1][0]);

    if (slopeZeroOne === slopeTwoThree || slopeZeroTwo === slopeOneThree || slopeZeroThree === slopeOneTwo) {
        return 1;
    } else {
        return 0;
    }
}