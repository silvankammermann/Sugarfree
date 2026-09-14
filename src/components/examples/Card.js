import {element} from "../../lib/element.js";
/**
 * @typedef {Object} CardParams
 * @property {Element} content
 * @property {string} classes - optional
 */

/**
 * @param {CardParams}
 * @returns {Element}
 */
export default function Card({content, classes}) {
    return element`<div class="card ${classes}">
        ${content}
    </div>`;
}
