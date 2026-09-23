import {test, expect, expectObject} from "../lib/test.js";
import { get } from "../lib/router.js";

/**
 * This file was generated using AI.
 */

const routes = {
    "/": "home",
    "/about": "about",
    "/user/{id}": "user-profile",
    "/blog/{year}/{month}/{slug}": "blog-post",
    "/products/{category}": "product-list",
    "/settings": "settings"
};

export const routerTests = [
    test("get() returns tuple with result and context", () => {
        const [result, context] = get("http://example.com/about", routes, "not-found");
        expect(result).toBe("about");
        expect(context).toBeTruthy();
    }),

    test("get() returns correct route for simple path", () => {
        const [result] = get("http://example.com/about", routes, "not-found");
        expect(result).toBe("about");
    }),

    test("get() returns home for root path", () => {
        const [result] = get("http://example.com/", routes, "not-found");
        expect(result).toBe("home");
    }),

    test("get() returns fallback for non-existent route", () => {
        const [result] = get("http://example.com/does-not-exist", routes, "not-found");
        expect(result).toBe("not-found");
    }),

    test("get() matches route with single path parameter", () => {
        const [result] = get("http://example.com/user/123", routes, "not-found");
        expect(result).toBe("user-profile");
    }),

    test("get() matches route with multiple path parameters", () => {
        const [result] = get("http://example.com/blog/2026/09/my-post", routes, "not-found");
        expect(result).toBe("blog-post");
    }),

    test("context contains searchParams as empty object when no query string", () => {
        const [, context] = get("http://example.com/about", routes, "not-found");
        expect(Object.keys(context.searchParams).length).toBe(0);
    }),

    test("context contains searchParams with single query parameter", () => {
        const [, context] = get("http://example.com/about?tab=contact", routes, "not-found");
        expect(context.searchParams.tab).toBe("contact");
    }),

    test("context contains searchParams with multiple query parameters", () => {
        const [, context] = get("http://example.com/settings?tab=profile&section=privacy", routes, "not-found");
        expect(context.searchParams.tab).toBe("profile");
        expect(context.searchParams.section).toBe("privacy");
    }),

    test("context contains pathParams for route with single parameter", () => {
        const [, context] = get("http://example.com/user/456", routes, "not-found");
        expect(context.pathParams.id).toBe("456");
    }),

    test("context contains pathParams for route with multiple parameters", () => {
        const [, context] = get("http://example.com/blog/2026/09/test-slug", routes, "not-found");
        expect(context.pathParams.year).toBe("2026");
        expect(context.pathParams.month).toBe("09");
        expect(context.pathParams.slug).toBe("test-slug");
    }),

    test("context does not have pathParams for routes without parameters", () => {
        const [, context] = get("http://example.com/about", routes, "not-found");
        expectObject(context.pathParams).toBeEmpty()
    }),

    test("context contains both pathParams and searchParams", () => {
        const [, context] = get("http://example.com/user/789?tab=posts&sort=recent", routes, "not-found");
        expect(context.pathParams.id).toBe("789");
        expect(context.searchParams.tab).toBe("posts");
        expect(context.searchParams.sort).toBe("recent");
    }),

    test("context contains URL object", () => {
        const [, context] = get("http://example.com/about", routes, "not-found");
        expect(context.url).toBeTruthy();
        expect(context.url.pathname).toBe("/about");
        expect(context.url.hostname).toBe("example.com");
    }),

    test("get() does not match partial routes", () => {
        const [result] = get("http://example.com/user/123/extra", routes, "not-found");
        expect(result).toBe("not-found");
    }),

    test("fallback route also returns context with searchParams", () => {
        const [result, context] = get("http://example.com/unknown?foo=bar", routes, "not-found");
        expect(result).toBe("not-found");
        expect(context.searchParams.foo).toBe("bar");
    }),

    test("context URL contains full URL information", () => {
        const [, context] = get("http://example.com:8080/products/electronics?sort=price#top", routes, "not-found");
        expect(context.url.protocol).toBe("http:");
        expect(context.url.hostname).toBe("example.com");
        expect(context.url.port).toBe("8080");
        expect(context.url.pathname).toBe("/products/electronics");
        expect(context.url.hash).toBe("#top");
    }),

    test("pathParams with special characters in URL", () => {
        const [, context] = get("http://example.com/user/john-doe-123", routes, "not-found");
        expect(context.pathParams.id).toBe("john-doe-123");
    }),

    test("multiple calls return independent contexts", () => {
        const [, context1] = get("http://example.com/user/111", routes, "not-found");
        const [, context2] = get("http://example.com/user/222", routes, "not-found");
        expect(context1.pathParams.id).toBe("111");
        expect(context2.pathParams.id).toBe("222");
    }),

    test("searchParams handles URL encoded values", () => {
        const [, context] = get("http://example.com/about?name=John%20Doe&city=New%20York", routes, "not-found");
        expect(context.searchParams.name).toBe("John Doe");
        expect(context.searchParams.city).toBe("New York");
    })
];
