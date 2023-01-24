function solution(n) {  // 930211
    let result = 0;
    let stringN = n.toString();  // '930211'
    let nArr = stringN.split('');  // ['9', '3', '0', '2', '1', '1']
    
    for (let i = 0; i < nArr.length; i++) {
        result = result + Number(nArr[i]);
    }
    return result;
}