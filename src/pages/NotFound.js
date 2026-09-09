import { element } from "../lib/element.js";

/**
 * @returns {Element}
 */
export default function NotFound() {
    return element`<main>
        <h1>Aww, snap!</h1>
        <p>This page doesn't exist :(</p>
    </main>`;
}