// 1. emergency([3, 76, 24])를 내림차순으로 정렬한다.  // [76, 24, 3]
// 2. 내림차순으로 정렬한 각 요소의 index값에 1을 더한 값이 emergency 각 요소들의 응급도가 된다.  // [76, 24, 3] === [1, 2, 3]
// 3. 내림차순으로 졍렬한 각 요소의 index + 1한 값을 다시 원래 emergency 요소의 순서대로 위치시켜야 하기 때문에  // [3, 76, 24] === [3, 1, 2]
// 4. 내림차순으로 정렬한 배열에서 emergecny 요소의 순서(3 -> 76 -> 24)대로 index값을 찾은 후, 1을 더한 값을 빈배열에 넣어준다.

function solution(emergency) {  // [3, 76, 24]
    
    let sortedEmergency = [...emergency].sort((a, b) => b - a);  // [76, 24, 3]
    let result = [];
    
    for (let i = 0; i < emergency.length; i++) {
        result.push(sortedEmergency.indexOf(emergency[i]) + 1);
        // result.push(sortedEmergency.indexOf(sortedEmergency[i] + 1); => 이렇게 하면 [1, 2, 3] 순서로 담긴다.
    }
    return result;
}

// 1. emergency를 내림차순으로 정렬한다. [76, 24, 3]
// 2. 정렬한 배열의 인덱스 값에 1을 더한다. [1, 2, 3]
// 3. emergency의 각 요소와 매칭되는 내림차순 한 배열의 각 해당 요소의 index값 + 1 한 값으로 대체

// function solution(emergency) {
    
//     let sortedEmergency = [...emergency].sort((a, b) => b - a);
//     // let sortedEmergency = emergency.slice().sort((a, b) => b - a);
    
//     return emergency.map(function(value) {
//         return sortedEmergency.indexOf(value) + 1;
//     })
// }