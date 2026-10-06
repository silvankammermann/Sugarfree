import {element} from "../../lib/element.js";

/**
 * @param {...Element} columns
 * @returns {Element}
 */
export default function Columns(...columns) {
    return element`<div class="columns">
        ${columns}
    </div>`
}