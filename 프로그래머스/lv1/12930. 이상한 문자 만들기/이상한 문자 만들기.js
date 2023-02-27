function solution(s) {
    let splitWord = s.split(' ');
    let changeWord = [];
    let result = [];

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