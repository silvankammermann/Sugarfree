import {element} from "../lib/element.js";
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
        <p>
            Sugarfree is a boilerplate for developing modern websites.
            It is purely based on HTML, CSS and JS and intended to run in a browser context.
            No server-side functions, no dependencies and no package manager. Hence, the name.
        </p>
        
        <h2>Core features</h2>
        <p>
            Most of the boilerplate is simply a suggestion on how to structure the application in a clean way.
            However, the modules in <code>/src/lib/</code> contain the library with all the core functions.
            Sugarfree currently supports:
        </p>
        
        <ul>
            <li>String template to HTML Element conversion</li>
            <li>Routing</li>
            <li>A minimal testing library</li>
        </ul>
        
        <p>
            They are not a lot.
            This is intentional as Sugarfree doesn't aim to be a framework but rather a starting point to be further developed.
        </p>
        
        <h2>Getting started</h2>
        <p>
            To use Sugarfree, simply clone the repository at
            <a href="https://github.com/silvankammermann/Sugarfree" target="_blank">https://github.com/silvankammermann/Sugarfree</a>
            and start developing.
            To get rid of the commit history, just delete the <code>.git</code> directory.
            Now, serve the <code>index.html</code> as a single page application using any webserver you like.
            E.g. I use node.js and start the server with:
        </p>
        
        ${Codeblock("npx serve -s", "bash")}
                
    </main>`;
}
