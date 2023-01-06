// 1. array를 공백이 없는 하나의 문자열로 합친다.
// 2. 반복문을 돌면서 7이 나올때 마다 count의 개수를 1씩 증가시킨다.
// 3. 7의 개수가 담겨 있는 count를 리턴한다.

function solution(array) {
  let count = 0;

  let str = array.join('');

  for (let i = 0; i < str.length; i++) {
    // array를 문자열로 만들었기 때문에 숫자가 아닌 문자열 '7'을 찾아야 한다.
    if (str[i] === '7') {
      count++;
    }
  }
  return count;
}

// 다른 방법
// function solution(array) {
//   // let arr1 = array.join('') === '77717'
//   // arr1.split('') === ['7', '7', '7', '1', '7']

//   // array의 요소 중 두 자리 이상인 수에 7이 몇 번 있는지 카운트하기 위해
//   // array를 하나의 문자열로 합친 후 filter 메서드로 7만 걸러내기 위해 split을 이용해 배열로 변환한다.
//   return array.join('').split('').filter((value) => value === '7').length;
// }