import Index from "./pages/Index.js"
import NotFound from "./pages/NotFound.js";
import { get } from "./lib/router.js";
import PageContainer from "./pages/container/PageContainer.js";
import Tests from "./pages/Tests.js";

const [elementCallback, routerContext] = get(window.location.href, {
    "/": PageContainer(Index),
    "/tests": PageContainer(Tests)
}, NotFound);

/**
 * @typedef {Object} SiteContext
 * @extends RouterContext
 */

/**
 * @type {SiteContext}
 *
 * Extend the router context with e.g. user information or a JWT
 */
const siteContext = { ...routerContext }

document.body.appendChild(elementCallback(siteContext))
