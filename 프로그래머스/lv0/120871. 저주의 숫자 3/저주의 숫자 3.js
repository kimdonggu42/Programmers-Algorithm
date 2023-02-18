function solution(n) {
    let arr = [];
    
    for (let i = 1; i <= 200; i++) {
        if (i % 3 === 0 || String(i).includes('3')) {
            continue;
        } else {
            arr.push(i);
        }
    }
    return arr[n-1];
}