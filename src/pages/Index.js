import { element } from "../lib/element.js";
import Codeblock from "../components/examples/Codeblock.js";

/**
 * @typedef {(SiteContext) => Element} PageComponent
 */

/**
 * @type {PageComponent}
 */
export default function Index() {
    return element`<main>
        <h1>Sugarfree</h1>
        
        <h2>Element</h2>
        
        ${Codeblock("element`<p>Lorem Ipsum</p>`", "javascript")}
        
    </main>`;
}
