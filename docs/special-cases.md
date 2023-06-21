# Special Cases

Here are some special cases that you may encounter when creating accessible components.

## Infinite scroll

When creating a infinite scroll use the `role="feed"` and `aria-busy` attributes on the parent element. The `aria-busy` attribute should be set to `true` when the content is loading and `false` when the content is loaded.

On the the children of the parent element, use the `<article>` element for each item in the feed. Use the `aria-posinset` and `aria-setsize` attributes to indicate the position of the item in the feed. The `aria-posinset` attribute should be set to the position of the item in the feed and the `aria-setsize` attribute should be set to the total number of items in the feed, or `-1` depending on which information is more useful to the user.

```html
<section role="feed" aria-busy="false">
  …
  <article aria-posinset="427" aria-setsize="-1">…</article>
  <article aria-posinset="428" aria-setsize="-1">…</article>
  <article aria-posinset="429" aria-setsize="-1">…</article>
  …
</section>
```
