function solution(spell, dic) {
    let sortedSpell = spell.sort().join('');
    let sortedDic = [];

    for (let i = 0; i < dic.length; i++) {
        sortedDic.push(dic[i].split('').sort().join(''));
    }

    if (sortedDic.includes(sortedSpell)) {
        return 1;
    } else {
        return 2;
    }
}