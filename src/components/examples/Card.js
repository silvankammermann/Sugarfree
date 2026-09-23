import {element} from "../../lib/element.js";
/**
 * @typedef {Object} CardOptions
 * @property {string} classes
 */

/**
 * @param {Element | string} content
 * @param {CardOptions} options - optional
 * @returns {Element}
 */
export default function Card(content, { classes = "" } = {}) {
    return element`<div class="card ${classes}">
        ${content}
    </div>`;
}
