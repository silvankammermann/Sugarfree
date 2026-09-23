import {element} from "../lib/element.js";
import TestResultOverview from "../components/examples/TestResultOverview.js";
import {routerTests} from "../test/router.test.js";

/**
 * @returns {Element}
 */
export default function Tests() {
    return element`<main>
        <h1>Test overview</h1>
        
        <h3>Router Tests</h3>
        ${routerTests.map(TestResultOverview)}
        
        <h3>Element Tests</h3>
        ${routerTests.map(TestResultOverview)}
    </main>`
}