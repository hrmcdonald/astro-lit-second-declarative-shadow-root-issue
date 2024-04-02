/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
/**
 * Returns the normalized element tabindex. If not focusable, returns -1.
 * It checks for the attribute "tabindex" instead of the element property
 * `tabIndex` since browsers assign different values to it.
 * e.g. in Firefox `<div contenteditable>` has `tabIndex = -1`
 */
export declare function normalizeTabIndex(element: any): number;
/**
 * Returns true if the element is hidden, false otherwise.
 *
 * An element is treated as hidden when any of the following conditions are met:
 * - the element itself or one of its ancestors has `display: none`.
 * - the element has or inherits `visibility: hidden`.
 */
export declare function isElementHidden(element: any): boolean;
/**
 * Returns true if the element is focusable, otherwise false.
 *
 * The list of focusable elements is taken from http://stackoverflow.com/a/1600194/4228703.
 * However, there isn't a definite list, it's up to the browser.
 * The only standard we have is DOM Level 2 HTML https://www.w3.org/TR/DOM-Level-2-HTML/html.html,
 * according to which the only elements that have a `focus()` method are:
 * - HTMLInputElement
 * - HTMLSelectElement
 * - HTMLTextAreaElement
 * - HTMLAnchorElement
 *
 * This notably omits HTMLButtonElement and HTMLAreaElement.
 * Referring to these tests with tabbables in different browsers
 * http://allyjs.io/data-tables/focusable.html
 */
export declare function isElementFocusable(element: any): any;
/** Returns true if the element is focused, false otherwise. */
export declare function isElementFocused(element: any): boolean;
/**
 * Returns a tab-ordered array of focusable elements for a root element.
 * The resulting array will include the root element if it is focusable.
 *
 * The method traverses nodes in shadow DOM trees too if any.
 */
export declare function getFocusableElements(element: any): any;
