// 1. 문자열 알파벳 순으로 정렬
// 2. 한 번만 등장하는 문자만(중복이 없는 문자) 리턴

function solution(s) {
  // 정렬을 위한 sort() 메서드를 사용하기 위해 배열로 복사 후 정렬
  let arrSortS = [...s].sort();  // 'hello' -> ['e', 'h', 'l', 'l', 'o']
  let result = [];

  for (let i = 0; i < arrSortS.length; i++) {
    // 해당 문자가 처음으로 등장하는 index와 마지막으로 등장하는 index가 같다면, 즉 한 번만 등장하는 문자라면
    if (arrSortS.indexOf(arrSortS[i]) === arrSortS.lastIndexOf(arrSortS[i])) {
      // 그 문자를 빈 배열에 추가
      result.push(arrSortS[i])
    }
  }
  // 배열을 다시 문자열로 변환
  return result.join('')
}