// 1. 두 분모의 곱을 공통분모로 하여 통분한 후 분자의 합과 분모를 구한다.
// 2. 결과값이 기약분수가 아닐 경우 약분을 위해 최대공약수를 구한다.
// 3. 결과값의 분자와 분모를 최대공약수로 나눈다.

function solution(denum1, num1, denum2, num2) {
  let result = [];
  let carculateDenum = (denum1 * num2) + (denum2 * num1);  // 통분한 분자의 합
  let carculateNum = num1 * num2;  // 통분한 분모
  let leastCommonMultiple = 1;  // 최대 공약수 초기값

  // 분자와 분모의 최대공약수 구하기  
  for (let i = 1; i <= carculateNum; i++) {
    // 분자와 분모를 같은 수로 나눠서 나누어 떨어지는 수(공약수) 중 가장 큰 수(최대공약수)를 구한다.
    if (carculateDenum % i === 0 && carculateNum % i === 0) {
      leastCommonMultiple = i;  // return문이 없기 때문에 조건을 만족하는 첫 i =1이 들어와도 반복문이 계속 진행된다.
    }
  }
  // 분자와 분모를 최대공약수로 나누어서 기약 분수로 만들어준다.
  // 최대공약수로 나누기 전 원래 기약분수인 경우 i의 값이 1이기 때문에 영향을 받지 않는다.
  result.push(carculateDenum / leastCommonMultiple, carculateNum / leastCommonMultiple);
  return result;
};


// 주의 : i가 1부터 들어가는데 i가 1일 경우 if문의 조건을 충족한다.
// 하지만 leastCommonMultiple = i 앞에 return문이 붙지 않았으므로
// i = 1에서 바로 조건을 충족해도 반복문을 끝까지 돈다.
// if (carculateDenum % i === 0 && carculateNum % i === 0) {
//   leastCommonMultiple = i;
// }



