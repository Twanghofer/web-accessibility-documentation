# Custom Elements

In general it's recommended to use the built-in HTML elements, but sometimes it's useful to create your own custom elements. For example, you might want to create a custom element to encapsulate a complex widget or to create a custom element that extends a built-in element.

For most cases there are already libraries that provide custom elements, that are fully accessible and it is recommended to use those libraries instead of creating your own custom elements. If however you do need to create your own custom elements, keep the following in mind:

## Focus

If the custom element is interactive, it should be keyboard accessible. This means that the element should be focusable and have a [visible focus state](/keyboard-accessibility#focus-indicators).  
In more complex cases, the focus should be managed (and shifted) in a way that makes sense for the element. For modals for example, the focus should be trapped inside the modal when it is open.

## Keyboard interaction

Users should be able to interact with the custom element using the keyboard. In most cases the suggested keyboard interactions can be found in the [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/patterns/).

## Aria attributes

Use the appropriate [ARIA attributes](https://www.w3.org/TR/wai-aria-1.1/) to make the custom element accessible.
