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
export default function Codeblock(text, language = "", { classes = "" } = {}) {
    return element`<pre class="codeblock ${language ? `language-${language}` : ""} ${classes}"><code>${text}</code></pre>`;
}