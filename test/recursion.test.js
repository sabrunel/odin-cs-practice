const recursion = require('../src/recursion');


describe("fibs", () => {
    it("Returns an array with the 8 first terms of the Fibonacci Sequence", () => {
        expect(recursion.fibs(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
    })

    it("Returns [0] when the input number is 0", () => {
        expect(recursion.fibs(0)).toEqual([0]);
    })

    it("Returns [1] when the input number is 1", () => {
        expect(recursion.fibs(1)).toEqual([1]);
    })

    it("Throws an error when no input number is supplied", () => {
        expect(() => {
            recursion.fibs("");
        }).toThrow();
    })

    it("Throws an error when input number is negative", () => {
        expect(() => {
            recursion.fibs(-1);
        }).toThrow();
    })
})

describe("fibsRec", () => {
    it("Returns an array with the 8 first terms of the Fibonacci Sequence", () => {
        expect(recursion.fibsRec(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
    })

    it("Returns [0] when the input number is 0", () => {
        expect(recursion.fibsRec(0)).toEqual([0]);
    })

    it("Returns [1] when the input number is 1", () => {
        expect(recursion.fibsRec(1)).toEqual([1]);
    })

    it("Throws an error when no input number is supplied", () => {
        expect(() => {
            recursion.fibsRec("");
        }).toThrow();
    })

    it("Throws an error when input number is negative", () => {
        expect(() => {
            recursion.fibsRec(-1);
        }).toThrow();
    })
})