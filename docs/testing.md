# Testing a website for accessibility

## 1. Keyboard navigation

Check that you can navigate the website using only the keyboard. You can do this by pressing the `Tab` key to move between links and form fields. Press `Shift + Tab` to move backwards. Press `Enter` to follow a link or submit a form.

The active element should be visible at all times. If you can't see where you are on the page, you may need to add a focus indicator to the active element. It should not be possible to tab to elements that are hidden from view.

### 1.1 Skip link (optional)

For pages with a lot of navigation, you can add a skip link to allow users to jump to the main content. This is useful for keyboard users who would otherwise have to tab through all the navigation links.

## 2. Screen reader

Check that the website is usable with a screen reader. You can do this by using the keyboard navigation described above, or by using the screen reader's own navigation commands.
Make sure the content of the page is understandable when read out loud. For example, make sure that the screen reader reads out the correct text for each link.

If the page has custom interactive elements, make sure that the screen reader reads out the correct information when you interact with them.

## 3. Page structure

Check if the page is using the correct HTML elements for the content. Headings should create a logical outline of the page. Landmarks should be used to identify the main sections of the page.

To test this you can use the landmark and heading navigation commands in the screen reader.

## 4. Color contrast

Check that the text on the page has sufficient contrast with the background color. You can use a tool like [Contrast Ratio](https://contrast-ratio.com/) to check the contrast ratio of the text.
