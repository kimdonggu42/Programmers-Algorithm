function solution(keyinput, board) {
    let xLimit = Math.floor(board[0] / 2);
    let yLimit = Math.floor(board[1] / 2);
    let start = [0, 0];

    for (let i = 0; i < keyinput.length; i++) {
        if (keyinput[i] === "right" && start[0] < xLimit) {
            start[0] = start[0] + 1;
        } else if (keyinput[i] === "left" && -xLimit < start[0]) {
            start[0] = start[0] - 1;
        } else if (keyinput[i] === "up" && start[1] < yLimit) {
            start[1] = start[1] + 1;
        } else if (keyinput[i] === "down" && -yLimit < start[1]) {
            start[1] = start[1] - 1;
        }
    }
    return start;
}