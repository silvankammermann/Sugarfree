import {element} from "../../lib/element.js";

/**
 * @typedef {Object} CodeblockOptions
 * @property {string} classes
 */

/**
 * This component requires an external library `prism` for Code highlighting. No errors will be produced if the `prism` is missing, but the code will not be highlighted.
 *
 * @param {string} text
 * @param {string} language - optional (E.g. `javascript`, `java`, etc.) used for code highlighting
 * @param {CodeblockOptions} options - optional
 * @returns {Element}
 */
export default function Codeblock(text, language = "", { classes = "" } = {}) {
    return element`<pre class="codeblock ${language ? `language-${language}` : ""} ${classes}"><code>${text}</code></pre>`;
}