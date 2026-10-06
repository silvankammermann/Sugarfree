import {element} from "../lib/element.js";
import Codeblock from "../components/examples/Codeblock.js";
import Columns from "../components/examples/Columns.js";

/**
 * @type {PageComponent}
 */
export default function Router() {

    return element`<main>
        <h1>Router</h1>
        <p>
            The Router module is resposible for rendering the correct page components based on the current URL.
            It exports the <code>get()</code> function.
        </p>
        
        <h2>Example</h2>
        
        <p>
            Let's say we have a simple website with an Index, About and Contact page. Each page should have a page component.
            With <code>get()</code> we register all paths, provide the current URL and either get the correspondig page component or a fallback page component.
            Next to the <code>element</code> we also the <code>context</code> which will be passed to the page component.
            Finally we can append the element to the document body. 
        </p>
        
        ${Codeblock(
        "const [element, context] = get(window.location.href, {" +
        `\n\t"/": Index` +
        `\n\t"/about": About` +
        `\n\t"/contact": Contact` +
        "\n}, NotFound);" +
        "\n\ndocument.body.appendChild(element(context))",
        "javascript")}
        
        <h2>Parameters</h2>
        <p>The <code>get</code> function has 3 Parameters.</p>
        <ul>
            <li><code>urlString</code> - The entire current URL. Usually always <code>window.location.href</code>.</li>
            <li><code>routes</code> - An object with all available routes and their corresponding page components.</li>
            <li><code>fallback</code> - The fallback components in case no routes match the current route. This is essentially our 404-page.</li>
        </ul>
        
        <h2>Path Parameters and Search Parameters</h2>
        <p>
            The router allows to read path- and search parameters from the URL.
            Let's say an online shop has a product catalog page where products can be ordered by price and a product page for displaying a single product.
            We can register the routes like this.
        </p>
        
        ${Codeblock(
        "const [element, context] = get(window.location.href, {" +
        `\n\t"/": Index` +
        `\n\t"/products": Catalog` +
        `\n\t"/products/{id}": Product` +
        "\n}, NotFound);",
        "javascript")}
        
        <p>
            Now, depending on the URL which calls the website, the context object contains different information.
            The information can be accessed inside the page component.
        </p>
        
        ${Columns(
            element`<div>
                <h3>Search Parameter</h3>
                URL: <code>https://example.com/products?price=asc</code>
                <p>Context object:</p>
                ${Codeblock(
                "{" +
                `\n\tpathParams: {}` +
                `\n\tsearchParams: { price: "asc" }` +
                "\n}",
                "javascript")}
            </div>`,
            element`<div>
                <h3>Path Parameter</h3>
                URL: <code>https://example.com/products/17</code>
                <p>Context object:</p>
                ${Codeblock(
                "{" +
                `\n\tpathParams: { id: "17" }` +
                `\n\tsearchParams: {}` +
                "\n}",
                "javascript")}
            </div>`
        )}
        
        <p>We can now pass this context object to the page component and access the values from there.</p>
        
        ${Columns(
            Codeblock(
            "export default function Product(ctx) {" +
            "\n\t// ..." +
            "\n}", "javascript"),
            Codeblock(
            "export default function Catalog(ctx) {" +
            "\n\t// ..." +
            "\n}", "javascript")
        )}
    </main>`;
}