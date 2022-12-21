// [3, 76, 24] => [76, 24, 3] => [0, 1, 2] => [1 ,2, 3]

// 1. 내림차순 정렬
// 2. 내림차순으로 정렬 시 내림차순 한 배열의 각 해당 요소의 index값 + 1 한 값이 각 원소들의 응급도 크기
// 3. 원본 배열의 각 요소를 내림차순 한 배열의 각 해당 요소의 index값 + 1 한 값으로 대체

// emergency[0] = newArr[0]

function solution(emergency) {
  let newArr = emergency.slice().sort((a, b) => b - a);

  return emergency.map(function (value) {
    return newArr.indexOf(value) + 1;
  })
}

