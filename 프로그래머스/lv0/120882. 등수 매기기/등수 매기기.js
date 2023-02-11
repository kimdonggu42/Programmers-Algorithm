function solution(score) {
    let averageArr = [];  // [75, 75, 40, 95, 95, 100, 20]
    
    for (let i = 0; i < score.length; i++) {
        averageArr.push((score[i][0] + score[i][1]) / 2);
    }

    let sortedAverageArr = averageArr.slice().sort((a, b) => b - a);  //  [100, 95, 95, 75, 75, 40, 20]

    let result = [];
    
    for (let i = 0; i < sortedAverageArr.length; i++) {
        result.push(sortedAverageArr.indexOf(averageArr[i]) + 1);
    }
    return result;
}