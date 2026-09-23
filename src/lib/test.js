/**
 * @typedef {Object} TestResult
 * @property {string} description
 * @property {boolean} passed
 * @property {string} error - (optional) only set if `passed` is false.
 */

/**
 *
 * @param {string} description
 * @param {() => void} runner
 * @returns {{description: *, passed: boolean}|{description: *, passed: boolean, error}}
 */
export function test(description, runner) {
    const testResult = { description };
    try {
        runner();
        return {
            ...testResult,
            passed: true
        };
    } catch (error) {
        return {
            ...testResult,
            passed: false,
            error
        }
    }
}

/**
 * @typedef {Object} ExpectFunctios
 * @property {(any) => void} toBe - uses the `===` operator to determine equality.
 * @property {() => void} toThrow
 * @property {() => void} toBeTruthy
 * @property {() => void} toBeFalsy
 */

/**
 * Use this function to test with primitive values. For Objects and Arrays use `expectObject` and `expectArray` respectively.
 *
 * @param {any} actual
 * @returns {ExpectFunctios}
 */
export function expect(actual) {
    return {
        toBe: (expected) => {
            if (actual !== expected) {
                throw new Error(`Expected ${expected} (${typeof expected}), but got ${actual} (${typeof actual})`);
            }
        },
        toThrow: () => {
            if (typeof actual !== "function") throw new Error(`Expected a Function but got ${typeof actual}`)

            try {
                actual()
            } catch {
                return;
            }

            throw new Error(`Expected function to throw, but it did not`)
        },
        toBeTruthy: () => {
            if (actual) {}
            else throw new Error(`Expected ${actual} to be truthy, but was falsy`)
        },
        toBeFalsy: () => {
            if (actual) throw new Error(`Expected ${actual} to be falsy, but was truthy`)
        }
    }
}

/**
 * @typedef {Object} ExpectArrayFunctions
 * @property {(number) => void} toBeOfLength
 * @property {() => void} toBeEmpty
 */

/**
 *
 * @param actual
 * @returns {ExpectArrayFunctions}
 */
export function expectArray(actual) {
    return {
        toBeOfLength: (n) => {
            if (actual.length !== n) throw new Error(`Expected Array length to be ${n}, but was ${actual.length}`)
        },
        toBeEmpty: () => {
            if (actual.length !== 0) throw new Error(`Expected Array to be empty, but has ${actual.length} elements`)
        },
        // toEqual: (expected) => {},
        // toContain: (item) => {},
        // toNotContain: (item) => {},
        // toHaveTheSameReferenceAs: () => {},
    }
}

/**
 * @typedef {Object} ExpectObjectFunctions
 * @property {() => void} toBeEmpty
 */

/**
 *
 * @param actual
 * @returns {ExpectObjectFunctions}
 */
export function expectObject(actual) {
    return {
        toBeEmpty: () => {
            if (Object.keys(actual).length > 0)
                throw new Error(`Expected Object to be empty, but got the following properties: ${Object.keys(actual).join(", ")}`)
        }
        // toHaveProperty: (property) => {},
        // toNotHaveProperty: (property) => {},
        // toEqual: (expected) => {},
        // toHaveTheSameReferenceAs: () => {},
    }
}