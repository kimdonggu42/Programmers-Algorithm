function solution(my_string) {  // "aAb1B2cC34oOp"
    // step 1. 문자열 my_string을 배열로 바꿔준다.
    let arr = [...my_string];  // ['a', 'A', 'b', '1', 'B', '2', 'c', 'C', '3', '4', 'o', 'O', 'p']
    let result = 0;

    // step 2. 배열로 바꿔준 my_string의 요소 중 문자열인 요소들을 모두 'a'로 바꿔준다.
    for (let i = 0; i < arr.length; i++) {
        if (isNaN(arr[i])) {
            arr[i] = 'a'  // ['a', 'a', 'a', '1', 'a', '2', 'a', 'a', '3', '4', 'a', 'a', 'a']
        }
    }

    // step 3. arr를 하나의 문자열로 합친 후, 다시 'a'를 구분자로 나눠준다.
    let arrJoin = arr.join('').split('a')  // 'aaa1a2aa34aaa' -> ['', '', '', '1', '2', '', '34', '', '', '']

    // step 4. arrJoin의 요소 중 숫자인 요소는 result에 더해준다.
    for (let j = 0; j < arrJoin.length; j++) {
        if (!isNaN(arrJoin[j])) {
            result = result + Number(arrJoin[j])
        }
    }
    return result;
}


// 다른 풀이 방법 1
// function solution(my_string) {
//     let result = 0;
//     let concatNum = '';

//     for (let i = 0; i < my_string.length; i++) {
//         // my_string[i]가 숫자이면,
//         if (!isNaN(my_string[i])) {
//             // 빈 문자열에 my_string[i]들을 합쳐서 담아주고,
//             concatNum = concatNum + my_string[i];
//         };
//         //  my_string[i + 1]이 문자이면,
//         if (isNaN(my_string[i + 1])) {
//             // result에 sum을 숫자로 바꿔서 더해주고,
//             result = result + Number(concatNum)
//             // sum을 빈 문자열로 초기화 한다.
//             concatNum = '';
//         };
//     }
//     return result;
// }


// 다른 풀이 방법 2(while문 사용 방법)
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