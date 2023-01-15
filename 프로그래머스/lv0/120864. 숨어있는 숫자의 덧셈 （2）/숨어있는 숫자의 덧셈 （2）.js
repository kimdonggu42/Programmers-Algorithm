function solution(my_string) {
    let result = 0;
    let sum = '';

    for (let i = 0; i < my_string.length; i++) {
        // my_string[i]가 숫자이면,
        if (!isNaN(my_string[i])) {
            // 빈 문자열에 my_string[i]들을 합쳐서 담아주고,
            sum = sum + my_string[i];
        }
        //  my_string[i + 1]이 문자이면,
        if (isNaN(my_string[i + 1])) {
            // result에 sum을 숫자로 바꿔서 더해주고,
            result = result + Number(sum)
            // sum을 빈 문자열로 초기화 한다.
            sum = '';
        };
    }
    return result;
}


// while문 사용 방법
// function solution(my_string) {
//     let result = 0;
    
//     for (let i = 0 ; i < my_string.length; i++) {
//         let thisNum = '';
//         while(!isNaN(my_string[i])) {
//             thisNum = thisNum + my_string[i]
//             i++
//         }
//         result = result + Number(thisNum);
//     }
//     return result;
// }