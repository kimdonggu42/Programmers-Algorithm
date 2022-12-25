// quiz[0]의 계산 결과가 true면 result[0]에 true 반환
// quiz[0] => quiz[0][0] quiz[0][2] quiz[0][4] === quiz[0][8] ==== true
// quiz[1] => quiz[1][0] quiz[1][2] quiz[1][4] === quiz[1][8] ==== true

// 1. quiz를 공백을 기준으로 분리한다. => 공백을 기준으로 분리하지 않으면 두 자리수 이상일 경우 index가 달라지기 때문이다.
// ex) quiz === ["5 + 6 = 11"] 일 경우 quiz[0] + quiz[4]의 결과값이 11이어야 하는데 11의 index는 quiz[0][8]과 quiz[0][9]로 나뉘어지기 때문이다.
// 2. 연산자가 '+'이고 x + y === z이면 'O'를 추가하고
// 3. 연산자가 '+'이고 x + y !== z이면 'X'를 추가하고
// 4. 연산자가 '-'이고 x + y === z이면 'O'를 추가하고
// 5. 연산자가 '-'이고 x + y !== z이면 'X'를 추가한다.

function solution(quiz) {
  let splitQuiz = [];

  for (let i = 0; i < quiz.length; i++) {
    splitQuiz.push(quiz[i].split(' '))
  }

  let result = [];

  for (let j = 0; j < splitQuiz.length; j++) {
    if (splitQuiz[j][1] === '+' && Number(splitQuiz[j][0]) + Number(splitQuiz[j][2]) === Number(splitQuiz[j][4])) {
      result.push('O')
    } else if (splitQuiz[j][1] === '+' && Number(splitQuiz[j][0]) + Number(splitQuiz[j][2]) !== Number(splitQuiz[j][4])) {
      result.push('X')
    } else if (splitQuiz[j][1] === '-' && Number(splitQuiz[j][0]) - Number(splitQuiz[j][2]) === Number(splitQuiz[j][4])) {
      result.push('O')
    } else if (splitQuiz[j][1] === '-' && Number(splitQuiz[j][0]) - Number(splitQuiz[j][2]) !== Number(splitQuiz[j][4])) {
      result.push('X')
    }
  }
  return result;
}


// 아래와 같이 '+', '-' 구분없이 한번에 조건문을 작성하게 되면 ["19 - 6 = 13"]가 들어갈 경우
// 두번째 조건인 'Number(result[j][0]) + Number(result[j][2]) !== Number(result[j][4])'에 걸려버려서
// 'O'가 아닌 'X'가 리턴된다.

// function solution(quiz) {
//   let result = [];

//   for (let i = 0; i < quiz.length; i++) {
//     result.push(quiz[i].split(' '))
//   }

//   let result2 = [];
    
//   for (let j = 0; j < result.length; j++) {
//     if (Number(result[j][0]) + Number(result[j][2]) === Number(result[j][4])) {
//       result2.push('O')
//     } else if (Number(result[j][0]) + Number(result[j][2]) !== Number(result[j][4])) {
//       result2.push('X')
//     } else if (Number(result[j][0]) - Number(result[j][2]) === Number(result[j][4])) {
//       result2.push('O')
//     } else if (Number(result[j][0]) - Number(result[j][2]) !== Number(result[j][4])) {
//       result2.push('X')
//     }
//   }
//   return result2;
// }