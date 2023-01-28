function solution(A, B) {  // 'hello'
    if (A === B) {
        return 0;
    }
    
    let arrA = A.split('');  // ) ['h', 'e', 'l', 'l', 'o']

    for (let i = 1; i < arrA.length; i++) {
        let lastWord = arrA.pop();  // 'o'
        arrA.unshift(lastWord);  // ['o', 'h', 'e', 'l', 'l']

        if (arrA.join('') === B) {  // 'ohell'
            return i
        }
    }
    return -1
}