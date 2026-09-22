import Index from "./pages/Index.js"
import NotFound from "./pages/NotFound.js";
import { get } from "./lib/router.js";
import {PageContainer} from "./pages/container/PageContainer.js";
import Tests from "./pages/Tests.js";

const rootElement = get(window.location.href, {
    "/": () => PageContainer(Index()),
    "/tests": () => PageContainer(Tests())
}, NotFound);

document.body.appendChild(rootElement());
