Repo with an example astro page build that results in specific error.

## About the page

This is a very simple page that loads a few Lit web components that have been SSR'd with `@astrojs/lit` at build time. This pages renders these elements 100+ times so that the page is excessively large in order to trigger the issue reliably.

Elements used here are from our internal library. It is not a public library and I cannot share all of it here. That is why this is only a single test page from our build to showcase this issue.

The version of Astro used to render this page was `4.5.9` but it occurs on any version of Astro `4.x.x`. It does not occur on any version of Astro `2.x.x`. We never were able to test any Astro `3.x.x` versions.

## Triggering the issue

1) To trigger the issue, serve this page locally with the node server command included in `serve.sh`. Or simply run that same command as seen below from the root of this repo:

```
npx http-server -g -c-1
```

2) Next open the page in a chromium browser.

3) In the dev tools, from the network tab select `Throttle > Fast 3G`.

Reload the page and, after a few seconds, you should see the following errors start racking up:

![Screenshot of DSD errors](./assets/errors.png)

## About the issue

Each element here is SSR'd with a declarative shadow root (DSD). Once loaded on the page, they should "adopt" their DSD as their own shadow root. You can tell this has happened successfully when the element has finished loading and only has a shadow root. The DSD `<template>` is "gone" because it is now the elements shadow root.

![Screenshot of correctly adopted DSD](./assets/correct.png)

With the conditions above though, due to something about how Astro is loading components here, part way down the page issues start arising. Every component past a certain point loads with the "second declarative shadow root" error. If you look at these components (scroll half way down the dom) you will see a shadow root and an "unadopted" DSD `<template>`. The SSR'd content is in the unadopted DSD template, but the component has initalized its own shadow root already.

![Screenshot of incorrectly adopted DSD](./assets/incorrect.png)

> NOTE: Today web component only have a declarative option for rendering html content, they cannot consolidate styles during SSR. This leads to a page that is very large due to duplicate styles, but that gzips very well. There is not solution for this at this time and is expected behavior.

This seems to be some kind of timing issue related to when JS loads and the size of the page. 

If there is enough JS being loaded and the page is large enough this will trigger _sometimes_. Depending upon your machine, loading this without network throttling will not result in the issue. I do not know enough about how Astro is loading things to understand why this could be happening.

If I recreate this example with only a single web component however, the issue does not occur not matter how many instances of that element I SSR onto the page.