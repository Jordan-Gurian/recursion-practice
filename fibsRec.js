let arr = [];

function fibsRec(num) {
    if (num < 2) {
        return num; 
    }
    return fibsRec(num - 2) + fibsRec(num - 1); 
}

for (let i = 0; i < 8; i++) {
    arr.push(fibsRec(i));
}