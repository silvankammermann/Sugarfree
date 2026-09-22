import {element} from "../lib/element.js";

/**
 * @returns {Element}
 */
export default function Tests() {
    return element`<div>
        <h1>Test overview</h1>
        
        <p>Render test results here ...</p>
        
    </div>`
}