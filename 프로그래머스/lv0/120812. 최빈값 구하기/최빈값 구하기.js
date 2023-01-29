function solution(array) {
    let countObj = {};

    for (let i = 0; i < array.length; i++) {
        if (countObj[array[i]]) {
            countObj[array[i]] += 1;
        } else {
            countObj[array[i]] = 1;
        }
    }
    let maxValue = Math.max(...Object.values(countObj));

    let mode = Object.keys(countObj).filter((key) => countObj[key] === maxValue);

    if (mode.length === 1) {
        return Number(mode[0])
    } else {
        return -1
    }
}