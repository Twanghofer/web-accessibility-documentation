# Keyboard Accessibility

Keyboard accessibility is one of the most important aspects of web accessibility. Many users with motor disabilities rely on a keyboard. All interactive elements should be focusable with the keyboard.

## Keyboard Navigation

`<a>`, `<button>`, and `<input>` elements are natively accessible to keyboard users, so should be used for interactivity whenever possible. Page elements that are not interactive to mouse or touch (or are hidden), should also not be able to be focused. Use `tabindex="-1"` for the interactive element itself or `inert` for groups of elements (mobile menus, dropdown menus, etc.) to prevent them from being focused.

## Focus indicators

If you don't want mouse users to see the focus indicator, you can hide the outline using the `:focus` selector and only show it when the user is navigating with the keyboard (using the `:focus-visible` selector)

```css
:focus {
  outline: none;
}

:focus-visible {
  outline: 1px solid currentColor;
  outline-offset: 2px;
}
```

## Navigation order

- Structure your underlying source code so that the reading/navigation order is correct.
- Do not use `tabindex` values of 1 or greater to change the default keyboard navigation order.

## Skip links

Skip links are hidden links that allow keyboard users to skip over repeated content (such as a navigation menu) and jump directly to the main content. They are hidden by default, and only visible when focused.

```html
<a href="#main-content" class="skip-link">Skip to main content</a>
```

```css
/* visually hidden */
.skip-link:not(:focus) {
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

.skip-link:focus {
  position: absolute;
  top: 0;
  left: 0;
  background-color: #e77e23;
}
```
