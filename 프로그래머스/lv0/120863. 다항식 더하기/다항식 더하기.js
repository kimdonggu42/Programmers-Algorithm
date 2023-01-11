function solution(polynomial) {  // "3x + 7 + x"
    let splitByPlusSign = polynomial.split(' + ');  // ['3x', '7', 'x']
    let arrXnum = [];
    let xNum = 0;
    let num = 0;

    // step 1. 일차항만 모은 배열 구하기 && 모든 상수항의 합 구하기
    for (let i = 0; i < splitByPlusSign.length; i++) {
        // 다항식을 ' + '를 기준으로 분리한 배열의 원소들 중 'x'를 포함하는 원소(일차항)들은
        if (splitByPlusSign[i].includes('x')) {
            // arrXnum에 담고, 
            arrXnum.push(splitByPlusSign[i]);  // ['3x', 'x']
            // x를 포함하지 않는 원소(상수항)들은
        } else {
            // 숫자로 변경 후 다 더한 결과값을 num에 담는다. 
            num = num + (Number(splitByPlusSign[i]));  // 7
        }
    };

    // step 2. 모든 일차항의 합 구하기
    for (let j = 0; j < arrXnum.length; j++) {
        // 배열 arrXnum의 원소들 중 'x'인 원소가 나올 경우 xNum에 1을 더하고,
        if (arrXnum[j] === 'x') {
            xNum = xNum + 1;
            // 그 외에는(ex:2x) x를 제외한 상수만 잘라내서 xNum에 더해준다.     
        } else {
            xNum = xNum + Number(arrXnum[j].slice(0, arrXnum[j].length - 1));  // 4
        }
    };

    // step 3. 조건에 맞는 결과값 리턴하기
    // 1. 일차항과 상수항 모두 값이 있는 경우('2x + 3' or 'x + 3')
    // xNum이 0이 아니고, num이 0이 아닌 경우
    if (xNum !== 0 && num !== 0) {
        // xNum이 1인 경우
        if (xNum === 1) {
            return `x + ${num}`;
          // xNum이 1이 아닌 경우(1 이상인 경우)  
        } else {
            return `${xNum}x + ${num}`;
        }
    // 2. 일차항만 값이 있고, 상수항은 값이 없는 경우('2x' or 'x')
    // xNum이 0이 아니고, num이 0인 경우    
    } else if (xNum !== 0 && num === 0) {
        // xNum이 1인 경우
        if (xNum === 1) {
            return 'x';
          // xNum이 1이 아닌 경우(1 이상인 경우)
        } else {
            return `${xNum}x`;
        }
    // 3. 일차항은 값이 없고 상수항만 값이 있는 경우('3')
    } else {
        return `${num}`;
    }
};