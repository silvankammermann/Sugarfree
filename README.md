# Sugarfree JS

A dependency-free, component based JS boilerplate.

## Getting started

To start developing, clone this repository and spin it up as a single page application using any webserver you like. For example using Node.js:

```
npx serve -s
```

## Features

Out of the box Sugarfree currently supports:

- React-like JS Components
- Nested Page Components
- Routing
- A simple test library

## Philosophy

Sugarfree is a boilerplate to start developing scalable Websites. I will not tell you what to do with your own code :)

If you're still interested in my recommendations on how to structure your code, read the Contribution chapter.

## Contribute

The core functionality of the boilerplate sits in `/src/lib`. All other code is theoretically just a demo on how to use the source library.
I would love to review your PR with improvements to the project. Though before submitting keep in mind that I will check for the following requirements:

### No breaking features

New features shouldn't fundamentally change the architecture. E.g. old components should stay compatible with newer versions of the `element()` function.

### No external libraries

Sugarfree is not dependent on any third party code or packages from a package manager of any kind. I intend on keeping it that way.

You may use external Code as long as you make sure that:

- you download it and put it in the `/external` directory.
- you source it via `index.html`.
- all features still work if the external Code is missing.

For example, I use the Prism JS library to highlight code in the Codeblock component. If the library suddenly went missing, the site would still work. Just without the code highlighting.

### Functional approach

Keep most (or even better: all) of your functions pure. Meaning the same input should always produce the same output. If you need access to context-specific values (e.g. LocalStorage), get them in `app.js` and extend the `siteContext` object, which will be passed to the Components.

When all core functions are pure, testing will be very easy.

### Testing

Each Module in `/src/lib` must have tests. Test files are created in the `/test` directory.