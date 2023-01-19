// 지뢰는 board[i][j]에 있고, 주위 위험지역은
// board[i - 1][j - 1] && board[i - 1][j] && board[i - 1][j + 1]
//   board[i][j - 1]   &&   board[i][j]   &&   board[i][j + 1]
// board[i + 1][j - 1] && board[i + 1][j] && board[i + 1][j + 1]

function solution(board) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === 1) {
                // 1. 폭탄이 제일 윗줄에 있는 경우일 때 예외 처리
                // board[0][j]이면 i의 이전 요소가 없기 때문에 위쪽 방향으로 만들 위험지역이 없다.
                if (i !== 0 && board[i - 1][j] !== 1) {
                    board[i - 1][j] = 2  // 폭탄 위쪽
                }
                // 2. 폭탄이 제일 아랫줄에 있는 경우일 때 예외 처리
                // board[4][j]이면 i의 다음 요소가 없기 때문에 아래쪽 방향으로 만들 위험지역이 없다.
                if (i !== board.length - 1 && board[i + 1][j] !== 1) {
                    board[i + 1][j] = 2  // 폭탄 아래쪽
                }
                // 3. 폭탄이 제일 왼쪽줄에 있는 경우일 때 예외 처리
                // board[i][0]이면 j의 이전 요소가 없기 때문에 왼쪽 방향으로 만들 위험지역이 없다.
                if (j !== 0 && board[i][j - 1] !== 1) {
                    board[i][j - 1] = 2  // 폭탄 왼쪽
                }
                // 4. 폭탄이 제일 오른쪽줄에 있는 경우일 때 예외 처리
                // board[i][4]이면 j의 다음 요소가 없기 때문에 오른쪽 방향으로 만들 위험지역이 없다.
                if (j !== board[i].length - 1 && board[i][j + 1] !== 1) {
                    board[i][j + 1] = 2  // 폭탄 오른쪽
                }
                // 5. 폭탄이 왼쪽 상단 코너에 있는 경우일 때 예외 처리
                // board[0][0]이면 i와 j의 이전 요소가 없기 때문에 왼쪽 상단 대각선 방향으로 만들 위험지역이 없다.
                if (i !== 0 && j !== 0 && board[i - 1][j - 1] !== 1) {
                    board[i - 1][j - 1] = 2  // 폭탄 왼쪽 상단 대각선
                }
                // 6. 폭탄이 오른쪽 상단 코너에 있는 경우일 때 예외 처리
                // board[0][4]이면 i의 이전 요소와 j의 다음 요소가 없기 때문에 오른쪽 상단 대각선 방향으로 만들 위험지역이 없다.
                if (i !== 0 && j !== board[i].length - 1 && board[i - 1][j + 1] !== 1) {
                    board[i - 1][j + 1] = 2  // 폭탄 오른쪽 상단 대각선
                }
                // 7. 폭탄이 왼쪽 하단 코너에 있는 경우일 때 예외 처리
                // board[4][0]이면 i의 다음 요소와 j의 이전 요소가 없기 때문에 왼쪽 상단 대각선 방향으로 만들 위험지역이 없다.
                if (i !== board.length - 1 && j !== 0 && board[i + 1][j - 1] !== 1) {
                    board[i + 1][j - 1] = 2  // 폭탄 왼쪽 하단 대각선
                }
                // 8. 폭탄이 오른쪽 하단 코너에 있는 경우일 때 예외 처리
                // board[4][4]이면 i의 다음 요소와 j의 다음 요소가 없기 때문에 오른쪽 하단 대각선 방향으로 만들 위험지역이 없다.
                if (i !== board.length - 1 && j !== board[i].length - 1 && board[i + 1][j + 1] !== 1) {
                    board[i + 1][j + 1] = 2  // 폭탄 오른쪽 하단 대각선
                }
            }
        }
    }

    let count = 0;

    for (let k = 0; k < board.length; k++) {
        for (let l = 0; l < board[k].length; l++) {
            if (board[k][l] === 0) {
                count++
            }
        }
    }
    return count;
}