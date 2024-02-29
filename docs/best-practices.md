# Best Practices

Some of the best practices, like focus highlighting and skip links were already mentioned in the [Keyboard Accessibility](/keyboard-accessibility) section. This section will go into more detail about some of the other best practices when it comes to accessibility.

## Using rem instead of px

Using `rem` instead of `px` for font sizes allows users to change the font size in their browser settings. This is especially important for users with low vision.

When using SASS or similar CSS preprocessors, creating a function to convert `px` to `rem` can be helpful:

```scss
@use "sass:math";

@function pxToRem($px) {
  @if math.is-unitless($px) {
    @return pxToRem($px * 1px);
  }

  @if math.compatible($px, 1rem) {
    @return $px;
  }

  @return math.div($px, 16px) * 1rem;
}
```

## Don't wrap content in a `<a>` tag

Often times it is tempting to wrap a whole section of content in a `<a>` tag, to make the whole section clickable. This is not a good practice, because it makes it harder for screen reader users to understand the content.

### Alternative structure

Create a `<a>` element inside the card, that stretches to the full size of the card. The `<a>` element should also have an `aria-label` attribute that describes the link destination.

```html
<div class="card">
  <h2>Card Heading</h2>
  <p>Card content with a <a href="/another-link"> another link</a> inside</p>
  <a class="main-anchor" href="/link" aria-label="Link to more information"></a>
</div>
```

```css
.card {
  position: relative;
  isolation: isolate;
  pointer-events: none;
}

.card :is(a, button) {
  pointer-events: auto;
}

.card .main-anchor {
  position: absolute;
  inset: 0;
  z-index: -1;
}
```

## Removing animations for users who prefer reduced motion

In order to make your site accessible to users who prefer reduced motion, you can use the `prefers-reduced-motion` media query to disable animations, transitions, and smooth scrolling.

```css
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```
