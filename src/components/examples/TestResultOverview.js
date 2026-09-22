import {element} from "../../lib/element.js";

/**
 *
 * @param {TestResult} result
 * @returns {Element}
 */
export default function TestResultOverview(result) {
    return element`<div class="test-result">
        <p>${result.passed ? "✓" : "✕"} ${result.description}</p>
        ${result.passed ? "" : element`<pre>${result.error}</pre>`}
    </div>`
}