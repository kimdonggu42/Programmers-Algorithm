// 공차가 x일 경우 마지막 원소 다음으로 올 숫자는 common[common.length - 1] + x
// 공비가 y일 경우 마지막 원소 다음으로 올 숫자는 common[common.length - 1] * y

// 1. common이 등차수열 일 경우 -> common[1] - common[0] === common[2] - common[1]
// 2. common이 등비수열 일 경우 -> common[1] / common[0] === common[2] / common[1]

function solution(common) {
  let x = common[1] - common[0];
  let y = common[1] / common[0];

  // common이 등차수열이면
  if (common[1] - common[0] === common[2] - common[1]) {
    // common의 마지막 원소에 공차 x를 더해서 마지막 원소 다음으로 올 숫자를 리턴하고,  
    return common[common.length - 1] + x;
    // common이 등비수열이면    
  } else if (common[1] / common[0] === common[2] / common[1]) {
    // common의 마지막 원소에 공비 y를 곱해서 마지막 원소 다음으로 올 숫자를 리턴한다.  
    return common[common.length - 1] * y;
  }
}


// [21, 24, 27, 30, 33, 36] 공차 3

// [21, 42, 84, 168, 336]] 공비 2









