// [3, 76, 24] => [76, 24, 3] => [0, 1, 2] => [1 ,2, 3]
    
// 1. 내림차순 정렬
// 2. 내림차순으로 정렬 시 내림차순 한 배열의 각 해당 요소의 index값 + 1 한 값이 각 원소들의 응급도 크기
// 3. 원본 배열의 각 요소를 내림차순 한 배열의 각 해당 요소의 index값 + 1 한 값으로 대체


// function solution(emergency) {  // [3, 76, 24]
//   // 내림차순으로 정렬하여 원본 배열을 변경하지 않는 새로운 배열로 생성
//   let newArr = emergency.slice().sort((a, b) => b - a);  // [76, 24, 3]

//   return emergency.map(function (value) {
//     // emergency의 각 요소를 순회하면서 value로 입력받은 emergency의 각 요소를
//     // newArr에서 찾은 index값 + 1 한 값으로 대체한 새로운 배열을 리턴한다.
//     return newArr.indexOf(value) + 1;  // value가 76일 경우 newArr에서 76의 index + 1은 1이므로 76은 1로 리턴된다.
//   })
// }


function solution(emergency) {

  // 원본 배열을 변경하지 않는 새로운 emergency 생성
  newEmergency = [];  // [3, 76, 24]
  for (let i = 0; i < emergency.length; i++) {
    newEmergency.push(emergency[i]);
  }
  // emergency를 내림차순으로 정렬한 새로운 배열 생성
  let downArr = emergency.sort((a, b) => b - a);  // // [76, 24, 3]
  // downArr에서 순서대로 newEmergency에 해당하는 값의 index의 값을 찾아서 1을 더해준 후 빈 배열에 담아준다.
  let result = [];
  for (let j = 0; j < emergency.length; j++) {
    result.push(downArr.indexOf(newEmergency[j]) + 1)
  }
  return result;
}












