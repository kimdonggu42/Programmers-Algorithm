function solution(numlist, n) {  // [1, 2, 3, 4, 5, 6]
    let arr = [];
    
    // arr[0]에는 원래 요소를, arr[1]에는 n과의 차를 요소로 가지는 배열 생성
    for (let i = 0; i < numlist.length; i++) {
        arr.push([numlist[i], Math.abs(n - numlist[i])]);  // [[1,3],[2,2],[3,1],[4,0],[5,1],[6,2]]
    }

    // arr[0]을 기준으로 내림차순 정렬
    arr.sort((a, b) => b[0] - a[0]);  // [[6,2],[5,1],[4,0],[3,1],[2,2],[1,3]]
    // arr[1]을 기준으로 다시 오른차순을 정렬
    arr.sort((a, b) => a[1] - b[1]);  // [[4,0],[5,1],[3,1],[6,2],[2,2],[1,3]]

    let result = [];

    // arr[i][0] 요소만 추출
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i][0]);
    }
    
    return result;
}

// function solution(numlist, n) {
//     return numlist.sort((a,b) => {
//         let A = Math.abs(a-n);
//         let B = Math.abs(b-n);
//         // 거리가 같다면 더 큰 수를 우선 배치
//         if(A === B) return b-a
//         // 다르다면 거리별 오름차순 정렬
//         return A-B
//     })
// }