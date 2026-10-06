import {element} from "../../lib/element.js";

/**
 * @returns {Element}
 */
export default function Header() {
    return element`<header class="header">
        <a href="/" class="home-link">
            Sugarfree
        </a>
        <nav class="navigation">
            <a href="/element">Element</a>
            <a href="/router">Router</a>
            <a href="/tests">Tests</a>
        </nav>
    </header>`
}