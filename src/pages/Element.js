import {element} from "../lib/element.js";
import Codeblock from "../components/examples/Codeblock.js";
import Columns from "../components/examples/Columns.js";
import Accordion from "../components/examples/Accordion.js";
import {escapeHtml} from "../lib/util.js";

/**
 * @type {PageComponent}
 */
export default function Element() {
    return element`<main>
        <h1>Element</h1>
        <p>
            The <code>element()</code> Function takes an HTML String and converts it to an actual Element.
            Do not confuse it with JSX, although the syntax is very similar.
            Here is a simple example for creating an H1 Element and displaying it.
        </p>
        
        ${Codeblock(
        "const title = element`<h1>Hello World</h1>`;\n" +
        "document.body.appendChild(title);",
        "javascript")}
        
        <h2>Inserting variables</h2>
        <p>Since we use string templates, we can very easily use variables.</p>
        
        ${Codeblock(
        `const name = "Alice";\n` +
        "const title = element`<h1>Greetings, ${name}</h1>`;\n" +
        "document.body.appendChild(title);",
        "javascript")}

        <p>This also works with Other Elements or Lists.</p>
        
        ${Columns(Codeblock(
            "const title = element`<h1>Hello World</h1>`\n" +
            "const page = element`<main>\n" +
            "    ${title}\n" +
            "    <p>Lorem Ipsum dolor sit amet ...</p>\n" +
            "</main>`\n" +
            "\n" +
            "document.body.appendChild(page)",
            "javascript"),
        Codeblock(
            `const groceries = ["Apples", "Bananas", "Potatoes"]\n` +
            "const groceryList = element`<ul>\n" +
            "    ${groceries.map(g => element`<li>${g}</li>`)}\n" +
            "</ul>`;\n" +
            "\n" +
            "document.body.appendChild(groceryList);",
            "javascript"))}
        
        <h2>Components</h2>
        <p>
            Components are functions that return an Element.
            They are very similar to react components.
            Here is an example.
        </p>
        
        ${Codeblock(
        "function Card(content, { classes = \"\" } = {}) {\n" +
        "    return element`<div class=\"card ${classes}\">\n" +
        "        ${content}\n" +
        "    </div>`;\n" +
        "}",
        "javascript")}
        
        <p>
            I recommend putting each component into their own <code>.js</code> File and exporting the function.
            I also have the styles for all components in <code>/src/styles/components.css</code>.
            Here is an example of the Accordion component.
        </p>
        
        ${Accordion("Accordion Component", Codeblock(
        "/**\n" +
        " * @typedef {Object} AccordionOptions\n" +
        " * @property {boolean} initiallyClosed\n" +
        " * @property {string} classes\n" +
        " */\n" +
        "\n" +
        "/**\n" +
        " * @param {Element | string} trigger\n" +
        " * @param {Element} content\n" +
        " * @param {AccordionOptions} options - optional\n" +
        " * @returns {Element}\n" +
        " */\n" +
        "export default function Accordion( trigger, content, {\n" +
        "    initiallyClosed = true,\n" +
        "    classes = \"\"\n" +
        "} = {}) {\n" +
        "\n" +
        "    const triggerElement = typeof trigger === \"string\"\n" +
        "        ? element`<div class=\"std-trigger\">\n" +
        "            <p>${trigger}</p>\n" +
        "            <p class=\"indicator\">v</p>\n" +
        "        </div>`\n" +
        "        : trigger\n" +
        "\n" +
        "    const accordion = element`<div class=\"accordion ${initiallyClosed ? \"\" : \"open\"} ${classes}\">\n" +
        "        <div class=\"trigger\">\n" +
        "            ${triggerElement}\n" +
        "        </div>\n" +
        "        <div class=\"content\">${content}</div>\n" +
        "    </div>`;\n" +
        "\n" +
        "    accordion.querySelector(\".trigger\").addEventListener(\"click\", () => {\n" +
        "        accordion.classList.toggle(\"open\");\n" +
        "    });\n" +
        "\n" +
        "    return accordion;\n" +
        "}",
        "javascript", {classes: "no-border"}))}
        <br />
        ${Accordion("Accordion Styles", Codeblock(
        "/*\n" +
        "+---------------+\n" +
        "|   Accordion   |\n" +
        "+---------------+\n" +
        "*/\n" +
        "\n" +
        ".accordion {\n" +
        "    border: 1px solid var(--text);\n" +
        "}\n" +
        "\n" +
        ".accordion .std-trigger {\n" +
        "    padding: 0 1em;\n" +
        "    display: flex;\n" +
        "    justify-content: space-between;\n" +
        "}\n" +
        "\n" +
        ".accordion .trigger:hover {\n" +
        "    cursor: pointer;\n" +
        "    user-select: none;\n" +
        "}\n" +
        "\n" +
        ".accordion.open .trigger .indicator {\n" +
        "    transform: rotate(180deg);\n" +
        "}\n" +
        "\n" +
        ".accordion .content {\n" +
        "    display: grid;\n" +
        "    grid-template-rows: 0fr;\n" +
        "    overflow: hidden;\n" +
        "}\n" +
        "\n" +
        ".accordion .content > * {\n" +
        "    overflow: hidden;\n" +
        "}\n" +
        "\n" +
        ".accordion.open .content {\n" +
        "    border-top: 1px solid var(--text);\n" +
        "    grid-template-rows: 1fr;\n" +
        "}",
        "css", {classes: "no-border"}))}

        <h2>Page Components</h2>
        <p>
            Page components are technically the same as the components mentioned above.
            The difference lies in their application.
            I use page components for all the page content and usually surround it all with the <code>${escapeHtml("<main>")}</code> tag.
        </p>
        <p>> Page components really only make sense if you're using the router. Check out the <a href="/router">router documentation</a> to learn more.</p>
        
        <h2>Page Containers</h2>
        <p>
            Additionally, to page components you can use page containers.
            A page container is a curried function that first takes the inner page component and secondly the site context.
            The container builds the site wrapper like header and footer and inserts the content by passing the context to the content.
            Here is an example.
        </p>
        
        ${Codeblock("import { element } from \"../../lib/element.js\";\n" +
        "import Header from \"../../components/examples/Header.js\";\n" +
        "\n" +
        "/**\n" +
        " * @param {(SiteContext) => Element} content\n" +
        " * @returns {(SiteContext) => Element}\n" +
        " */\n" +
        "const PageContainer = content => ctx => {\n" +
        "    return element`<div id=\"page-container\">\n" +
        "        ${Header()}\n" +
        "        <div class=\"page-content\">\n" +
        "            ${content(ctx)}\n" +
        "            <footer>\n" +
        "                <p>Made without Sugar :)</p>\n" +
        "            </footer>\n" +
        "        </div>\n" +
        "    </div>`;\n" +
        "}\n" +
        "\n" +
        "export default PageContainer;",
        "javascript")}
        
        <p>Now, you can use the container with the router like this.</p>
        
        ${Codeblock(
        "const [element, context] = get(window.location.href,\n" +
        "{\n" +
        `   "/": PageContainer(Index)\n` +
        "}, PageContainer(NotFound))\n" +
        "\n" +
        "document.body.appendChild(element(context));",
        "javascript")}
        
    </main>`;
}