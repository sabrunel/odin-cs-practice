function fibs(n) {
    let fibsArray = [];
    if (n < 0 || n === "") {
        throw new Error("Input number must be an integer >=0");
    } else if (n < 2) {
        fibsArray.push(n);
    } else {
        let currentValue = 1;
        let previousValue = 0;
        fibsArray = [previousValue, currentValue];

        for (let i = 2; i < n; i++) {
            currentValue += previousValue;
            previousValue = currentValue - previousValue;
            fibsArray.push(currentValue);
            }
    }
    return fibsArray;
}

console.log(fibs(8)); 



function fibsRec(n) {
    if (n < 0 || n === "") throw new Error("Input number must be an integer >=0");
    if (n < 2) return [n];
    if (n === 2) return [0,1];

    return [...fibsRec(n-1), fibsRec(n-1)[n-2] + fibsRec(n-1)[n-3]];
}

console.log(fibsRec(8));