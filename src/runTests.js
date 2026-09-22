/**
 * Import tests from `/src/tests/` here and push it to `allTests`.
 * Run this file to see the test results on the console. E.g. `node src/runTests.js`
 */

const allTests = []

let failedCount = 0;

allTests.forEach(result => {
    console.log(result.passed ? "✓" : "✕", result.description);
    if (!result.passed) {
        console.log(result.error);
        failedCount++;
    }
});

console.log("==========================")
console.log(`  ${allTests.length} Tests executed`)
console.log(`✓ ${allTests.length - failedCount} Tests passed`)
console.log(`✕ ${failedCount} Tests failed`)
