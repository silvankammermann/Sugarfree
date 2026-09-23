import {element} from "../../lib/element.js";

/**
 *
 * @param {TestResult} result
 * @returns {Element}
 */
export default function TestResultOverview(result) {
    return element`<div class="test-result">
        ${result.passed 
        ? `✓ ${result.description}`
        : element`<div>
            ✕ ${result.description}
            <p>${result.error}</p>
        </div>`}
    </div>`
}