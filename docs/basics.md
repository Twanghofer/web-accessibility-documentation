# Basics

## Using Semantic HTML

Using proper HTML tags is important for both accessibility and SEO. This includes using the correct [Landmark elements](https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/examples/HTML5.html), such as `<header>`, `<main>`, `<nav>`, `<footer>`, `<aside>`, `<section>`, and `<form>`.

Headings should be used to create a logical outline of the page. The `<h1>` tag should be used for the main heading of the page, and should only be used once. The `<h2>` tag should be used for subheadings, and so on. The heading levels should be used in order, and should not skip levels.

### Gotchas

`<form>` and `<section>` elements are only considered landmarks if they have an `aria-label` or `aria-labelledby` attribute.

## Buttons

For elements that perform an action, the `<button>` tag should be used. If the button doesn't have a label (such as an icon button), the `aria-label` attribute should be used to provide a label for screen readers.

## Images

Images should always have an `alt` attribute. If the image is purely decorative, the `alt` attribute should be empty (`alt=""`). If the image is a link, the `alt` attribute should describe the link destination.
