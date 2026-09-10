let pathParams = {};
let searchParams = {};

/**
 * @template T
 * @param {string} urlString The Current Url for which the content should be returned.
 * @param {Object.<string, T>} routes Object with Routes as Keys and objects to be returned as Values.
 * @param {T} fallback The Fallback object in case no route matches the URL.
 * @returns {T}
 */
export function get(urlString, routes, fallback) {
    const url = new URL(urlString);
    searchParams = Object.fromEntries(url.searchParams);

    for (const [route, obj] of Object.entries(routes)) {
        const paramNames = [];
        const pattern = route.replace(/\{([^}]+)}/g, (_, name) => {
            paramNames.push(name);
            return "([^/]+)";
        });

        const match = url.pathname.match(new RegExp(`^${pattern}$`));
        if (match) {
            pathParams = Object.fromEntries(
                paramNames.map((name, i) => [name, match[i + 1]])
            );
            return obj;
        }
    }
    return fallback;
}

/**
 * @returns {Object.<string, string>}
 */
export function getPathParams() {
    return {...pathParams};
}

/**
 @returns {Object.<string, string>}
 */
export function getSearchParams() {
    return {...searchParams};
}
