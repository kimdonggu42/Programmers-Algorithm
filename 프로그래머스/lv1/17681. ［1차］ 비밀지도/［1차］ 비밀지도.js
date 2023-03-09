// 2개 중 하나라도 벽이면 벽(2개 모두 벽이면 벽) 1(#) + 0(" ") = 1(#), 1(#) + 1(#) = 1(#)
// 2개 모두 공백인 부분은 공백 0(" ") + 0(" ") = 0(" ")
// 벽 = 1, 공백 = 0

// 1. arr1과 arr2의 각 요소를 이진수로 변환
// 2. arr1과 arr2를 합침
// 3. 합친 결과를 #과 공백으로 변환
function solution(n, arr1, arr2) {
  let zeroNum = '';

  for (let i = 0; i < n; i++) {
    zeroNum = zeroNum + 0;
  }
    
  let binaryArr1 = arr1.map((value) => {  // ["01001","10100","11100","10010","01011"]
      return (zeroNum + value.toString(2)).substr(-zeroNum.length);
  })
  let binaryArr2 = arr2.map((value) => {  // ["11110","00001","10101","10001","11100"]
      return (zeroNum + value.toString(2)).substr(-zeroNum.length);
  })

  let converseArr = [];  // [["#","#","#","#","#"],["#"," ","#"," ","#"],["#","#","#"," ","#"],["#"," "," ","#","#"],["#","#","#","#","#"]]

  for (let i = 0; i < n; i++) {
    let converseEl = [];
    for (let j = 0; j < n; j++) {
      if (binaryArr1[i][j] === '1' || binaryArr2[i][j] === '1') {
        converseEl.push('#');
      } else if (binaryArr1[i][j] === '0' && binaryArr2[i][j] === '0') {
        converseEl.push(' ');
      }
    } 
    converseArr.push(converseEl);
  }

  let result = converseArr.map((value) => {
      return value.join('');
  })

  return result;
}