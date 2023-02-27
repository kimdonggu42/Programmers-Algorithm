// 1. s를 공백을 기준으로 배열로 변경
// 2. splitWord의 각 요소의 짝수 index는 대문자로, 홀수 index는 짝수로 변경하여 str에 담는다.
// 3. 1개의 단어가 담긴 str을 changeWord에 담는다. (2-3의 과정을 마지막 단어까지 반복)
// 4. 쉼표로 구분되어 있는 changeWord의 각 요소를 하나의 문자열로 만든 후 result에 담는다.
// 5. result를 공백을 구분자로 하여 하나의 문자열로 만든다.
function solution(s) {  // "try hello world"
    let splitWord = s.split(' ');  // ["try","hello","world"]
    let changeWord = [];  // // [["T","r","Y"],["H","e","L","l","O"],["W","o","R","l","D"]]
    let result = [];  // ["TrY","HeLlO","WoRlD"]

    for (let i = 0; i < splitWord.length; i++) {
        let str = [];
        for (let j = 0; j < splitWord[i].length; j++) {
            if (j % 2 === 0) {
                str.push(splitWord[i][j].toUpperCase());
            } else {
                str.push(splitWord[i][j].toLowerCase());
            }
        }
        changeWord.push(str);
    }

    for (let i = 0; i < changeWord.length; i++) {
        result.push(changeWord[i].join(''))
    }

    return result.join(' ');
}