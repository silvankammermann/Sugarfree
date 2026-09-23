import { test, expect, expectArray } from "../lib/test.js";
import { get } from "../lib/router.js";

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
        expect(result).toBe("about");
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
];
