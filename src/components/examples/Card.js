import {element} from "../../lib/element.js";
/**
 * @typedef {Object} CardParams
 * @property {Element} content
 */

/**
 * @param {CardParams}
 * @returns {Element}
 */
export default function Card({content}) {
    return element`<div class="card">
        ${content}
    </div>`;
}
