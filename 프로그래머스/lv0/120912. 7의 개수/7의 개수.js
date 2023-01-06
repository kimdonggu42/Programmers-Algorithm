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