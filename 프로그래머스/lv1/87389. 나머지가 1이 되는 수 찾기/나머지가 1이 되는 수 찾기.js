function solution(n) {
  for (let i = 0; i < n; i++) {
    if (n % i === 1) {
      return i;  // 나머지가 1이 되는 i가 들어오면 반복문을 멈추고 i를 리턴한다.
    }
  }
}