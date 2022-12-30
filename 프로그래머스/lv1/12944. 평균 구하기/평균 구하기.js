// 1. arr의 모든 원소의 합을 구해서
// 2. arr.length로 나눈다.

function solution(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i]
  }
  return sum / arr.length;
}