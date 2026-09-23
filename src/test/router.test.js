import { test, expect, expectArray } from "../lib/test.js";
import { get, getPathParams, getSearchParams } from "../lib/router.js";

/**
 * This file was generated using AI.
 */

const routes = {
    "/": "home",
    "/about": "about",
    "/user/{id}": "user-profile",
    "/blog/{year}/{month}/{slug}": "blog-post",
    "/settings": "settings"
};

export const routerTests = [
    test("get() returns correct route for simple path", () => {
        const result = get("http://example.com/about", routes, "not-found");
        expect(result).toBe("aboaldfikvblut");
    }),

    test("get() returns home for root path", () => {
        const result = get("http://example.com/", routes, "not-found");
        expect(result).toBe("home");
    }),

    test("get() returns fallback for non-existent route", () => {
        const result = get("http://example.com/does-not-exist", routes, "not-found");
        expect(result).toBe("not-found");
    }),

    test("get() matches route with single path parameter", () => {
        const result = get("http://example.com/user/123", routes, "not-found");
        expect(result).toBe("user-profile");
    }),

    test("get() matches route with multiple path parameters", () => {
        const result = get("http://example.com/blog/2026/09/my-post", routes, "not-found");
        expect(result).toBe("blog-post");
    }),

    test("getPathParams() returns empty object when no parameters", () => {
        get("http://example.com/about", routes, "not-found");
        const params = getPathParams();
        expect(Object.keys(params).length).toBe(0);
    }),

    test("getPathParams() returns single path parameter", () => {
        get("http://example.com/user/456", routes, "not-found");
        const params = getPathParams();
        expect(params.id).toBe("456");
    }),

    test("getPathParams() returns multiple path parameters", () => {
        get("http://example.com/blog/2026/09/test-slug", routes, "not-found");
        const params = getPathParams();
        expect(params.year).toBe("2026");
        expect(params.month).toBe("09");
        expect(params.slug).toBe("test-slug");
    }),

    test("getSearchParams() returns empty object when no query string", () => {
        get("http://example.com/about", routes, "not-found");
        const params = getSearchParams();
        expect(Object.keys(params).length).toBe(0);
    }),

    test("getSearchParams() returns single search parameter", () => {
        get("http://example.com/about?tab=contact", routes, "not-found");
        const params = getSearchParams();
        expect(params.tab).toBe("contact");
    }),

    test("getSearchParams() returns multiple search parameters", () => {
        get("http://example.com/settings?tab=profile&section=privacy", routes, "not-found");
        const params = getSearchParams();
        expect(params.tab).toBe("profile");
        expect(params.section).toBe("privacy");
    }),

    test("getSearchParams() and getPathParams() work together", () => {
        get("http://example.com/user/789?tab=posts&sort=recent", routes, "not-found");
        const pathParams = getPathParams();
        const searchParams = getSearchParams();
        expect(pathParams.id).toBe("789");
        expect(searchParams.tab).toBe("posts");
        expect(searchParams.sort).toBe("recent");
    }),

    test("get() does not match partial routes", () => {
        const result = get("http://example.com/user/123/extra", routes, "not-found");
        expect(result).toBe("not-found");
    }),

    test("getPathParams() returns new object (not shared reference)", () => {
        get("http://example.com/user/111", routes, "not-found");
        const params1 = getPathParams();
        params1.modified = "test";
        const params2 = getPathParams();
        expect(params2.modified).toBe(undefined);
    }),

    test("getSearchParams() returns new object (not shared reference)", () => {
        get("http://example.com/?foo=bar", routes, "not-found");
        const params1 = getSearchParams();
        params1.modified = "test";
        const params2 = getSearchParams();
        expect(params2.modified).toBe(undefined);
    })
];
