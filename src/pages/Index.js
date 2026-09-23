import { element } from "../lib/element.js";

/**
 * @typedef {(SiteContext) => Element} PageComponent
 */

/**
 * @type {PageComponent}
 */
export default function Index() {
    return element`<main>
        <h1>Hello World</h1>
    </main>`;
}
