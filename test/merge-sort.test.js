const mergeSort = require("../src/merge-sort");

it("Returns a sorted array", () => {
    expect(mergeSort([1,5,3,2,4])).toEqual([1,2,3,4,5]);
})

it("Returns the input array when its length is 1", () => {
    expect(mergeSort([1])).toEqual([1]);
})