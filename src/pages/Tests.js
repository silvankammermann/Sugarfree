import {element} from "../lib/element.js";
import TestResultOverview from "../components/examples/TestResultOverview.js";
import {routerTests} from "../test/router.test.js";
import {elementTests} from "../test/element.test.js";

/**
 * @type {PageComponent}
 */
export default function() {
    return element`<main>
        <h1>Test overview</h1>
        
        <h3>Router Tests</h3>
        ${routerTests.map(TestResultOverview)}
        
        <h3>Element Tests</h3>
        ${elementTests.map(TestResultOverview)}
    </main>`
}
