import {element} from "../../lib/element.js";
import Accordion from "./Accordion.js";
import Codeblock from "./Codeblock.js";

/**
 *
 * @param {TestResult} result
 * @returns {Element}
 */
export default function TestResultOverview(result) {
    element`<div class="test-result">
        ${result.passed 
        ? element`<div><span class="text-success">✓</span> ${result.description}</div>`
        : element`<div>
            <span class="text-error">✕</span> ${result.description}
            <p>${result.error}</p>
        </div>`}
    </div>`;

    return Accordion(
        `<span class="text-success ${result.passed ? "text-success" : "text-error"}">
                ${result.passed ? "✓" : "✕"}
            </span>
            ${result.description}`,
        element`<div class="margin">
            ${!result.passed ? element`<p class="text-error">${result.error}</p>` : ""} 
            ${Codeblock(result.fn.toString(), "javascript")}
        </div>`
    )
}