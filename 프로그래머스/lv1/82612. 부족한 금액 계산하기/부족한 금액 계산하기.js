function solution(price, money, count) {

  let sum = 0;

  for (let i = 1; i <= count; i++) {
    sum = sum + price * i;
  }


  // 놀이기구를 count번 타는데 필요한 금액의 합(sum)이
  // 원래 가지고 있던 돈인 money보다 더 많이 든다면 모자란 금액을 리턴하고,  
  if (sum > money) {
    return sum - money;
  // 돈이 모자라지 않는다면 0을 리턴한다.    
  } else {
    return 0;
  }
}