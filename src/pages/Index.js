import { element } from "../lib/element.js";
import Card from "../components/examples/Card.js";
import Codeblock from "../components/examples/Codeblock.js";

/**
 * @typedef {(SiteContext) => Element} PageComponent
 */

/**
 * @type {PageComponent}
 */
export default function Index() {
    return element`<main>
        <h1>Hello World</h1>
        
        ${Codeblock(`console.log("Guaccamole")`, "javascript")}
        
    </main>`;
}
