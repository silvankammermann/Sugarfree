import Index from "./pages/Index.js"
import NotFound from "./pages/NotFound.js";
import { get } from "./lib/router.js";
import PageContainer from "./pages/container/PageContainer.js";
import Tests from "./pages/Tests.js";
import Router from "./pages/Router.js";

const [elementCallback, routerContext] = get(window.location.href, {
    "/": PageContainer(Index),
    "/router": PageContainer(Router),
    "/tests": PageContainer(Tests)
}, NotFound);

/**
 * Extend the router context with e.g. user information or a JWT
 * @typedef {Object} SiteContext
 * @extends RouterContext
 */

console.log(routerContext)

/**
 * @type {SiteContext}
 */
const siteContext = { ...routerContext }

document.body.appendChild(elementCallback(siteContext))
