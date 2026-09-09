import Index from "./pages/Index.js"
import NotFound from "./pages/NotFound.js";
import { get } from "./lib/router.js";
import {PageContainer} from "./pages/container/PageContainer.js";

const rootElement = get(window.location.href, {
    "/": () => PageContainer(Index())
}, NotFound);

document.body.appendChild(rootElement());
