import {element} from "../../lib/element.js";
/**
 * @typedef {Object} AccordionOptions
 * @property {boolean} initiallyClosed
 * @property {string} classes
 */

/**
 * @param {Element | string} trigger
 * @param {Element} content
 * @param {AccordionOptions} options - optional
 * @returns {Element}
 */
export default function Accordion( trigger, content, {
    initiallyClosed = true,
    classes = ""
} = {}) {

    const triggerElement = typeof trigger === "string"
        ? element`<div class="std-trigger">
            <p>${trigger}</p>
            <p class="indicator">v</p>
        </div>`
        : trigger

    const accordion = element`<div class="accordion ${initiallyClosed ? "" : "open"} ${classes}">
        <div class="trigger">
            ${triggerElement}
        </div>
        <div class="content">${content}</div>
    </div>`;

    accordion.querySelector(".trigger").addEventListener("click", () => {
        accordion.classList.toggle("open");
    });

    return accordion;
}