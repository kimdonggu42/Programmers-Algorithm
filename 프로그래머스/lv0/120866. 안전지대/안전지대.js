// 지뢰는 board[i][j]에 있고, 주위 위험지역은
// board[i - 1][j - 1] && board[i - 1][j] && board[i - 1][j + 1]
// board[i][j - 1] && board[i][j] && board[i][j + 1]
// board[i + 1][j - 1] && board[i + 1][j] && board[i + 1][j + 1]

function solution(board) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === 1) {
                if (i !== 0 && board[i - 1][j] !== 1) {
                    board[i - 1][j] = 2
                }
                if (i !== board.length - 1 && board[i + 1][j] !== 1) {
                    board[i + 1][j] = 2
                }
                if (j !== 0 && board[i][j - 1] !== 1) {
                    board[i][j - 1] = 2
                }
                if (j !== board[i].length - 1 && board[i][j + 1] !== 1) {
                    board[i][j + 1] = 2
                }
                if (i !== 0 && j !== 0 && board[i - 1][j - 1] !== 1) {
                    board[i - 1][j - 1] = 2
                }
                if (i !== 0 && j !== board[i].length - 1 && board[i - 1][j + 1] !== 1) {
                    board[i - 1][j + 1] = 2
                }
                if (i !== board.length - 1 && j !== 0 && board[i + 1][j - 1] !== 1) {
                    board[i + 1][j - 1] = 2
                }
                if (i !== board.length - 1 && j !== board[i].length - 1 && board[i + 1][j + 1] !== 1) {
                    board[i + 1][j + 1] = 2
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