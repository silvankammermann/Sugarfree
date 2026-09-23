import { test, expect } from "../lib/test.js";
import { element } from "../lib/element.js";

/**
 * This file was generated using AI.
 */

export const elementTests = [
    test("element() creates simple div element", () => {
        const el = element`<div>Hello World</div>`;
        expect(el.tagName).toBe("DIV");
        expect(el.textContent).toBe("Hello World");
    }),

    test("element() interpolates string values", () => {
        const name = "Alice";
        const el = element`<p>Hello ${name}</p>`;
        expect(el.tagName).toBe("P");
        expect(el.textContent).toBe("Hello Alice");
    }),

    test("element() interpolates multiple string values", () => {
        const firstName = "John";
        const lastName = "Doe";
        const el = element`<span>${firstName} ${lastName}</span>`;
        expect(el.textContent).toBe("John Doe");
    }),

    test("element() creates element with attributes", () => {
        const id = "my-button";
        const el = element`<button id="${id}" class="btn">Click</button>`;
        expect(el.id).toBe("my-button");
        expect(el.className).toBe("btn");
        expect(el.textContent).toBe("Click");
    }),

    test("element() embeds Element objects", () => {
        const inner = element`<strong>Bold</strong>`;
        const outer = element`<div>${inner}</div>`;
        expect(outer.tagName).toBe("DIV");
        expect(outer.querySelector("strong")).toBe(inner);
        expect(outer.textContent).toBe("Bold");
    }),

    test("element() embeds multiple Element objects", () => {
        const span1 = element`<span>First</span>`;
        const span2 = element`<span>Second</span>`;
        const container = element`<div>${span1}${span2}</div>`;
        expect(container.children.length).toBe(2);
        expect(container.children[0]).toBe(span1);
        expect(container.children[1]).toBe(span2);
    }),

    test("element() embeds array of Elements", () => {
        const items = [
            element`<li>Item 1</li>`,
            element`<li>Item 2</li>`,
            element`<li>Item 3</li>`
        ];
        const list = element`<ul>${items}</ul>`;
        expect(list.tagName).toBe("UL");
        expect(list.children.length).toBe(3);
        expect(list.children[0]).toBe(items[0]);
        expect(list.children[1]).toBe(items[1]);
        expect(list.children[2]).toBe(items[2]);
    }),

    test("element() mixes strings and Elements", () => {
        const name = "World";
        const strong = element`<strong>${name}</strong>`;
        const el = element`<p>Hello ${strong}!</p>`;
        expect(el.textContent).toBe("Hello World!");
        expect(el.querySelector("strong")).toBe(strong);
    }),

    test("element() throws error for empty HTML array", () => {
        expect(() => element([])).toThrow();
    }),

    test("element() creates nested structure", () => {
        const title = "My Title";
        const content = element`<p>Content here</p>`;
        const card = element`<div class="card">
            <h2>${title}</h2>
            ${content}
        </div>`;
        expect(card.className).toBe("card");
        expect(card.querySelector("h2").textContent).toBe("My Title");
        expect(card.querySelector("p")).toBe(content);
    }),

    test("element() handles empty array of elements", () => {
        const items = [];
        const list = element`<ul>${items}</ul>`;
        expect(list.children.length).toBe(0);
    }),

    test("element() with numeric values", () => {
        const count = 42;
        const price = 19.99;
        const el = element`<div>Count: ${count}, Price: ${price}</div>`;
        expect(el.textContent).toBe("Count: 42, Price: 19.99");
    }),

    test("element() preserves element structure with multiple interpolations", () => {
        const header = element`<header>Top</header>`;
        const footer = element`<footer>Bottom</footer>`;
        const text = "Middle Content";
        const container = element`<div>${header}<main>${text}</main>${footer}</div>`;
        expect(container.children.length).toBe(3);
        expect(container.children[0]).toBe(header);
        expect(container.children[1].tagName).toBe("MAIN");
        expect(container.children[1].textContent).toBe("Middle Content");
        expect(container.children[2]).toBe(footer);
    })
];
