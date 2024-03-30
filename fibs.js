function fibs(num) {
    let arr = []
    for (let i = 0; i < num; i++) {
        let arrayLen = arr.length;
        if (arrayLen < 2) {
            arr.push(i);
        } else {
            arr.push(arr[arrayLen - 2] + arr[arrayLen - 1]);
        }
    }
    return arr;
}

console.log(fibs(8))