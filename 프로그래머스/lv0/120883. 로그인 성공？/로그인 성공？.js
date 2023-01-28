// 1. id와 pw 모두 일치할 경우 "login" 리턴
// 2. id는 일치하지만 pw가 일치하지 않을 "wrong pw" 리턴
// 3. id가 일치하지 않는 경우 "fail" 리턴
function solution(id_pw, db) {
    for (let i = 0; i < db.length; i++) {
        if (id_pw[0] === db[i][0] && id_pw[1] === db[i][1]) {
            return "login";
        } else if (id_pw[0] === db[i][0] && id_pw[1] !== db[i][1]) {
            return "wrong pw";
        }
    }
    // 하나의 for문에 "fail" 조건도 같이 돌릴 경우 첫 번째 요소에서 아이디가 일치하지 않으면
    // 반복문이 더 돌지 않고 바로 "fail"을 리턴하기 때문에 따로 분리
    // for (let j = 0; j < db.length; j++) {
    //     if (id_pw[0] !== db[j][0]) {
    //         return "fail";
    //     }
    // }
    return "fail"
}