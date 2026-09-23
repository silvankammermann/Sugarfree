import { element } from "../../lib/element.js";

/**
 * @param {(SiteContext) => Element} content
 * @returns {(SiteContext) => Element}
 */
const PageContainer = content => ctx => {
    return element`<div id="page-container">
        <header>
            <p>Header</p>
        </header>
        <div class="page-content">
            ${content(ctx)}
            <footer>
                <p>Made without Sugar :)</p>
            </footer>
        </div>
    </div>`;
}

export default PageContainer;