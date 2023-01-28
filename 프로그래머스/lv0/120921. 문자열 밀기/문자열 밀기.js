// 1. A와 B가 같으면 바로 0을 리턴한다.
// 2. Array 메서드를 사용하기 위해 A를 배열(arrA)로 바꾼다.
// 3. arrA의 마지막 단어를 추출(pop)하고, 다시 arrA의 맨 앞에 추가(unshift)한다.
// 4. 만약 오른쪽으로 한 칸씩 미는 작업을 arrA.length - 1번 하는 동안(arrA의 길이만큼 돌 경우 다시 원래의 단어로 돌아옴)
// 문자열로 합친(join) arrA가 B와 같아진다면 같아졌을때(같아질 때까지 3번 과정 반복)의 i(반복한 횟수)를 리턴하고,
// 5. 반복이 끝나도 같아지지 않는다면 -1을 리턴한다.

function solution(A, B) {  // 'hello'
    if (A === B) {
        return 0;
    }

    let arrA = A.split('');  // ['h', 'e', 'l', 'l', 'o']

    for (let i = 1; i < arrA.length; i++) {
        let lastWord = arrA.pop();  // 'o'
        arrA.unshift(lastWord);  // ['o', 'h', 'e', 'l', 'l']

        if (arrA.join('') === B) {  // 'ohell'
            return i;
        }
    }
    return -1;
}