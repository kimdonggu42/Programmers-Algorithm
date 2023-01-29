function solution(array) {  // [1, 2, 3, 3, 4, 4, 4, 4, 4]
    let countObj = {};  // { 1: 1, 2: 1, 3: 2, 4: 5 }

    // key는 array요소, value는 해당 요소의 빈도로 하는 프로퍼티를 빈 객체에 담는다.
    for (let i = 0; i < array.length; i++) {
        if (countObj[array[i]]) {
            countObj[array[i]] += 1;
        } else {
            countObj[array[i]] = 1;
        }
    }
    
    // countObj의 value 중 최대값을 구한다.
    let maxValue = Math.max(...Object.values(countObj));  // 5

    // value값이 maxValue인 key들의 배열 생성
    // let mode = Object.keys(countObj).filter((key) => {
    //     return countObj[key] === maxValue;
    // })
    
    let mode = [];
    
    for (let i = 0; i < Object.keys(countObj).length; i++) {
        if (countObj[Object.keys(countObj)[i]] === maxValue) {
            mode.push(Object.keys(countObj)[i])
        }
    }

    if (mode.length === 1) {
        return Number(mode[0]);
    } else {
        return -1;
    }
}