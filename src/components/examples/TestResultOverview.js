import {element} from "../../lib/element.js";

/**
 *
 * @param {TestResult} result
 * @returns {Element}
 */
export default function TestResultOverview(result) {
    return element`<div class="test-result">
        ${result.passed 
        ? element`<div><span class="text-success">✓</span> ${result.description}</div>`
        : element`<div>
            <span class="text-error">✕</span> ${result.description}
            <p>${result.error}</p>
        </div>`}
    </div>`
}