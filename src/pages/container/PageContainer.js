import { element } from "../../lib/element.js";

/**
 * @param {Element} content
 * @returns {Element}
 */
export function PageContainer(content) {
    return element`<div id="page-container">
        <header>
            <p>Header</p>
        </header>
        <div class="page-content">
            ${content}
            <footer>
                <p>Made with no Sugar :)</p>
            </footer>
        </div>
    </div>`;
}