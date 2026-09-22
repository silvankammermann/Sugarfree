import {element} from "../../lib/element.js";
/**
 * @typedef {Object} AccordionParams
 * @property {Element} trigger
 * @property {Element} content
 * @property {string} classes - optional
 */

/**
 * @param {AccordionParams}
 * @returns {Element}
 */
export default function Accordion({ trigger, content, initiallyClosed, classes }) {

    initiallyClosed = initiallyClosed === undefined
        ? true
        : initiallyClosed

    const accordion = element`<div class="accordion ${initiallyClosed ? "" : "open"} ${classes}">
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