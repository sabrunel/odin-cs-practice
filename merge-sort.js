
function mergeSort(array) {
    // Base case
    if (array.length === 1) return array

    // Split the array in half
    const center = Math.floor(array.length / 2)
    let left = array.slice(0, center);
    let right = array.slice(center, array.length);

    // Recursively split both halves and merge
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    const sortedArray = [];

    while (left.length > 0 && right.length > 0) {
        if (left[0] < right[0]) {
            sortedArray.push(left[0]);
            left.shift();
        } else {
            sortedArray.push(right[0]);
            right.shift();
        }
    }

    while (left.length > 0) {
        sortedArray.push(left[0]);
        left.shift();
    }

    while (right.length > 0) {
        sortedArray.push(right[0]);
        right.shift();
    }

    return sortedArray;
}


console.log(mergeSort([1,5,3,2,4]));