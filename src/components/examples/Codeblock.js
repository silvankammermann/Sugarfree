import {element} from "../../lib/element.js";

/**
 * @typedef {Object} CodeblockOptions
 * @property {string} classes
 */

/**
 *
 * @param {string} text
 * @param {CodeblockOptions} options - optional
 * @returns {Element}
 */
export default function Codeblock(text, { classes = "" } = {}) {
    return element`<pre class="codeblock ${classes}">
        ${text}
    </pre>`;
}