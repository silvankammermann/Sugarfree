import {element} from "../../lib/element.js";
/**
 * @typedef {Object} AccordionParams
 * @property {Element} trigger
 * @property {Element} content
 */

/**
 * @param {AccordionParams}
 * @returns {Element}
 */
export default function Accordion({ trigger, content }) {
    const accordion = element`<div class="accordion">
        <div class="trigger">
            ${trigger}               
        </div>
        <div class="content">${content}</div>
    </div>`;

    accordion.querySelector(".trigger").addEventListener("click", () => {
        accordion.classList.toggle("open");
    });

    return accordion;
}