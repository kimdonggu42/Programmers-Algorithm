function solution(array) {  // [1, 2, 3, 3, 4, 4, 4, 4, 4]
    let countObj = {};  // { 1: 1, 2: 1, 3: 2, 4: 5 }

    // key는 array요소, value는 해당 요소의 빈도로 하는 프로퍼티를 빈 객체에 담는다.
    for (let i = 0; i < array.length; i++) {
        // countObj에 array[i]가 key인 프로퍼티가 없다면 key가 array[i]이고 value가 1인 프로퍼티를 추가하고,
        // 이미 추가된 key라면 동일한 key를 가지고 있는 프로퍼티의 value값을 1씩 증가 시킨다.
        if (!countObj[array[i]]) {
            countObj[array[i]] = 1;
        } else {
            countObj[array[i]] += 1;
        }
    }
    
//     for (let i = 0; i < array.length; i++) {
//         let count = 1;
        
//         if (array[i] === array[i + 1]) {
//             count++;
//         }
//         countObj[i] = count;
//     }

    // countObj의 value 중 최대값을 구한다.
    let maxValue = Math.max(...Object.values(countObj));  // 5

    // 프로퍼티 중 value값으로 maxValue를 가지고 있는 key들만 담은 배열 생성
    // ex) Object.keys(countObj) = [1, 2, 3, 4]일때, (key에 1, 2, 3, 4가 들어감)
    // countObj[4]의 값은 5이고 maxValue의 값도 5이기 때문에 4가 mode에 담긴다.
    let mode = Object.keys(countObj).filter((key) => {
        return countObj[key] === maxValue;
    })

    // let mode = [];

    // for (let i = 0; i < Object.keys(countObj).length; i++) {
    //     if (countObj[Object.keys(countObj)[i]] === maxValue) {
    //         mode.push(Object.keys(countObj)[i]);
    //     }
    // }

    // mode에 담긴 요소가 1개라면 최빈값이 1개라는 뜻이므로 그 요소를 리턴하고,
    // 여러 개의 요소가 담겼다면 최빈값이 여러 개라는 뜻이므로 -1을 리턴한다.
    if (mode.length === 1) {
        return Number(mode[0]);
    } else {
        return -1;
    }
}