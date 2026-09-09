/**
 *
 * @param {string[]} html
 * @param {...(string | Element | Element[])} values
 * @returns {Element}
 */
export function element(html, ...values) {
    const template = document.createElement("template");
    const elements = [];

    if (html.length === 0) throw new Error("HTML string cannot be empty.");

    let innerHTML = html[0];
    for (let i = 1; i < html.length; i++) {
        const value = values[i - 1];
        if (value instanceof Element) {
            innerHTML += `<placeholder></placeholder>`;
            elements.push(value);
        } else if (Array.isArray(value)) {
            innerHTML += value.map(() => `<placeholder></placeholder>`).join("");
            elements.push(...value);
        } else {
            innerHTML += value;
        }
        innerHTML += html[i];
    }
    template.innerHTML = innerHTML;

    const root = template.content.firstElementChild;

    for (const element of elements) {
        root.querySelector("placeholder").replaceWith(element);
    }

    return root;
}