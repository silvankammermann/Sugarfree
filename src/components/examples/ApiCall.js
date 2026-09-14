import {element} from "../../lib/element.js";

/**
 * @returns {Element}
 */
export default function ApiCall() {
    const e = element`<div>
        <h2>Cat Fact</h2>
        <p>Loading ...</p>
    </div>`;

    fetch("https://catfact.ninja/fact")
        .then(res => res.json())
        .then(data => e.querySelector("p").textContent = data.fact)
        .catch(() => e.querySelector("p").textContent = "Error while loading cat fact")

    return e;
}