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
    return "fail"
}