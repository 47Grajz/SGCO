/*
! tailwindcss v3.3.5 | MIT License | https://tailwindcss.com
*/

/*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box;
  /* 1 */
  border-width: 0;
  /* 2 */
  border-style: solid;
  /* 2 */
  border-color: #e5e7eb;
  /* 2 */
}

::before,
::after {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured `sans` font-family by default.
5. Use the user's configured `sans` font-feature-settings by default.
6. Use the user's configured `sans` font-variation-settings by default.
*/

html {
  line-height: 1.5;
  /* 1 */
  -webkit-text-size-adjust: 100%;
  /* 2 */
  -moz-tab-size: 4;
  /* 3 */
  -o-tab-size: 4;
  tab-size: 4;
  /* 3 */
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  /* 4 */
  font-feature-settings: normal;
  /* 5 */
  font-variation-settings: normal;
  /* 6 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.
*/

body {
  margin: 0;
  /* 1 */
  line-height: inherit;
  /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0;
  /* 1 */
  color: inherit;
  /* 2 */
  border-top-width: 1px;
  /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
  text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured `mono` font family by default.
2. Correct the odd `em` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  /* 1 */
  font-size: 1em;
  /* 2 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent `sub` and `sup` elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0;
  /* 1 */
  border-color: inherit;
  /* 2 */
  border-collapse: collapse;
  /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  /* 1 */
  font-feature-settings: inherit;
  /* 1 */
  font-variation-settings: inherit;
  /* 1 */
  font-size: 100%;
  /* 1 */
  font-weight: inherit;
  /* 1 */
  line-height: inherit;
  /* 1 */
  color: inherit;
  /* 1 */
  margin: 0;
  /* 2 */
  padding: 0;
  /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button;
  /* 1 */
  background-color: transparent;
  /* 2 */
  background-image: none;
  /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield;
  /* 1 */
  outline-offset: -2px;
  /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to `inherit` in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button;
  /* 1 */
  font: inherit;
  /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Reset default styling for dialogs.
*/

dialog {
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1;
  /* 1 */
  color: #9ca3af;
  /* 2 */
}

input::placeholder,
textarea::placeholder {
  opacity: 1;
  /* 1 */
  color: #9ca3af;
  /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/

:disabled {
  cursor: default;
}

/*
1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block;
  /* 1 */
  vertical-align: middle;
  /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

/* Make elements with the HTML hidden attribute stay hidden by default */

[hidden] {
  display: none;
}

:root, [data-theme] {
  color: hsl(var(--nextui-foreground));
  background-color: hsl(var(--nextui-background));
}

*, ::before, ::after {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}

::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.pointer-events-none {
  pointer-events: none;
}

.pointer-events-auto {
  pointer-events: auto;
}

.visible {
  visibility: visible;
}

.invisible {
  visibility: hidden;
}

.static {
  position: static;
}

.fixed {
  position: fixed;
}

.absolute {
  position: absolute;
}

.relative {
  position: relative;
}

.sticky {
  position: sticky;
}

.inset-0 {
  inset: 0px;
}

.inset-x-0 {
  left: 0px;
  right: 0px;
}

.bottom-0 {
  bottom: 0px;
}

.bottom-\[10\%\] {
  bottom: 10%;
}

.bottom-\[5\%\] {
  bottom: 5%;
}

.left-0 {
  left: 0px;
}

.left-1 {
  left: 0.25rem;
}

.left-1\.5 {
  left: 0.375rem;
}

.left-1\/2 {
  left: 50%;
}

.left-2 {
  left: 0.5rem;
}

.left-3 {
  left: 0.75rem;
}

.left-\[10\%\] {
  left: 10%;
}

.left-\[5\%\] {
  left: 5%;
}

.left-\[50\%\] {
  left: 50%;
}

.right-1 {
  right: 0.25rem;
}

.right-1\.5 {
  right: 0.375rem;
}

.right-2 {
  right: 0.5rem;
}

.right-3 {
  right: 0.75rem;
}

.right-\[10\%\] {
  right: 10%;
}

.right-\[5\%\] {
  right: 5%;
}

.top-0 {
  top: 0px;
}

.top-1 {
  top: 0.25rem;
}

.top-1\/2 {
  top: 50%;
}

.top-2 {
  top: 0.5rem;
}

.top-3 {
  top: 0.75rem;
}

.top-\[10\%\] {
  top: 10%;
}

.top-\[5\%\] {
  top: 5%;
}

.top-\[50\%\] {
  top: 50%;
}

.top-\[var\(--navbar-height\)\] {
  top: var(--navbar-height);
}

.-z-10 {
  z-index: -10;
}

.-z-30 {
  z-index: -30;
}

.z-0 {
  z-index: 0;
}

.z-10 {
  z-index: 10;
}

.z-20 {
  z-index: 20;
}

.z-30 {
  z-index: 30;
}

.z-40 {
  z-index: 40;
}

.z-50 {
  z-index: 50;
}

.z-\[100\] {
  z-index: 100;
}

.-m-2 {
  margin: -0.5rem;
}

.-m-2\.5 {
  margin: -0.625rem;
}

.m-0 {
  margin: 0px;
}

.-mx-1 {
  margin-left: -0.25rem;
  margin-right: -0.25rem;
}

.mx-0 {
  margin-left: 0px;
  margin-right: 0px;
}

.mx-1 {
  margin-left: 0.25rem;
  margin-right: 0.25rem;
}

.mx-\[calc\(\(theme\(spacing\.5\)-theme\(spacing\.1\)\)\/2\)\] {
  margin-left: calc((1.25rem - 0.25rem) / 2);
  margin-right: calc((1.25rem - 0.25rem) / 2);
}

.mx-\[calc\(\(theme\(spacing\.6\)-theme\(spacing\.3\)\)\/2\)\] {
  margin-left: calc((1.5rem - 0.75rem) / 2);
  margin-right: calc((1.5rem - 0.75rem) / 2);
}

.mx-\[calc\(\(theme\(spacing\.7\)-theme\(spacing\.5\)\)\/2\)\] {
  margin-left: calc((1.75rem - 1.25rem) / 2);
  margin-right: calc((1.75rem - 1.25rem) / 2);
}

.my-0 {
  margin-top: 0px;
  margin-bottom: 0px;
}

.my-1 {
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
}

.my-16 {
  margin-top: 4rem;
  margin-bottom: 4rem;
}

.my-\[calc\(\(theme\(spacing\.5\)-theme\(spacing\.1\)\)\/2\)\] {
  margin-top: calc((1.25rem - 0.25rem) / 2);
  margin-bottom: calc((1.25rem - 0.25rem) / 2);
}

.my-\[calc\(\(theme\(spacing\.6\)-theme\(spacing\.3\)\)\/2\)\] {
  margin-top: calc((1.5rem - 0.75rem) / 2);
  margin-bottom: calc((1.5rem - 0.75rem) / 2);
}

.my-\[calc\(\(theme\(spacing\.7\)-theme\(spacing\.5\)\)\/2\)\] {
  margin-top: calc((1.75rem - 1.25rem) / 2);
  margin-bottom: calc((1.75rem - 1.25rem) / 2);
}

.-mr-2 {
  margin-right: -0.5rem;
}

.-ms-2 {
  margin-inline-start: -0.5rem;
}

.mb-1 {
  margin-bottom: 0.25rem;
}

.mb-1\.5 {
  margin-bottom: 0.375rem;
}

.mb-12 {
  margin-bottom: 3rem;
}

.mb-2 {
  margin-bottom: 0.5rem;
}

.mb-5 {
  margin-bottom: 1.25rem;
}

.mb-6 {
  margin-bottom: 1.5rem;
}

.mb-8 {
  margin-bottom: 2rem;
}

.mb-px {
  margin-bottom: 1px;
}

.ml-1 {
  margin-left: 0.25rem;
}

.ml-10 {
  margin-left: 2.5rem;
}

.ml-2 {
  margin-left: 0.5rem;
}

.ml-7 {
  margin-left: 1.75rem;
}

.ml-auto {
  margin-left: auto;
}

.mr-2 {
  margin-right: 0.5rem;
}

.mt-1 {
  margin-top: 0.25rem;
}

.mt-12 {
  margin-top: 3rem;
}

.mt-2 {
  margin-top: 0.5rem;
}

.mt-4 {
  margin-top: 1rem;
}

.mt-5 {
  margin-top: 1.25rem;
}

.box-border {
  box-sizing: border-box;
}

.line-clamp-1 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}

.block {
  display: block;
}

.inline-block {
  display: inline-block;
}

.flex {
  display: flex;
}

.inline-flex {
  display: inline-flex;
}

.table {
  display: table;
}

.grid {
  display: grid;
}

.inline-grid {
  display: inline-grid;
}

.hidden {
  display: none;
}

.aspect-square {
  aspect-ratio: 1 / 1;
}

.\!h-auto {
  height: auto !important;
}

.h-1 {
  height: 0.25rem;
}

.h-1\.5 {
  height: 0.375rem;
}

.h-10 {
  height: 2.5rem;
}

.h-11 {
  height: 2.75rem;
}

.h-12 {
  height: 3rem;
}

.h-14 {
  height: 3.5rem;
}

.h-16 {
  height: 4rem;
}

.h-2 {
  height: 0.5rem;
}

.h-2\.5 {
  height: 0.625rem;
}

.h-3 {
  height: 0.75rem;
}

.h-3\.5 {
  height: 0.875rem;
}

.h-4 {
  height: 1rem;
}

.h-40 {
  height: 10rem;
}

.h-5 {
  height: 1.25rem;
}

.h-6 {
  height: 1.5rem;
}

.h-7 {
  height: 1.75rem;
}

.h-8 {
  height: 2rem;
}

.h-9 {
  height: 2.25rem;
}

.h-\[100dvh\] {
  height: 100dvh;
}

.h-\[10rem\] {
  height: 10rem;
}

.h-\[2px\] {
  height: 2px;
}

.h-\[calc\(100dvh_-_var\(--navbar-height\)_-_1px\)\] {
  height: calc(100dvh - var(--navbar-height) - 1px);
}

.h-\[var\(--navbar-height\)\] {
  height: var(--navbar-height);
}

.h-\[var\(--radix-select-trigger-height\)\] {
  height: var(--radix-select-trigger-height);
}

.h-auto {
  height: auto;
}

.h-divider {
  height: var(--nextui-divider-weight);
}

.h-fit {
  height: -moz-fit-content;
  height: fit-content;
}

.h-full {
  height: 100%;
}

.h-px {
  height: 1px;
}

.h-screen {
  height: 100vh;
}

.h-unit-10 {
  height: var(--nextui-spacing-unit-10);
}

.h-unit-12 {
  height: var(--nextui-spacing-unit-12);
}

.h-unit-4 {
  height: var(--nextui-spacing-unit-4);
}

.h-unit-8 {
  height: var(--nextui-spacing-unit-8);
}

.max-h-64 {
  max-height: 16rem;
}

.max-h-\[382px\] {
  max-height: 382px;
}

.max-h-\[calc\(100\%_-_7\.5rem\)\] {
  max-height: calc(100% - 7.5rem);
}

.max-h-screen {
  max-height: 100vh;
}

.min-h-unit-10 {
  min-height: var(--nextui-spacing-unit-10);
}

.min-h-unit-12 {
  min-height: var(--nextui-spacing-unit-12);
}

.min-h-unit-16 {
  min-height: var(--nextui-spacing-unit-16);
}

.min-h-unit-4 {
  min-height: var(--nextui-spacing-unit-4);
}

.min-h-unit-8 {
  min-height: var(--nextui-spacing-unit-8);
}

.w-1 {
  width: 0.25rem;
}

.w-1\.5 {
  width: 0.375rem;
}

.w-10 {
  width: 2.5rem;
}

.w-12 {
  width: 3rem;
}

.w-14 {
  width: 3.5rem;
}

.w-2 {
  width: 0.5rem;
}

.w-2\.5 {
  width: 0.625rem;
}

.w-20 {
  width: 5rem;
}

.w-24 {
  width: 6rem;
}

.w-3 {
  width: 0.75rem;
}

.w-3\.5 {
  width: 0.875rem;
}

.w-3\/5 {
  width: 60%;
}

.w-4 {
  width: 1rem;
}

.w-4\/5 {
  width: 80%;
}

.w-5 {
  width: 1.25rem;
}

.w-6 {
  width: 1.5rem;
}

.w-7 {
  width: 1.75rem;
}

.w-72 {
  width: 18rem;
}

.w-8 {
  width: 2rem;
}

.w-80 {
  width: 20rem;
}

.w-9 {
  width: 2.25rem;
}

.w-\[10rem\] {
  width: 10rem;
}

.w-\[280px\] {
  width: 280px;
}

.w-\[400px\] {
  width: 400px;
}

.w-\[80\%\] {
  width: 80%;
}

.w-\[calc\(100\%_-_theme\(spacing\.unit-6\)\)\] {
  width: calc(100% - var(--nextui-spacing-unit-6));
}

.w-auto {
  width: auto;
}

.w-divider {
  width: var(--nextui-divider-weight);
}

.w-full {
  width: 100%;
}

.w-px {
  width: 1px;
}

.w-screen {
  width: 100vw;
}

.w-unit-10 {
  width: var(--nextui-spacing-unit-10);
}

.w-unit-12 {
  width: var(--nextui-spacing-unit-12);
}

.w-unit-4 {
  width: var(--nextui-spacing-unit-4);
}

.w-unit-8 {
  width: var(--nextui-spacing-unit-8);
}

.min-w-\[200px\] {
  min-width: 200px;
}

.min-w-\[8rem\] {
  min-width: 8rem;
}

.min-w-\[var\(--radix-select-trigger-width\)\] {
  min-width: var(--radix-select-trigger-width);
}

.min-w-full {
  min-width: 100%;
}

.min-w-max {
  min-width: -moz-max-content;
  min-width: max-content;
}

.min-w-unit-10 {
  min-width: var(--nextui-spacing-unit-10);
}

.min-w-unit-12 {
  min-width: var(--nextui-spacing-unit-12);
}

.min-w-unit-16 {
  min-width: var(--nextui-spacing-unit-16);
}

.min-w-unit-20 {
  min-width: var(--nextui-spacing-unit-20);
}

.min-w-unit-24 {
  min-width: var(--nextui-spacing-unit-24);
}

.min-w-unit-5 {
  min-width: var(--nextui-spacing-unit-5);
}

.min-w-unit-6 {
  min-width: var(--nextui-spacing-unit-6);
}

.min-w-unit-7 {
  min-width: var(--nextui-spacing-unit-7);
}

.min-w-unit-8 {
  min-width: var(--nextui-spacing-unit-8);
}

.max-w-2xl {
  max-width: 42rem;
}

.max-w-3xl {
  max-width: 48rem;
}

.max-w-4xl {
  max-width: 56rem;
}

.max-w-5xl {
  max-width: 64rem;
}

.max-w-\[1024px\] {
  max-width: 1024px;
}

.max-w-\[1280px\] {
  max-width: 1280px;
}

.max-w-\[1536px\] {
  max-width: 1536px;
}

.max-w-\[640px\] {
  max-width: 640px;
}

.max-w-\[768px\] {
  max-width: 768px;
}

.max-w-fit {
  max-width: -moz-fit-content;
  max-width: fit-content;
}

.max-w-full {
  max-width: 100%;
}

.max-w-lg {
  max-width: 32rem;
}

.max-w-md {
  max-width: 28rem;
}

.max-w-sm {
  max-width: 24rem;
}

.max-w-xl {
  max-width: 36rem;
}

.max-w-xs {
  max-width: 20rem;
}

.flex-1 {
  flex: 1 1 0%;
}

.flex-auto {
  flex: 1 1 auto;
}

.flex-initial {
  flex: 0 1 auto;
}

.flex-none {
  flex: none;
}

.flex-shrink-0 {
  flex-shrink: 0;
}

.shrink-0 {
  flex-shrink: 0;
}

.flex-grow {
  flex-grow: 1;
}

.grow-0 {
  flex-grow: 0;
}

.basis-0 {
  flex-basis: 0px;
}

.basis-auto {
  flex-basis: auto;
}

.table-auto {
  table-layout: auto;
}

.table-fixed {
  table-layout: fixed;
}

.caption-bottom {
  caption-side: bottom;
}

.origin-\[0\] {
  transform-origin: 0;
}

.origin-center {
  transform-origin: center;
}

.origin-left {
  transform-origin: left;
}

.origin-right {
  transform-origin: right;
}

.origin-top-left {
  transform-origin: top left;
}

.-translate-x-1\/2 {
  --tw-translate-x: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-y-1\/2 {
  --tw-translate-y: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-y-8 {
  --tw-translate-y: -2rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-x-1 {
  --tw-translate-x: 0.25rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-x-1\/2 {
  --tw-translate-x: 50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-x-\[-50\%\] {
  --tw-translate-x: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-y-1 {
  --tw-translate-y: 0.25rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-y-1\/2 {
  --tw-translate-y: 50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-y-\[-50\%\] {
  --tw-translate-y: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.rotate-0 {
  --tw-rotate: 0deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.rotate-180 {
  --tw-rotate: 180deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.scale-0 {
  --tw-scale-x: 0;
  --tw-scale-y: 0;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.scale-100 {
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.scale-105 {
  --tw-scale-x: 1.05;
  --tw-scale-y: 1.05;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.scale-50 {
  --tw-scale-x: .5;
  --tw-scale-y: .5;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.scale-75 {
  --tw-scale-x: .75;
  --tw-scale-y: .75;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.transform {
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

@keyframes drip-expand {
  0% {
    opacity: 0.2;
    transform: scale(0);
  }

  100% {
    opacity: 0;
    transform: scale(2);
  }
}

.animate-drip-expand {
  animation: drip-expand 420ms linear;
}

@keyframes indeterminate-bar {
  0% {
    transform: translateX(-50%) scaleX(0.2);
  }

  100% {
    transform: translateX(100%) scaleX(1);
  }
}

.animate-indeterminate-bar {
  animation: indeterminate-bar 1.5s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite normal none running;
}

.animate-none {
  animation: none;
}

@keyframes spinner-spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.animate-spinner-ease-spin {
  animation: spinner-spin 0.8s ease infinite;
}

@keyframes spinner-spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.animate-spinner-linear-spin {
  animation: spinner-spin 0.8s linear infinite;
}

.cursor-default {
  cursor: default;
}

.cursor-grab {
  cursor: grab;
}

.cursor-not-allowed {
  cursor: not-allowed;
}

.cursor-pointer {
  cursor: pointer;
}

.cursor-text {
  cursor: text;
}

.touch-none {
  touch-action: none;
}

.select-none {
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

.resize-none {
  resize: none;
}

.scroll-py-6 {
  scroll-padding-top: 1.5rem;
  scroll-padding-bottom: 1.5rem;
}

.list-none {
  list-style-type: none;
}

.appearance-none {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

.grid-cols-1 {
  grid-template-columns: repeat(1, minmax(0, 1fr));
}

.grid-cols-2 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.grid-cols-3 {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.grid-cols-4 {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.grid-rows-2 {
  grid-template-rows: repeat(2, minmax(0, 1fr));
}

.grid-rows-3 {
  grid-template-rows: repeat(3, minmax(0, 1fr));
}

.flex-row {
  flex-direction: row;
}

.flex-row-reverse {
  flex-direction: row-reverse;
}

.flex-col {
  flex-direction: column;
}

.flex-col-reverse {
  flex-direction: column-reverse;
}

.flex-wrap {
  flex-wrap: wrap;
}

.flex-nowrap {
  flex-wrap: nowrap;
}

.place-content-center {
  place-content: center;
}

.items-start {
  align-items: flex-start;
}

.items-end {
  align-items: flex-end;
}

.items-center {
  align-items: center;
}

.justify-start {
  justify-content: flex-start;
}

.justify-end {
  justify-content: flex-end;
}

.justify-center {
  justify-content: center;
}

.justify-between {
  justify-content: space-between;
}

.justify-items-center {
  justify-items: center;
}

.\!gap-0 {
  gap: 0px !important;
}

.\!gap-unit-0 {
  gap: var(--nextui-spacing-unit-0) !important;
}

.gap-0 {
  gap: 0px;
}

.gap-0\.5 {
  gap: 0.125rem;
}

.gap-1 {
  gap: 0.25rem;
}

.gap-1\.5 {
  gap: 0.375rem;
}

.gap-10 {
  gap: 2.5rem;
}

.gap-12 {
  gap: 3rem;
}

.gap-2 {
  gap: 0.5rem;
}

.gap-20 {
  gap: 5rem;
}

.gap-3 {
  gap: 0.75rem;
}

.gap-4 {
  gap: 1rem;
}

.gap-5 {
  gap: 1.25rem;
}

.gap-8 {
  gap: 2rem;
}

.gap-unit-2 {
  gap: var(--nextui-spacing-unit-2);
}

.gap-unit-3 {
  gap: var(--nextui-spacing-unit-3);
}

.space-x-0 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(0px * var(--tw-space-x-reverse));
  margin-left: calc(0px * calc(1 - var(--tw-space-x-reverse)));
}

.space-x-0\.5 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(0.125rem * var(--tw-space-x-reverse));
  margin-left: calc(0.125rem * calc(1 - var(--tw-space-x-reverse)));
}

.space-x-4 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(1rem * var(--tw-space-x-reverse));
  margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)));
}

.space-y-2 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));
}

.self-center {
  align-self: center;
}

.overflow-auto {
  overflow: auto;
}

.overflow-hidden {
  overflow: hidden;
}

.overflow-visible {
  overflow: visible;
}

.overflow-x-auto {
  overflow-x: auto;
}

.overflow-y-auto {
  overflow-y: auto;
}

.overflow-y-hidden {
  overflow-y: hidden;
}

.overflow-x-scroll {
  overflow-x: scroll;
}

.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.text-ellipsis {
  text-overflow: ellipsis;
}

.whitespace-normal {
  white-space: normal;
}

.whitespace-nowrap {
  white-space: nowrap;
}

.break-words {
  overflow-wrap: break-word;
}

.\!rounded-none {
  border-radius: 0px !important;
}

.rounded {
  border-radius: 0.25rem;
}

.rounded-\[calc\(theme\(borderRadius\.large\)\/1\.5\)\] {
  border-radius: calc(var(--nextui-radius-large) / 1.5);
}

.rounded-\[calc\(theme\(borderRadius\.medium\)\*0\.5\)\] {
  border-radius: calc(var(--nextui-radius-medium) * 0.5);
}

.rounded-\[calc\(theme\(borderRadius\.medium\)\*0\.6\)\] {
  border-radius: calc(var(--nextui-radius-medium) * 0.6);
}

.rounded-\[calc\(theme\(borderRadius\.medium\)\*0\.7\)\] {
  border-radius: calc(var(--nextui-radius-medium) * 0.7);
}

.rounded-\[calc\(theme\(borderRadius\.medium\)\/2\)\] {
  border-radius: calc(var(--nextui-radius-medium) / 2);
}

.rounded-\[calc\(theme\(borderRadius\.small\)\/2\)\] {
  border-radius: calc(var(--nextui-radius-small) / 2);
}

.rounded-full {
  border-radius: 9999px;
}

.rounded-large {
  border-radius: var(--nextui-radius-large);
}

.rounded-lg {
  border-radius: var(--radius);
}

.rounded-md {
  border-radius: calc(var(--radius) - 2px);
}

.rounded-medium {
  border-radius: var(--nextui-radius-medium);
}

.rounded-none {
  border-radius: 0px;
}

.rounded-sm {
  border-radius: calc(var(--radius) - 4px);
}

.rounded-small {
  border-radius: var(--nextui-radius-small);
}

.rounded-xl {
  border-radius: 0.75rem;
}

.\!rounded-l-none {
  border-top-left-radius: 0px !important;
  border-bottom-left-radius: 0px !important;
}

.\!rounded-r-none {
  border-top-right-radius: 0px !important;
  border-bottom-right-radius: 0px !important;
}

.rounded-b-large {
  border-bottom-right-radius: var(--nextui-radius-large);
  border-bottom-left-radius: var(--nextui-radius-large);
}

.rounded-b-medium {
  border-bottom-right-radius: var(--nextui-radius-medium);
  border-bottom-left-radius: var(--nextui-radius-medium);
}

.rounded-b-small {
  border-bottom-right-radius: var(--nextui-radius-small);
  border-bottom-left-radius: var(--nextui-radius-small);
}

.rounded-l-lg {
  border-top-left-radius: var(--radius);
  border-bottom-left-radius: var(--radius);
}

.rounded-t-large {
  border-top-left-radius: var(--nextui-radius-large);
  border-top-right-radius: var(--nextui-radius-large);
}

.rounded-t-medium {
  border-top-left-radius: var(--nextui-radius-medium);
  border-top-right-radius: var(--nextui-radius-medium);
}

.rounded-t-small {
  border-top-left-radius: var(--nextui-radius-small);
  border-top-right-radius: var(--nextui-radius-small);
}

.border {
  border-width: 1px;
}

.border-0 {
  border-width: 0px;
}

.border-1 {
  border-width: 1px;
}

.border-2 {
  border-width: 2px;
}

.border-3 {
  border-width: 3px;
}

.border-medium {
  border-width: var(--nextui-border-width-medium);
}

.border-small {
  border-width: var(--nextui-border-width-small);
}

.border-b {
  border-bottom-width: 1px;
}

.border-b-1 {
  border-bottom-width: 1px;
}

.border-b-2 {
  border-bottom-width: 2px;
}

.border-b-medium {
  border-bottom-width: var(--nextui-border-width-medium);
}

.border-r-1 {
  border-right-width: 1px;
}

.border-t-5 {
  border-top-width: 5px;
}

.border-solid {
  border-style: solid;
}

.border-dotted {
  border-style: dotted;
}

.border-none {
  border-style: none;
}

.\!border-danger {
  --tw-border-opacity: 1 !important;
  border-color: hsl(var(--nextui-danger) / var(--nextui-danger-opacity, var(--tw-border-opacity))) !important;
}

.border-background {
  border-color: hsl(var(--background));
}

.border-danger {
  --tw-border-opacity: 1;
  border-color: hsl(var(--nextui-danger) / var(--nextui-danger-opacity, var(--tw-border-opacity)));
}

.border-default {
  --tw-border-opacity: 1;
  border-color: hsl(var(--nextui-default) / var(--nextui-default-opacity, var(--tw-border-opacity)));
}

.border-default-200 {
  --tw-border-opacity: 1;
  border-color: hsl(var(--nextui-default-200) / var(--nextui-default-200-opacity, var(--tw-border-opacity)));
}

.border-default-300 {
  --tw-border-opacity: 1;
  border-color: hsl(var(--nextui-default-300) / var(--nextui-default-300-opacity, var(--tw-border-opacity)));
}

.border-destructive {
  border-color: hsl(var(--destructive));
}

.border-divider {
  --tw-border-opacity: 1;
  border-color: hsl(var(--nextui-divider) / var(--nextui-divider-opacity, var(--tw-border-opacity)));
}

.border-foreground {
  border-color: hsl(var(--foreground));
}

.border-gray-300 {
  --tw-border-opacity: 1;
  border-color: rgb(209 213 219 / var(--tw-border-opacity));
}

.border-green-700 {
  --tw-border-opacity: 1;
  border-color: rgb(21 128 61 / var(--tw-border-opacity));
}

.border-inherit {
  border-color: inherit;
}

.border-input {
  border-color: hsl(var(--input));
}

.border-pink-700 {
  --tw-border-opacity: 1;
  border-color: rgb(190 24 93 / var(--tw-border-opacity));
}

.border-pink-900 {
  --tw-border-opacity: 1;
  border-color: rgb(131 24 67 / var(--tw-border-opacity));
}

.border-primary {
  border-color: hsl(var(--primary));
}

.border-primary-project {
  border-color: #A40364CC;
}

.border-secondary {
  border-color: hsl(var(--secondary));
}

.border-slate-200 {
  --tw-border-opacity: 1;
  border-color: rgb(226 232 240 / var(--tw-border-opacity));
}

.border-success {
  --tw-border-opacity: 1;
  border-color: hsl(var(--nextui-success) / var(--nextui-success-opacity, var(--tw-border-opacity)));
}

.border-transparent {
  border-color: transparent;
}

.border-warning {
  --tw-border-opacity: 1;
  border-color: hsl(var(--nextui-warning) / var(--nextui-warning-opacity, var(--tw-border-opacity)));
}

.border-x-transparent {
  border-left-color: transparent;
  border-right-color: transparent;
}

.border-y-transparent {
  border-top-color: transparent;
  border-bottom-color: transparent;
}

.border-b-current {
  border-bottom-color: currentColor;
}

.border-b-danger {
  --tw-border-opacity: 1;
  border-bottom-color: hsl(var(--nextui-danger) / var(--nextui-danger-opacity, var(--tw-border-opacity)));
}

.border-b-default {
  --tw-border-opacity: 1;
  border-bottom-color: hsl(var(--nextui-default) / var(--nextui-default-opacity, var(--tw-border-opacity)));
}

.border-b-foreground {
  border-bottom-color: hsl(var(--foreground));
}

.border-b-primary {
  border-bottom-color: hsl(var(--primary));
}

.border-b-secondary {
  border-bottom-color: hsl(var(--secondary));
}

.border-b-success {
  --tw-border-opacity: 1;
  border-bottom-color: hsl(var(--nextui-success) / var(--nextui-success-opacity, var(--tw-border-opacity)));
}

.border-b-warning {
  --tw-border-opacity: 1;
  border-bottom-color: hsl(var(--nextui-warning) / var(--nextui-warning-opacity, var(--tw-border-opacity)));
}

.border-b-white {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(255 255 255 / var(--tw-border-opacity));
}

.border-l-transparent {
  border-left-color: transparent;
}

.border-r-transparent {
  border-right-color: transparent;
}

.border-s-danger {
  --tw-border-opacity: 1;
  border-inline-start-color: hsl(var(--nextui-danger) / var(--nextui-danger-opacity, var(--tw-border-opacity)));
}

.border-s-foreground {
  border-inline-start-color: hsl(var(--foreground));
}

.border-s-primary {
  border-inline-start-color: hsl(var(--primary));
}

.border-s-secondary {
  border-inline-start-color: hsl(var(--secondary));
}

.border-s-success {
  --tw-border-opacity: 1;
  border-inline-start-color: hsl(var(--nextui-success) / var(--nextui-success-opacity, var(--tw-border-opacity)));
}

.border-s-warning {
  --tw-border-opacity: 1;
  border-inline-start-color: hsl(var(--nextui-warning) / var(--nextui-warning-opacity, var(--tw-border-opacity)));
}

.border-t-transparent {
  border-top-color: transparent;
}

.bg-background {
  background-color: hsl(var(--background));
}

.bg-background\/10 {
  background-color: hsl(var(--background) / 0.1);
}

.bg-background\/70 {
  background-color: hsl(var(--background) / 0.7);
}

.bg-background\/80 {
  background-color: hsl(var(--background) / 0.8);
}

.bg-blue-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(59 130 246 / var(--tw-bg-opacity));
}

.bg-content1 {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--nextui-content1) / var(--nextui-content1-opacity, var(--tw-bg-opacity)));
}

.bg-content3 {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--nextui-content3) / var(--nextui-content3-opacity, var(--tw-bg-opacity)));
}

.bg-current {
  background-color: currentColor;
}

.bg-danger {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--nextui-danger) / var(--nextui-danger-opacity, var(--tw-bg-opacity)));
}

.bg-danger-50 {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--nextui-danger-50) / var(--nextui-danger-50-opacity, var(--tw-bg-opacity)));
}

.bg-danger\/20 {
  background-color: hsl(var(--nextui-danger) / 0.2);
}

.bg-default {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--nextui-default) / var(--nextui-default-opacity, var(--tw-bg-opacity)));
}

.bg-default-100 {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--nextui-default-100) / var(--nextui-default-100-opacity, var(--tw-bg-opacity)));
}

.bg-default-200 {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--nextui-default-200) / var(--nextui-default-200-opacity, var(--tw-bg-opacity)));
}

.bg-default-300\/50 {
  background-color: hsl(var(--nextui-default-300) / 0.5);
}

.bg-default-400 {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--nextui-default-400) / var(--nextui-default-400-opacity, var(--tw-bg-opacity)));
}

.bg-default-50 {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--nextui-default-50) / var(--nextui-default-50-opacity, var(--tw-bg-opacity)));
}

.bg-default-500 {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--nextui-default-500) / var(--nextui-default-500-opacity, var(--tw-bg-opacity)));
}

.bg-default\/40 {
  background-color: hsl(var(--nextui-default) / 0.4);
}

.bg-destructive {
  background-color: hsl(var(--destructive));
}

.bg-divider {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--nextui-divider) / var(--nextui-divider-opacity, var(--tw-bg-opacity)));
}

.bg-foreground {
  background-color: hsl(var(--foreground));
}

.bg-foreground\/10 {
  background-color: hsl(var(--foreground) / 0.1);
}

.bg-green-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(74 222 128 / var(--tw-bg-opacity));
}

.bg-header-bg {
  --tw-bg-opacity: 1;
  background-color: rgb(248 249 250 / var(--tw-bg-opacity));
}

.bg-muted {
  background-color: hsl(var(--muted));
}

.bg-overlay\/30 {
  background-color: hsl(var(--nextui-overlay) / 0.3);
}

.bg-overlay\/50 {
  background-color: hsl(var(--nextui-overlay) / 0.5);
}

.bg-pink-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(157 23 77 / var(--tw-bg-opacity));
}

.bg-popover {
  background-color: hsl(var(--popover));
}

.bg-primary {
  background-color: hsl(var(--primary));
}

.bg-primary-50 {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--nextui-primary-50) / var(--nextui-primary-50-opacity, var(--tw-bg-opacity)));
}

.bg-primary-project {
  background-color: #A40364CC;
}

.bg-primary\/20 {
  background-color: hsl(var(--primary) / 0.2);
}

.bg-red-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(254 226 226 / var(--tw-bg-opacity));
}

.bg-secondary {
  background-color: hsl(var(--secondary));
}

.bg-secondary-50 {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--nextui-secondary-50) / var(--nextui-secondary-50-opacity, var(--tw-bg-opacity)));
}

.bg-secondary\/20 {
  background-color: hsl(var(--secondary) / 0.2);
}

.bg-slate-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(241 245 249 / var(--tw-bg-opacity));
}

.bg-slate-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(248 250 252 / var(--tw-bg-opacity));
}

.bg-success {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--nextui-success) / var(--nextui-success-opacity, var(--tw-bg-opacity)));
}

.bg-success-50 {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--nextui-success-50) / var(--nextui-success-50-opacity, var(--tw-bg-opacity)));
}

.bg-success\/20 {
  background-color: hsl(var(--nextui-success) / 0.2);
}

.bg-transparent {
  background-color: transparent;
}

.bg-warning {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--nextui-warning) / var(--nextui-warning-opacity, var(--tw-bg-opacity)));
}

.bg-warning-50 {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--nextui-warning-50) / var(--nextui-warning-50-opacity, var(--tw-bg-opacity)));
}

.bg-warning\/20 {
  background-color: hsl(var(--nextui-warning) / 0.2);
}

.bg-white {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}

.bg-stripe-gradient {
  background-image: linear-gradient(45deg, rgba(0, 0, 0, 0.1) 25%, transparent 25%, transparent 50%, rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 0.1) 75%, transparent 75%, transparent);
}

.bg-\[length\:1\.25rem_1\.25rem\] {
  background-size: 1.25rem 1.25rem;
}

.fill-current {
  fill: currentColor;
}

.fill-primary-project {
  fill: #A40364CC;
}

.stroke-current {
  stroke: currentColor;
}

.stroke-default-300\/50 {
  stroke: hsl(var(--nextui-default-300) / 0.5);
}

.object-cover {
  -o-object-fit: cover;
  object-fit: cover;
}

.p-1 {
  padding: 0.25rem;
}

.p-10 {
  padding: 2.5rem;
}

.p-2 {
  padding: 0.5rem;
}

.p-2\.5 {
  padding: 0.625rem;
}

.p-3 {
  padding: 0.75rem;
}

.p-4 {
  padding: 1rem;
}

.p-5 {
  padding: 1.25rem;
}

.p-6 {
  padding: 1.5rem;
}

.p-7 {
  padding: 1.75rem;
}

.p-8 {
  padding: 2rem;
}

.\!px-1 {
  padding-left: 0.25rem !important;
  padding-right: 0.25rem !important;
}

.px-0 {
  padding-left: 0px;
  padding-right: 0px;
}

.px-1 {
  padding-left: 0.25rem;
  padding-right: 0.25rem;
}

.px-1\.5 {
  padding-left: 0.375rem;
  padding-right: 0.375rem;
}

.px-10 {
  padding-left: 2.5rem;
  padding-right: 2.5rem;
}

.px-2 {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.px-2\.5 {
  padding-left: 0.625rem;
  padding-right: 0.625rem;
}

.px-3 {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}

.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}

.px-5 {
  padding-left: 1.25rem;
  padding-right: 1.25rem;
}

.px-6 {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

.px-8 {
  padding-left: 2rem;
  padding-right: 2rem;
}

.px-unit-0 {
  padding-left: var(--nextui-spacing-unit-0);
  padding-right: var(--nextui-spacing-unit-0);
}

.px-unit-3 {
  padding-left: var(--nextui-spacing-unit-3);
  padding-right: var(--nextui-spacing-unit-3);
}

.px-unit-4 {
  padding-left: var(--nextui-spacing-unit-4);
  padding-right: var(--nextui-spacing-unit-4);
}

.px-unit-6 {
  padding-left: var(--nextui-spacing-unit-6);
  padding-right: var(--nextui-spacing-unit-6);
}

.py-0 {
  padding-top: 0px;
  padding-bottom: 0px;
}

.py-0\.5 {
  padding-top: 0.125rem;
  padding-bottom: 0.125rem;
}

.py-1 {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}

.py-1\.5 {
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
}

.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.py-2\.5 {
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
}

.py-3 {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}

.py-4 {
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.py-5 {
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
}

.\!pb-0 {
  padding-bottom: 0px !important;
}

.pb-0 {
  padding-bottom: 0px;
}

.pb-0\.5 {
  padding-bottom: 0.125rem;
}

.pb-1 {
  padding-bottom: 0.25rem;
}

.pb-1\.5 {
  padding-bottom: 0.375rem;
}

.pb-4 {
  padding-bottom: 1rem;
}

.pe-2 {
  padding-inline-end: 0.5rem;
}

.pl-0 {
  padding-left: 0px;
}

.pl-0\.5 {
  padding-left: 0.125rem;
}

.pl-1 {
  padding-left: 0.25rem;
}

.pl-20 {
  padding-left: 5rem;
}

.pl-7 {
  padding-left: 1.75rem;
}

.pl-8 {
  padding-left: 2rem;
}

.pr-0 {
  padding-right: 0px;
}

.pr-0\.5 {
  padding-right: 0.125rem;
}

.pr-1 {
  padding-right: 0.25rem;
}

.pr-2 {
  padding-right: 0.5rem;
}

.pr-20 {
  padding-right: 5rem;
}

.pr-6 {
  padding-right: 1.5rem;
}

.pr-8 {
  padding-right: 2rem;
}

.pt-0 {
  padding-top: 0px;
}

.pt-2 {
  padding-top: 0.5rem;
}

.pt-8 {
  padding-top: 2rem;
}

.text-left {
  text-align: left;
}

.text-center {
  text-align: center;
}

.text-start {
  text-align: start;
}

.align-middle {
  vertical-align: middle;
}

.font-mono {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}

.font-sans {
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

.text-2xl {
  font-size: 1.5rem;
  line-height: 2rem;
}

.text-\[0\.55rem\] {
  font-size: 0.55rem;
}

.text-\[0\.5rem\] {
  font-size: 0.5rem;
}

.text-\[0\.6rem\] {
  font-size: 0.6rem;
}

.text-large {
  font-size: var(--nextui-font-size-large);
  line-height: var(--nextui-line-height-large);
}

.text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem;
}

.text-medium {
  font-size: var(--nextui-font-size-medium);
  line-height: var(--nextui-line-height-medium);
}

.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.text-small {
  font-size: var(--nextui-font-size-small);
  line-height: var(--nextui-line-height-small);
}

.text-tiny {
  font-size: var(--nextui-font-size-tiny);
  line-height: var(--nextui-line-height-tiny);
}

.text-xl {
  font-size: 1.25rem;
  line-height: 1.75rem;
}

.text-xs {
  font-size: 0.75rem;
  line-height: 1rem;
}

.font-medium {
  font-weight: 500;
}

.font-normal {
  font-weight: 400;
}

.font-semibold {
  font-weight: 600;
}

.capitalize {
  text-transform: capitalize;
}

.tracking-widest {
  letter-spacing: 0.1em;
}

.\!text-danger {
  --tw-text-opacity: 1 !important;
  color: hsl(var(--nextui-danger) / var(--nextui-danger-opacity, var(--tw-text-opacity))) !important;
}

.text-\[\#96005a\] {
  --tw-text-opacity: 1;
  color: rgb(150 0 90 / var(--tw-text-opacity));
}

.text-background {
  color: hsl(var(--background));
}

.text-black {
  --tw-text-opacity: 1;
  color: rgb(0 0 0 / var(--tw-text-opacity));
}

.text-current {
  color: currentColor;
}

.text-danger {
  --tw-text-opacity: 1;
  color: hsl(var(--nextui-danger) / var(--nextui-danger-opacity, var(--tw-text-opacity)));
}

.text-danger-300 {
  --tw-text-opacity: 1;
  color: hsl(var(--nextui-danger-300) / var(--nextui-danger-300-opacity, var(--tw-text-opacity)));
}

.text-danger-foreground {
  --tw-text-opacity: 1;
  color: hsl(var(--nextui-danger-foreground) / var(--nextui-danger-foreground-opacity, var(--tw-text-opacity)));
}

.text-danger\/80 {
  color: hsl(var(--nextui-danger) / 0.8);
}

.text-default-300 {
  --tw-text-opacity: 1;
  color: hsl(var(--nextui-default-300) / var(--nextui-default-300-opacity, var(--tw-text-opacity)));
}

.text-default-400 {
  --tw-text-opacity: 1;
  color: hsl(var(--nextui-default-400) / var(--nextui-default-400-opacity, var(--tw-text-opacity)));
}

.text-default-500 {
  --tw-text-opacity: 1;
  color: hsl(var(--nextui-default-500) / var(--nextui-default-500-opacity, var(--tw-text-opacity)));
}

.text-default-600 {
  --tw-text-opacity: 1;
  color: hsl(var(--nextui-default-600) / var(--nextui-default-600-opacity, var(--tw-text-opacity)));
}

.text-default-foreground {
  --tw-text-opacity: 1;
  color: hsl(var(--nextui-default-foreground) / var(--nextui-default-foreground-opacity, var(--tw-text-opacity)));
}

.text-destructive-foreground {
  color: hsl(var(--destructive-foreground));
}

.text-foreground {
  color: hsl(var(--foreground));
}

.text-foreground-400 {
  --tw-text-opacity: 1;
  color: hsl(var(--nextui-foreground-400) / var(--nextui-foreground-400-opacity, var(--tw-text-opacity)));
}

.text-foreground-500 {
  --tw-text-opacity: 1;
  color: hsl(var(--nextui-foreground-500) / var(--nextui-foreground-500-opacity, var(--tw-text-opacity)));
}

.text-foreground-600 {
  --tw-text-opacity: 1;
  color: hsl(var(--nextui-foreground-600) / var(--nextui-foreground-600-opacity, var(--tw-text-opacity)));
}

.text-foreground\/50 {
  color: hsl(var(--foreground) / 0.5);
}

.text-gray-500 {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity));
}

.text-gray-900 {
  --tw-text-opacity: 1;
  color: rgb(17 24 39 / var(--tw-text-opacity));
}

.text-header-text {
  --tw-text-opacity: 1;
  color: rgb(73 80 87 / var(--tw-text-opacity));
}

.text-inherit {
  color: inherit;
}

.text-muted-foreground {
  color: hsl(var(--muted-foreground));
}

.text-neutral-100 {
  --tw-text-opacity: 1;
  color: rgb(245 245 245 / var(--tw-text-opacity));
}

.text-orange-400 {
  --tw-text-opacity: 1;
  color: rgb(251 146 60 / var(--tw-text-opacity));
}

.text-popover-foreground {
  color: hsl(var(--popover-foreground));
}

.text-primary {
  color: hsl(var(--primary));
}

.text-primary-foreground {
  color: hsl(var(--primary-foreground));
}

.text-primary-project {
  color: #A40364CC;
}

.text-primary\/80 {
  color: hsl(var(--primary) / 0.8);
}

.text-red-500 {
  --tw-text-opacity: 1;
  color: rgb(239 68 68 / var(--tw-text-opacity));
}

.text-red-600 {
  --tw-text-opacity: 1;
  color: rgb(220 38 38 / var(--tw-text-opacity));
}

.text-red-700 {
  --tw-text-opacity: 1;
  color: rgb(185 28 28 / var(--tw-text-opacity));
}

.text-secondary {
  color: hsl(var(--secondary));
}

.text-secondary-foreground {
  color: hsl(var(--secondary-foreground));
}

.text-secondary\/80 {
  color: hsl(var(--secondary) / 0.8);
}

.text-success {
  --tw-text-opacity: 1;
  color: hsl(var(--nextui-success) / var(--nextui-success-opacity, var(--tw-text-opacity)));
}

.text-success-600 {
  --tw-text-opacity: 1;
  color: hsl(var(--nextui-success-600) / var(--nextui-success-600-opacity, var(--tw-text-opacity)));
}

.text-success-foreground {
  --tw-text-opacity: 1;
  color: hsl(var(--nextui-success-foreground) / var(--nextui-success-foreground-opacity, var(--tw-text-opacity)));
}

.text-success\/80 {
  color: hsl(var(--nextui-success) / 0.8);
}

.text-warning {
  --tw-text-opacity: 1;
  color: hsl(var(--nextui-warning) / var(--nextui-warning-opacity, var(--tw-text-opacity)));
}

.text-warning-600 {
  --tw-text-opacity: 1;
  color: hsl(var(--nextui-warning-600) / var(--nextui-warning-600-opacity, var(--tw-text-opacity)));
}

.text-warning-foreground {
  --tw-text-opacity: 1;
  color: hsl(var(--nextui-warning-foreground) / var(--nextui-warning-foreground-opacity, var(--tw-text-opacity)));
}

.text-warning\/80 {
  color: hsl(var(--nextui-warning) / 0.8);
}

.text-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}

.underline {
  text-decoration-line: underline;
}

.no-underline {
  text-decoration-line: none;
}

.underline-offset-4 {
  text-underline-offset: 4px;
}

.antialiased {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.subpixel-antialiased {
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
}

.opacity-0 {
  opacity: 0;
}

.opacity-100 {
  opacity: 1;
}

.opacity-30 {
  opacity: 0.3;
}

.opacity-50 {
  opacity: 0.5;
}

.opacity-60 {
  opacity: 0.6;
}

.opacity-70 {
  opacity: 0.7;
}

.opacity-75 {
  opacity: 0.75;
}

.opacity-90 {
  opacity: 0.9;
}

.opacity-\[value\] {
  opacity: value;
}

.opacity-disabled {
  opacity: var(--nextui-disabled-opacity);
}

.shadow {
  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.shadow-\[0_1px_0px_0_rgba\(0\2c 0\2c 0\2c 0\.05\)\] {
  --tw-shadow: 0 1px 0px 0 rgba(0,0,0,0.05);
  --tw-shadow-colored: 0 1px 0px 0 var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.shadow-large {
  --tw-shadow: var(--nextui-box-shadow-large);
  --tw-shadow-colored: var(--nextui-box-shadow-large);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.shadow-lg {
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.shadow-md {
  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.shadow-medium {
  --tw-shadow: var(--nextui-box-shadow-medium);
  --tw-shadow-colored: var(--nextui-box-shadow-medium);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.shadow-none {
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.shadow-sm {
  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.shadow-small {
  --tw-shadow: var(--nextui-box-shadow-small);
  --tw-shadow-colored: var(--nextui-box-shadow-small);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.shadow-xl {
  --tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.shadow-black\/5 {
  --tw-shadow-color: rgb(0 0 0 / 0.05);
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-danger\/40 {
  --tw-shadow-color: hsl(var(--nextui-danger) / 0.4);
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-default\/50 {
  --tw-shadow-color: hsl(var(--nextui-default) / 0.5);
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-foreground\/40 {
  --tw-shadow-color: hsl(var(--foreground) / 0.4);
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-primary\/40 {
  --tw-shadow-color: hsl(var(--primary) / 0.4);
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-secondary\/40 {
  --tw-shadow-color: hsl(var(--secondary) / 0.4);
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-success\/40 {
  --tw-shadow-color: hsl(var(--nextui-success) / 0.4);
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-warning\/40 {
  --tw-shadow-color: hsl(var(--nextui-warning) / 0.4);
  --tw-shadow: var(--tw-shadow-colored);
}

.\!outline-none {
  outline: 2px solid transparent !important;
  outline-offset: 2px !important;
}

.outline-none {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.outline {
  outline-style: solid;
}

.ring-1 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}

.ring-2 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}

.ring-background {
  --tw-ring-color: hsl(var(--background));
}

.ring-danger {
  --tw-ring-opacity: 1;
  --tw-ring-color: hsl(var(--nextui-danger) / var(--nextui-danger-opacity, var(--tw-ring-opacity)));
}

.ring-default {
  --tw-ring-opacity: 1;
  --tw-ring-color: hsl(var(--nextui-default) / var(--nextui-default-opacity, var(--tw-ring-opacity)));
}

.ring-focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: hsl(var(--nextui-focus) / var(--nextui-focus-opacity, var(--tw-ring-opacity)));
}

.ring-primary {
  --tw-ring-color: hsl(var(--primary));
}

.ring-secondary {
  --tw-ring-color: hsl(var(--secondary));
}

.ring-success {
  --tw-ring-opacity: 1;
  --tw-ring-color: hsl(var(--nextui-success) / var(--nextui-success-opacity, var(--tw-ring-opacity)));
}

.ring-transparent {
  --tw-ring-color: transparent;
}

.ring-warning {
  --tw-ring-opacity: 1;
  --tw-ring-color: hsl(var(--nextui-warning) / var(--nextui-warning-opacity, var(--tw-ring-opacity)));
}

.ring-offset-2 {
  --tw-ring-offset-width: 2px;
}

.ring-offset-background {
  --tw-ring-offset-color: hsl(var(--background));
}

.blur {
  --tw-blur: blur(8px);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.blur-lg {
  --tw-blur: blur(16px);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.saturate-150 {
  --tw-saturate: saturate(1.5);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.filter {
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.backdrop-blur {
  --tw-backdrop-blur: blur(8px);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}

.backdrop-blur-lg {
  --tw-backdrop-blur: blur(16px);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}

.backdrop-blur-md {
  --tw-backdrop-blur: blur(12px);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}

.backdrop-blur-sm {
  --tw-backdrop-blur: blur(4px);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}

.backdrop-blur-xl {
  --tw-backdrop-blur: blur(24px);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}

.backdrop-opacity-disabled {
  --tw-backdrop-opacity: opacity(var(--nextui-disabled-opacity));
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}

.backdrop-saturate-150 {
  --tw-backdrop-saturate: saturate(1.5);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}

.backdrop-filter {
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}

.\!transition-none {
  transition-property: none !important;
}

.transition {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.transition-\[transform\2c color\2c left\2c opacity\] {
  transition-property: transform,color,left,opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.transition-colors {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.transition-none {
  transition-property: none;
}

.transition-opacity {
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.transition-shadow {
  transition-property: box-shadow;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.transition-transform {
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.\!duration-100 {
  transition-duration: 100ms !important;
}

.\!duration-150 {
  transition-duration: 150ms !important;
}

.\!duration-200 {
  transition-duration: 200ms !important;
}

.\!duration-300 {
  transition-duration: 300ms !important;
}

.\!duration-500 {
  transition-duration: 500ms !important;
}

.duration-150 {
  transition-duration: 150ms;
}

.duration-200 {
  transition-duration: 200ms;
}

.duration-300 {
  transition-duration: 300ms;
}

.\!ease-out {
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1) !important;
}

.\!ease-soft-spring {
  transition-timing-function: cubic-bezier(0.155, 1.105, 0.295, 1.12) !important;
}

.ease-in {
  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
}

.ease-out {
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
}

.will-change-auto {
  will-change: auto;
}

.will-change-transform {
  will-change: transform;
}

@keyframes enter {
  from {
    opacity: var(--tw-enter-opacity, 1);
    transform: translate3d(var(--tw-enter-translate-x, 0), var(--tw-enter-translate-y, 0), 0) scale3d(var(--tw-enter-scale, 1), var(--tw-enter-scale, 1), var(--tw-enter-scale, 1)) rotate(var(--tw-enter-rotate, 0));
  }
}

@keyframes exit {
  to {
    opacity: var(--tw-exit-opacity, 1);
    transform: translate3d(var(--tw-exit-translate-x, 0), var(--tw-exit-translate-y, 0), 0) scale3d(var(--tw-exit-scale, 1), var(--tw-exit-scale, 1), var(--tw-exit-scale, 1)) rotate(var(--tw-exit-rotate, 0));
  }
}

.\!duration-100 {
  animation-duration: 100ms !important;
}

.\!duration-150 {
  animation-duration: 150ms !important;
}

.\!duration-200 {
  animation-duration: 200ms !important;
}

.\!duration-300 {
  animation-duration: 300ms !important;
}

.\!duration-500 {
  animation-duration: 500ms !important;
}

.duration-150 {
  animation-duration: 150ms;
}

.duration-200 {
  animation-duration: 200ms;
}

.duration-300 {
  animation-duration: 300ms;
}

.\!ease-out {
  animation-timing-function: cubic-bezier(0, 0, 0.2, 1) !important;
}

.\!ease-soft-spring {
  animation-timing-function: cubic-bezier(0.155, 1.105, 0.295, 1.12) !important;
}

.ease-in {
  animation-timing-function: cubic-bezier(0.4, 0, 1, 1);
}

.ease-out {
  animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
}

.running {
  animation-play-state: running;
}

:root,.light,[data-theme="light"] {
  color-scheme: light;
  --nextui-background: 0 0% 100%;
  --nextui-foreground-50: 0 0% 98%;
  --nextui-foreground-100: 240 5% 96%;
  --nextui-foreground-200: 240 6% 90%;
  --nextui-foreground-300: 240 5% 84%;
  --nextui-foreground-400: 240 5% 65%;
  --nextui-foreground-500: 240 4% 46%;
  --nextui-foreground-600: 240 5% 34%;
  --nextui-foreground-700: 240 5% 26%;
  --nextui-foreground-800: 240 4% 16%;
  --nextui-foreground-900: 240 6% 10%;
  --nextui-foreground: 202 24% 9%;
  --nextui-divider: 0 0% 7%;
  --nextui-divider-opacity: 0.15;
  --nextui-focus: 212 100% 47%;
  --nextui-overlay: 0 0% 0%;
  --nextui-content1: 0 0% 100%;
  --nextui-content1-foreground: 202 24% 9%;
  --nextui-content2: 240 5% 96%;
  --nextui-content2-foreground: 240 4% 16%;
  --nextui-content3: 240 6% 90%;
  --nextui-content3-foreground: 240 5% 26%;
  --nextui-content4: 240 5% 84%;
  --nextui-content4-foreground: 240 5% 34%;
  --nextui-default-50: 0 0% 98%;
  --nextui-default-100: 240 5% 96%;
  --nextui-default-200: 240 6% 90%;
  --nextui-default-300: 240 5% 84%;
  --nextui-default-400: 240 5% 65%;
  --nextui-default-500: 240 4% 46%;
  --nextui-default-600: 240 5% 34%;
  --nextui-default-700: 240 5% 26%;
  --nextui-default-800: 240 4% 16%;
  --nextui-default-900: 240 6% 10%;
  --nextui-default-foreground: 0 0% 0%;
  --nextui-default: 240 5% 84%;
  --nextui-primary-50: 213 92% 95%;
  --nextui-primary-100: 212 92% 90%;
  --nextui-primary-200: 212 92% 79%;
  --nextui-primary-300: 212 92% 69%;
  --nextui-primary-400: 212 92% 58%;
  --nextui-primary-500: 212 100% 47%;
  --nextui-primary-600: 212 100% 38%;
  --nextui-primary-700: 212 100% 29%;
  --nextui-primary-800: 212 100% 19%;
  --nextui-primary-900: 212 100% 10%;
  --nextui-primary-foreground: 0 0% 100%;
  --nextui-primary: 212 100% 47%;
  --nextui-secondary-50: 270 62% 95%;
  --nextui-secondary-100: 270 59% 89%;
  --nextui-secondary-200: 270 59% 79%;
  --nextui-secondary-300: 270 59% 68%;
  --nextui-secondary-400: 270 59% 58%;
  --nextui-secondary-500: 270 67% 47%;
  --nextui-secondary-600: 270 67% 38%;
  --nextui-secondary-700: 270 67% 28%;
  --nextui-secondary-800: 270 67% 19%;
  --nextui-secondary-900: 270 67% 9%;
  --nextui-secondary-foreground: 0 0% 100%;
  --nextui-secondary: 270 67% 47%;
  --nextui-success-50: 147 64% 95%;
  --nextui-success-100: 146 61% 89%;
  --nextui-success-200: 146 62% 77%;
  --nextui-success-300: 146 63% 66%;
  --nextui-success-400: 146 62% 55%;
  --nextui-success-500: 146 79% 44%;
  --nextui-success-600: 146 80% 35%;
  --nextui-success-700: 146 79% 26%;
  --nextui-success-800: 146 80% 17%;
  --nextui-success-900: 146 78% 9%;
  --nextui-success-foreground: 0 0% 0%;
  --nextui-success: 146 79% 44%;
  --nextui-warning-50: 55 92% 95%;
  --nextui-warning-100: 37 91% 91%;
  --nextui-warning-200: 37 91% 82%;
  --nextui-warning-300: 37 91% 73%;
  --nextui-warning-400: 37 91% 64%;
  --nextui-warning-500: 37 91% 55%;
  --nextui-warning-600: 37 74% 44%;
  --nextui-warning-700: 37 74% 33%;
  --nextui-warning-800: 37 75% 22%;
  --nextui-warning-900: 37 75% 11%;
  --nextui-warning-foreground: 0 0% 0%;
  --nextui-warning: 37 91% 55%;
  --nextui-danger-50: 339 92% 95%;
  --nextui-danger-100: 340 92% 90%;
  --nextui-danger-200: 339 90% 80%;
  --nextui-danger-300: 339 91% 71%;
  --nextui-danger-400: 339 90% 61%;
  --nextui-danger-500: 339 90% 51%;
  --nextui-danger-600: 339 87% 41%;
  --nextui-danger-700: 339 86% 31%;
  --nextui-danger-800: 339 87% 20%;
  --nextui-danger-900: 340 85% 10%;
  --nextui-danger-foreground: 0 0% 100%;
  --nextui-danger: 339 90% 51%;
  --nextui-spacing-unit: 4px;
  --nextui-spacing-unit-0: 0px;
  --nextui-spacing-unit-1: 0.25rem;
  --nextui-spacing-unit-2: 0.5rem;
  --nextui-spacing-unit-3: 0.75rem;
  --nextui-spacing-unit-4: 1rem;
  --nextui-spacing-unit-5: 1.25rem;
  --nextui-spacing-unit-6: 1.5rem;
  --nextui-spacing-unit-7: 1.75rem;
  --nextui-spacing-unit-8: 2rem;
  --nextui-spacing-unit-9: 2.25rem;
  --nextui-spacing-unit-10: 2.5rem;
  --nextui-spacing-unit-11: 2.75rem;
  --nextui-spacing-unit-12: 3rem;
  --nextui-spacing-unit-13: 3.25rem;
  --nextui-spacing-unit-14: 3.5rem;
  --nextui-spacing-unit-15: 3.75rem;
  --nextui-spacing-unit-16: 4rem;
  --nextui-spacing-unit-17: 4.25rem;
  --nextui-spacing-unit-18: 4.5rem;
  --nextui-spacing-unit-20: 5rem;
  --nextui-spacing-unit-24: 6rem;
  --nextui-spacing-unit-28: 7rem;
  --nextui-spacing-unit-32: 8rem;
  --nextui-spacing-unit-36: 9rem;
  --nextui-spacing-unit-40: 10rem;
  --nextui-spacing-unit-44: 11rem;
  --nextui-spacing-unit-48: 12rem;
  --nextui-spacing-unit-52: 13rem;
  --nextui-spacing-unit-56: 14rem;
  --nextui-spacing-unit-60: 15rem;
  --nextui-spacing-unit-64: 16rem;
  --nextui-spacing-unit-72: 18rem;
  --nextui-spacing-unit-80: 20rem;
  --nextui-spacing-unit-96: 24rem;
  --nextui-spacing-unit-xs: 0.5rem;
  --nextui-spacing-unit-sm: 0.75rem;
  --nextui-spacing-unit-md: 1rem;
  --nextui-spacing-unit-lg: 1.375rem;
  --nextui-spacing-unit-xl: 2.25rem;
  --nextui-spacing-unit-2xl: 3rem;
  --nextui-spacing-unit-3xl: 5rem;
  --nextui-spacing-unit-4xl: 7.5rem;
  --nextui-spacing-unit-5xl: 14rem;
  --nextui-spacing-unit-6xl: 18rem;
  --nextui-spacing-unit-7xl: 24rem;
  --nextui-spacing-unit-8xl: 32rem;
  --nextui-spacing-unit-9xl: 40rem;
  --nextui-spacing-unit-3_5: 0.875rem;
  --nextui-disabled-opacity: .5;
  --nextui-divider-weight: 1px;
  --nextui-font-size-tiny: 0.75rem;
  --nextui-font-size-small: 0.875rem;
  --nextui-font-size-medium: 1rem;
  --nextui-font-size-large: 1.125rem;
  --nextui-line-height-tiny: 1rem;
  --nextui-line-height-small: 1.25rem;
  --nextui-line-height-medium: 1.5rem;
  --nextui-line-height-large: 1.75rem;
  --nextui-radius-small: 8px;
  --nextui-radius-medium: 12px;
  --nextui-radius-large: 14px;
  --nextui-border-width-small: 1px;
  --nextui-border-width-medium: 2px;
  --nextui-border-width-large: 3px;
  --nextui-box-shadow-small: 0px 0px 5px 0px rgb(0 0 0 / 0.02), 0px 2px 10px 0px rgb(0 0 0 / 0.06), 0px 0px 1px 0px rgb(0 0 0 / 0.3);
  --nextui-box-shadow-medium: 0px 0px 15px 0px rgb(0 0 0 / 0.03), 0px 2px 30px 0px rgb(0 0 0 / 0.08), 0px 0px 1px 0px rgb(0 0 0 / 0.3);
  --nextui-box-shadow-large: 0px 0px 30px 0px rgb(0 0 0 / 0.04), 0px 30px 60px 0px rgb(0 0 0 / 0.12), 0px 0px 1px 0px rgb(0 0 0 / 0.3);
  --nextui-hover-opacity: .8;
}

.dark,[data-theme="dark"] {
  color-scheme: dark;
  --nextui-background: 0 0% 0%;
  --nextui-foreground-50: 240 6% 10%;
  --nextui-foreground-100: 240 4% 16%;
  --nextui-foreground-200: 240 5% 26%;
  --nextui-foreground-300: 240 5% 34%;
  --nextui-foreground-400: 240 4% 46%;
  --nextui-foreground-500: 240 5% 65%;
  --nextui-foreground-600: 240 5% 84%;
  --nextui-foreground-700: 240 6% 90%;
  --nextui-foreground-800: 240 5% 96%;
  --nextui-foreground-900: 0 0% 98%;
  --nextui-foreground: 210 6% 93%;
  --nextui-focus: 212 100% 47%;
  --nextui-overlay: 0 0% 0%;
  --nextui-divider: 0 0% 100%;
  --nextui-divider-opacity: 0.15;
  --nextui-content1: 240 6% 10%;
  --nextui-content1-foreground: 0 0% 98%;
  --nextui-content2: 240 4% 16%;
  --nextui-content2-foreground: 240 5% 96%;
  --nextui-content3: 240 5% 26%;
  --nextui-content3-foreground: 240 6% 90%;
  --nextui-content4: 240 5% 34%;
  --nextui-content4-foreground: 240 5% 84%;
  --nextui-default-50: 240 6% 10%;
  --nextui-default-100: 240 4% 16%;
  --nextui-default-200: 240 5% 26%;
  --nextui-default-300: 240 5% 34%;
  --nextui-default-400: 240 4% 46%;
  --nextui-default-500: 240 5% 65%;
  --nextui-default-600: 240 5% 84%;
  --nextui-default-700: 240 6% 90%;
  --nextui-default-800: 240 5% 96%;
  --nextui-default-900: 0 0% 98%;
  --nextui-default-foreground: 0 0% 100%;
  --nextui-default: 240 5% 26%;
  --nextui-primary-50: 212 100% 10%;
  --nextui-primary-100: 212 100% 19%;
  --nextui-primary-200: 212 100% 29%;
  --nextui-primary-300: 212 100% 38%;
  --nextui-primary-400: 212 100% 47%;
  --nextui-primary-500: 212 92% 58%;
  --nextui-primary-600: 212 92% 69%;
  --nextui-primary-700: 212 92% 79%;
  --nextui-primary-800: 212 92% 90%;
  --nextui-primary-900: 213 92% 95%;
  --nextui-primary-foreground: 0 0% 100%;
  --nextui-primary: 212 100% 47%;
  --nextui-secondary-50: 270 67% 9%;
  --nextui-secondary-100: 270 67% 19%;
  --nextui-secondary-200: 270 67% 28%;
  --nextui-secondary-300: 270 67% 38%;
  --nextui-secondary-400: 270 67% 47%;
  --nextui-secondary-500: 270 59% 58%;
  --nextui-secondary-600: 270 59% 68%;
  --nextui-secondary-700: 270 59% 79%;
  --nextui-secondary-800: 270 59% 89%;
  --nextui-secondary-900: 270 62% 95%;
  --nextui-secondary-foreground: 0 0% 100%;
  --nextui-secondary: 270 59% 58%;
  --nextui-success-50: 146 78% 9%;
  --nextui-success-100: 146 80% 17%;
  --nextui-success-200: 146 79% 26%;
  --nextui-success-300: 146 80% 35%;
  --nextui-success-400: 146 79% 44%;
  --nextui-success-500: 146 62% 55%;
  --nextui-success-600: 146 63% 66%;
  --nextui-success-700: 146 62% 77%;
  --nextui-success-800: 146 61% 89%;
  --nextui-success-900: 147 64% 95%;
  --nextui-success-foreground: 0 0% 0%;
  --nextui-success: 146 79% 44%;
  --nextui-warning-50: 37 75% 11%;
  --nextui-warning-100: 37 75% 22%;
  --nextui-warning-200: 37 74% 33%;
  --nextui-warning-300: 37 74% 44%;
  --nextui-warning-400: 37 91% 55%;
  --nextui-warning-500: 37 91% 64%;
  --nextui-warning-600: 37 91% 73%;
  --nextui-warning-700: 37 91% 82%;
  --nextui-warning-800: 37 91% 91%;
  --nextui-warning-900: 55 92% 95%;
  --nextui-warning-foreground: 0 0% 0%;
  --nextui-warning: 37 91% 55%;
  --nextui-danger-50: 340 85% 10%;
  --nextui-danger-100: 339 87% 20%;
  --nextui-danger-200: 339 86% 31%;
  --nextui-danger-300: 339 87% 41%;
  --nextui-danger-400: 339 90% 51%;
  --nextui-danger-500: 339 90% 61%;
  --nextui-danger-600: 339 91% 71%;
  --nextui-danger-700: 339 90% 80%;
  --nextui-danger-800: 340 92% 90%;
  --nextui-danger-900: 339 92% 95%;
  --nextui-danger-foreground: 0 0% 100%;
  --nextui-danger: 339 90% 51%;
  --nextui-spacing-unit: 4px;
  --nextui-spacing-unit-0: 0px;
  --nextui-spacing-unit-1: 0.25rem;
  --nextui-spacing-unit-2: 0.5rem;
  --nextui-spacing-unit-3: 0.75rem;
  --nextui-spacing-unit-4: 1rem;
  --nextui-spacing-unit-5: 1.25rem;
  --nextui-spacing-unit-6: 1.5rem;
  --nextui-spacing-unit-7: 1.75rem;
  --nextui-spacing-unit-8: 2rem;
  --nextui-spacing-unit-9: 2.25rem;
  --nextui-spacing-unit-10: 2.5rem;
  --nextui-spacing-unit-11: 2.75rem;
  --nextui-spacing-unit-12: 3rem;
  --nextui-spacing-unit-13: 3.25rem;
  --nextui-spacing-unit-14: 3.5rem;
  --nextui-spacing-unit-15: 3.75rem;
  --nextui-spacing-unit-16: 4rem;
  --nextui-spacing-unit-17: 4.25rem;
  --nextui-spacing-unit-18: 4.5rem;
  --nextui-spacing-unit-20: 5rem;
  --nextui-spacing-unit-24: 6rem;
  --nextui-spacing-unit-28: 7rem;
  --nextui-spacing-unit-32: 8rem;
  --nextui-spacing-unit-36: 9rem;
  --nextui-spacing-unit-40: 10rem;
  --nextui-spacing-unit-44: 11rem;
  --nextui-spacing-unit-48: 12rem;
  --nextui-spacing-unit-52: 13rem;
  --nextui-spacing-unit-56: 14rem;
  --nextui-spacing-unit-60: 15rem;
  --nextui-spacing-unit-64: 16rem;
  --nextui-spacing-unit-72: 18rem;
  --nextui-spacing-unit-80: 20rem;
  --nextui-spacing-unit-96: 24rem;
  --nextui-spacing-unit-xs: 0.5rem;
  --nextui-spacing-unit-sm: 0.75rem;
  --nextui-spacing-unit-md: 1rem;
  --nextui-spacing-unit-lg: 1.375rem;
  --nextui-spacing-unit-xl: 2.25rem;
  --nextui-spacing-unit-2xl: 3rem;
  --nextui-spacing-unit-3xl: 5rem;
  --nextui-spacing-unit-4xl: 7.5rem;
  --nextui-spacing-unit-5xl: 14rem;
  --nextui-spacing-unit-6xl: 18rem;
  --nextui-spacing-unit-7xl: 24rem;
  --nextui-spacing-unit-8xl: 32rem;
  --nextui-spacing-unit-9xl: 40rem;
  --nextui-spacing-unit-3_5: 0.875rem;
  --nextui-disabled-opacity: .5;
  --nextui-divider-weight: 1px;
  --nextui-font-size-tiny: 0.75rem;
  --nextui-font-size-small: 0.875rem;
  --nextui-font-size-medium: 1rem;
  --nextui-font-size-large: 1.125rem;
  --nextui-line-height-tiny: 1rem;
  --nextui-line-height-small: 1.25rem;
  --nextui-line-height-medium: 1.5rem;
  --nextui-line-height-large: 1.75rem;
  --nextui-radius-small: 8px;
  --nextui-radius-medium: 12px;
  --nextui-radius-large: 14px;
  --nextui-border-width-small: 1px;
  --nextui-border-width-medium: 2px;
  --nextui-border-width-large: 3px;
  --nextui-box-shadow-small: 0px 0px 5px 0px rgb(0 0 0 / 0.05), 0px 2px 10px 0px rgb(0 0 0 / 0.2), inset 0px 0px 1px 0px rgb(255 255 255 / 0.15);
  --nextui-box-shadow-medium: 0px 0px 15px 0px rgb(0 0 0 / 0.06), 0px 2px 30px 0px rgb(0 0 0 / 0.22), inset 0px 0px 1px 0px rgb(255 255 255 / 0.15);
  --nextui-box-shadow-large: 0px 0px 30px 0px rgb(0 0 0 / 0.07), 0px 30px 60px 0px rgb(0 0 0 / 0.26), inset 0px 0px 1px 0px rgb(255 255 255 / 0.15);
  --nextui-hover-opacity: .9;
}

.leading-inherit {
  line-height: inherit;
}

.bg-img-inherit {
  background-image: inherit;
}

.bg-clip-inherit {
  background-clip: inherit;
}

.text-fill-inherit {
  -webkit-text-fill-color: inherit;
}

.tap-highlight-transparent {
  -webkit-tap-highlight-color: transparent;
}

.transition-all {
  transition-property: all;
  transition-timing-function: ease;
  transition-duration: 250ms;
}

.transition-background {
  transition-property: background;
  transition-timing-function: ease;
  transition-duration: 250ms;
}

.transition {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
  transition-timing-function: ease;
  transition-duration: 250ms;
}

.transition-colors {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: ease;
  transition-duration: 250ms;
}

.transition-opacity {
  transition-property: opacity;
  transition-timing-function: ease;
  transition-duration: 250ms;
}

.transition-colors-opacity {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity;
  transition-timing-function: ease;
  transition-duration: 250ms;
}

.transition-width {
  transition-property: width;
  transition-timing-function: ease;
  transition-duration: 250ms;
}

.transition-height {
  transition-property: height;
  transition-timing-function: ease;
  transition-duration: 250ms;
}

.transition-size {
  transition-property: width, height;
  transition-timing-function: ease;
  transition-duration: 250ms;
}

.transition-left {
  transition-property: left;
  transition-timing-function: ease;
  transition-duration: 250ms;
}

.transition-shadow {
  transition-property: box-shadow;
  transition-timing-function: ease;
  transition-duration: 250ms;
}

.transition-transform {
  transition-property: transform;
  transition-timing-function: ease;
  transition-duration: 250ms;
}

.transition-transform-opacity {
  transition-property: transform, opacity;
  transition-timing-function: ease;
  transition-duration: 250ms;
}

.transition-transform-background {
  transition-property: transform, background;
  transition-timing-function: ease;
  transition-duration: 250ms;
}

.transition-transform-colors {
  transition-property: transform, color, background, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: ease;
  transition-duration: 250ms;
}

.transition-transform-colors-opacity {
  transition-property: transform, color, background, background-color, border-color, text-decoration-color, fill, stroke, opacity;
  transition-timing-function: ease;
  transition-duration: 250ms;
}

.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.scrollbar-default {
  -ms-overflow-style: auto;
  scrollbar-width: auto;
}

.scrollbar-default::-webkit-scrollbar {
  display: block;
}

.\[--scale-enter\:100\%\] {
  --scale-enter: 100%;
}

.\[--scale-exit\:100\%\] {
  --scale-exit: 100%;
}

.\[--slide-enter\:0px\] {
  --slide-enter: 0px;
}

.\[--slide-exit\:80px\] {
  --slide-exit: 80px;
}

.placeholder\:text-danger::-moz-placeholder {
  --tw-text-opacity: 1;
  color: hsl(var(--nextui-danger) / var(--nextui-danger-opacity, var(--tw-text-opacity)));
}

.placeholder\:text-danger::placeholder {
  --tw-text-opacity: 1;
  color: hsl(var(--nextui-danger) / var(--nextui-danger-opacity, var(--tw-text-opacity)));
}

.placeholder\:text-foreground-500::-moz-placeholder {
  --tw-text-opacity: 1;
  color: hsl(var(--nextui-foreground-500) / var(--nextui-foreground-500-opacity, var(--tw-text-opacity)));
}

.placeholder\:text-foreground-500::placeholder {
  --tw-text-opacity: 1;
  color: hsl(var(--nextui-foreground-500) / var(--nextui-foreground-500-opacity, var(--tw-text-opacity)));
}

.placeholder\:text-muted-foreground::-moz-placeholder {
  color: hsl(var(--muted-foreground));
}

.placeholder\:text-muted-foreground::placeholder {
  color: hsl(var(--muted-foreground));
}

.placeholder\:text-primary::-moz-placeholder {
  color: hsl(var(--primary));
}

.placeholder\:text-primary::placeholder {
  color: hsl(var(--primary));
}

.placeholder\:text-secondary::-moz-placeholder {
  color: hsl(var(--secondary));
}

.placeholder\:text-secondary::placeholder {
  color: hsl(var(--secondary));
}

.placeholder\:text-success-600::-moz-placeholder {
  --tw-text-opacity: 1;
  color: hsl(var(--nextui-success-600) / var(--nextui-success-600-opacity, var(--tw-text-opacity)));
}

.placeholder\:text-success-600::placeholder {
  --tw-text-opacity: 1;
  color: hsl(var(--nextui-success-600) / var(--nextui-success-600-opacity, var(--tw-text-opacity)));
}

.placeholder\:text-warning-600::-moz-placeholder {
  --tw-text-opacity: 1;
  color: hsl(var(--nextui-warning-600) / var(--nextui-warning-600-opacity, var(--tw-text-opacity)));
}

.placeholder\:text-warning-600::placeholder {
  --tw-text-opacity: 1;
  color: hsl(var(--nextui-warning-600) / var(--nextui-warning-600-opacity, var(--tw-text-opacity)));
}

.before\:absolute::before {
  content: var(--tw-content);
  position: absolute;
}

.before\:inset-0::before {
  content: var(--tw-content);
  inset: 0px;
}

.before\:z-0::before {
  content: var(--tw-content);
  z-index: 0;
}

.before\:z-\[-1\]::before {
  content: var(--tw-content);
  z-index: -1;
}

.before\:box-border::before {
  content: var(--tw-content);
  box-sizing: border-box;
}

.before\:block::before {
  content: var(--tw-content);
  display: block;
}

.before\:hidden::before {
  content: var(--tw-content);
  display: none;
}

.before\:h-0::before {
  content: var(--tw-content);
  height: 0px;
}

.before\:h-0\.5::before {
  content: var(--tw-content);
  height: 0.125rem;
}

.before\:h-11::before {
  content: var(--tw-content);
  height: 2.75rem;
}

.before\:h-2::before {
  content: var(--tw-content);
  height: 0.5rem;
}

.before\:h-2\.5::before {
  content: var(--tw-content);
  height: 0.625rem;
}

.before\:h-px::before {
  content: var(--tw-content);
  height: 1px;
}

.before\:w-0::before {
  content: var(--tw-content);
  width: 0px;
}

.before\:w-11::before {
  content: var(--tw-content);
  width: 2.75rem;
}

.before\:w-2::before {
  content: var(--tw-content);
  width: 0.5rem;
}

.before\:w-2\.5::before {
  content: var(--tw-content);
  width: 0.625rem;
}

.before\:w-6::before {
  content: var(--tw-content);
  width: 1.5rem;
}

.before\:-translate-x-full::before {
  content: var(--tw-content);
  --tw-translate-x: -100%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.before\:-translate-y-1::before {
  content: var(--tw-content);
  --tw-translate-y: -0.25rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.before\:rotate-0::before {
  content: var(--tw-content);
  --tw-rotate: 0deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.before\:rotate-45::before {
  content: var(--tw-content);
  --tw-rotate: 45deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

@keyframes shimmer {
  100% {
    content: var(--tw-content);
    transform: translateX(100%);
  }
}

.before\:animate-\[shimmer_2s_infinite\]::before {
  content: var(--tw-content);
  animation: shimmer 2s infinite;
}

.before\:rounded-\[calc\(theme\(borderRadius\.medium\)\*0\.5\)\]::before {
  content: var(--tw-content);
  border-radius: calc(var(--nextui-radius-medium) * 0.5);
}

.before\:rounded-\[calc\(theme\(borderRadius\.medium\)\*0\.6\)\]::before {
  content: var(--tw-content);
  border-radius: calc(var(--nextui-radius-medium) * 0.6);
}

.before\:rounded-\[calc\(theme\(borderRadius\.medium\)\*0\.7\)\]::before {
  content: var(--tw-content);
  border-radius: calc(var(--nextui-radius-medium) * 0.7);
}

.before\:rounded-full::before {
  content: var(--tw-content);
  border-radius: 9999px;
}

.before\:rounded-none::before {
  content: var(--tw-content);
  border-radius: 0px;
}

.before\:rounded-sm::before {
  content: var(--tw-content);
  border-radius: calc(var(--radius) - 4px);
}

.before\:border-2::before {
  content: var(--tw-content);
  border-width: 2px;
}

.before\:border-t::before {
  content: var(--tw-content);
  border-top-width: 1px;
}

.before\:border-solid::before {
  content: var(--tw-content);
  border-style: solid;
}

.before\:border-content4\/30::before {
  content: var(--tw-content);
  border-color: hsl(var(--nextui-content4) / 0.3);
}

.before\:border-danger::before {
  content: var(--tw-content);
  --tw-border-opacity: 1;
  border-color: hsl(var(--nextui-danger) / var(--nextui-danger-opacity, var(--tw-border-opacity)));
}

.before\:border-default::before {
  content: var(--tw-content);
  --tw-border-opacity: 1;
  border-color: hsl(var(--nextui-default) / var(--nextui-default-opacity, var(--tw-border-opacity)));
}

.before\:bg-content1::before {
  content: var(--tw-content);
  --tw-bg-opacity: 1;
  background-color: hsl(var(--nextui-content1) / var(--nextui-content1-opacity, var(--tw-bg-opacity)));
}

.before\:bg-current::before {
  content: var(--tw-content);
  background-color: currentColor;
}

.before\:bg-danger::before {
  content: var(--tw-content);
  --tw-bg-opacity: 1;
  background-color: hsl(var(--nextui-danger) / var(--nextui-danger-opacity, var(--tw-bg-opacity)));
}

.before\:bg-danger\/20::before {
  content: var(--tw-content);
  background-color: hsl(var(--nextui-danger) / 0.2);
}

.before\:bg-default\/40::before {
  content: var(--tw-content);
  background-color: hsl(var(--nextui-default) / 0.4);
}

.before\:bg-foreground::before {
  content: var(--tw-content);
  background-color: hsl(var(--foreground));
}

.before\:bg-primary::before {
  content: var(--tw-content);
  background-color: hsl(var(--primary));
}

.before\:bg-primary\/20::before {
  content: var(--tw-content);
  background-color: hsl(var(--primary) / 0.2);
}

.before\:bg-secondary::before {
  content: var(--tw-content);
  background-color: hsl(var(--secondary));
}

.before\:bg-secondary\/20::before {
  content: var(--tw-content);
  background-color: hsl(var(--secondary) / 0.2);
}

.before\:bg-success::before {
  content: var(--tw-content);
  --tw-bg-opacity: 1;
  background-color: hsl(var(--nextui-success) / var(--nextui-success-opacity, var(--tw-bg-opacity)));
}

.before\:bg-success\/20::before {
  content: var(--tw-content);
  background-color: hsl(var(--nextui-success) / 0.2);
}

.before\:bg-warning::before {
  content: var(--tw-content);
  --tw-bg-opacity: 1;
  background-color: hsl(var(--nextui-warning) / var(--nextui-warning-opacity, var(--tw-bg-opacity)));
}

.before\:bg-warning\/20::before {
  content: var(--tw-content);
  background-color: hsl(var(--nextui-warning) / 0.2);
}

.before\:bg-gradient-to-r::before {
  content: var(--tw-content);
  background-image: linear-gradient(to right, var(--tw-gradient-stops));
}

.before\:from-transparent::before {
  content: var(--tw-content);
  --tw-gradient-from: transparent var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(0 0 0 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}

.before\:via-content4::before {
  content: var(--tw-content);
  --tw-gradient-to: hsl(var(--nextui-content4) / 0)  var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), hsl(var(--nextui-content4) / var(--nextui-content4-opacity, 1)) var(--tw-gradient-via-position), var(--tw-gradient-to);
}

.before\:to-transparent::before {
  content: var(--tw-content);
  --tw-gradient-to: transparent var(--tw-gradient-to-position);
}

.before\:opacity-0::before {
  content: var(--tw-content);
  opacity: 0;
}

.before\:opacity-100::before {
  content: var(--tw-content);
  opacity: 1;
}

.before\:shadow-small::before {
  content: var(--tw-content);
  --tw-shadow: var(--nextui-box-shadow-small);
  --tw-shadow-colored: var(--nextui-box-shadow-small);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.before\:transition-colors::before {
  content: var(--tw-content);
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.before\:transition-none::before {
  content: var(--tw-content);
  transition-property: none;
}

.before\:transition-opacity::before {
  content: var(--tw-content);
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.before\:transition-transform::before {
  content: var(--tw-content);
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.before\:\!duration-300::before {
  content: var(--tw-content);
  transition-duration: 300ms !important;
}

.before\:duration-150::before {
  content: var(--tw-content);
  transition-duration: 150ms;
}

.before\:content-\[\'\'\]::before {
  --tw-content: '';
  content: var(--tw-content);
}

.before\:\!duration-300::before {
  content: var(--tw-content);
  animation-duration: 300ms !important;
}

.before\:duration-150::before {
  content: var(--tw-content);
  animation-duration: 150ms;
}

.before\:transition-colors::before {
  content: var(--tw-content);
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: ease;
  transition-duration: 250ms;
}

.before\:transition-opacity::before {
  content: var(--tw-content);
  transition-property: opacity;
  transition-timing-function: ease;
  transition-duration: 250ms;
}

.before\:transition-width::before {
  content: var(--tw-content);
  transition-property: width;
  transition-timing-function: ease;
  transition-duration: 250ms;
}

.before\:transition-transform::before {
  content: var(--tw-content);
  transition-property: transform;
  transition-timing-function: ease;
  transition-duration: 250ms;
}

.after\:absolute::after {
  content: var(--tw-content);
  position: absolute;
}

.after\:inset-0::after {
  content: var(--tw-content);
  inset: 0px;
}

.after\:-bottom-1::after {
  content: var(--tw-content);
  bottom: -0.25rem;
}

.after\:-bottom-\[2px\]::after {
  content: var(--tw-content);
  bottom: -2px;
}

.after\:bottom-0::after {
  content: var(--tw-content);
  bottom: 0px;
}

.after\:left-0::after {
  content: var(--tw-content);
  left: 0px;
}

.after\:left-1\/2::after {
  content: var(--tw-content);
  left: 50%;
}

.after\:right-0::after {
  content: var(--tw-content);
  right: 0px;
}

.after\:-z-10::after {
  content: var(--tw-content);
  z-index: -10;
}

.after\:ml-0::after {
  content: var(--tw-content);
  margin-left: 0px;
}

.after\:ml-0\.5::after {
  content: var(--tw-content);
  margin-left: 0.125rem;
}

.after\:block::after {
  content: var(--tw-content);
  display: block;
}

.after\:h-4::after {
  content: var(--tw-content);
  height: 1rem;
}

.after\:h-5::after {
  content: var(--tw-content);
  height: 1.25rem;
}

.after\:h-\[2px\]::after {
  content: var(--tw-content);
  height: 2px;
}

.after\:h-divider::after {
  content: var(--tw-content);
  height: var(--nextui-divider-weight);
}

.after\:h-full::after {
  content: var(--tw-content);
  height: 100%;
}

.after\:h-px::after {
  content: var(--tw-content);
  height: 1px;
}

.after\:w-0::after {
  content: var(--tw-content);
  width: 0px;
}

.after\:w-4::after {
  content: var(--tw-content);
  width: 1rem;
}

.after\:w-5::after {
  content: var(--tw-content);
  width: 1.25rem;
}

.after\:w-6::after {
  content: var(--tw-content);
  width: 1.5rem;
}

.after\:w-\[80\%\]::after {
  content: var(--tw-content);
  width: 80%;
}

.after\:w-full::after {
  content: var(--tw-content);
  width: 100%;
}

.after\:origin-center::after {
  content: var(--tw-content);
  transform-origin: center;
}

.after\:-translate-x-1\/2::after {
  content: var(--tw-content);
  --tw-translate-x: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.after\:translate-y-1::after {
  content: var(--tw-content);
  --tw-translate-y: 0.25rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.after\:rotate-0::after {
  content: var(--tw-content);
  --tw-rotate: 0deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.after\:scale-50::after {
  content: var(--tw-content);
  --tw-scale-x: .5;
  --tw-scale-y: .5;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.after\:rounded-\[calc\(theme\(borderRadius\.large\)\/2\)\]::after {
  content: var(--tw-content);
  border-radius: calc(var(--nextui-radius-large) / 2);
}

.after\:rounded-\[calc\(theme\(borderRadius\.medium\)\*0\.5\)\]::after {
  content: var(--tw-content);
  border-radius: calc(var(--nextui-radius-medium) * 0.5);
}

.after\:rounded-\[calc\(theme\(borderRadius\.medium\)\*0\.6\)\]::after {
  content: var(--tw-content);
  border-radius: calc(var(--nextui-radius-medium) * 0.6);
}

.after\:rounded-\[calc\(theme\(borderRadius\.medium\)\*0\.7\)\]::after {
  content: var(--tw-content);
  border-radius: calc(var(--nextui-radius-medium) * 0.7);
}

.after\:rounded-\[calc\(theme\(borderRadius\.medium\)\/3\)\]::after {
  content: var(--tw-content);
  border-radius: calc(var(--nextui-radius-medium) / 3);
}

.after\:rounded-\[calc\(theme\(borderRadius\.small\)\/3\)\]::after {
  content: var(--tw-content);
  border-radius: calc(var(--nextui-radius-small) / 3);
}

.after\:rounded-full::after {
  content: var(--tw-content);
  border-radius: 9999px;
}

.after\:rounded-none::after {
  content: var(--tw-content);
  border-radius: 0px;
}

.after\:rounded-xl::after {
  content: var(--tw-content);
  border-radius: 0.75rem;
}

.after\:bg-background::after {
  content: var(--tw-content);
  background-color: hsl(var(--background));
}

.after\:bg-content3::after {
  content: var(--tw-content);
  --tw-bg-opacity: 1;
  background-color: hsl(var(--nextui-content3) / var(--nextui-content3-opacity, var(--tw-bg-opacity)));
}

.after\:bg-current::after {
  content: var(--tw-content);
  background-color: currentColor;
}

.after\:bg-danger::after {
  content: var(--tw-content);
  --tw-bg-opacity: 1;
  background-color: hsl(var(--nextui-danger) / var(--nextui-danger-opacity, var(--tw-bg-opacity)));
}

.after\:bg-default::after {
  content: var(--tw-content);
  --tw-bg-opacity: 1;
  background-color: hsl(var(--nextui-default) / var(--nextui-default-opacity, var(--tw-bg-opacity)));
}

.after\:bg-default-foreground::after {
  content: var(--tw-content);
  --tw-bg-opacity: 1;
  background-color: hsl(var(--nextui-default-foreground) / var(--nextui-default-foreground-opacity, var(--tw-bg-opacity)));
}

.after\:bg-divider::after {
  content: var(--tw-content);
  --tw-bg-opacity: 1;
  background-color: hsl(var(--nextui-divider) / var(--nextui-divider-opacity, var(--tw-bg-opacity)));
}

.after\:bg-foreground::after {
  content: var(--tw-content);
  background-color: hsl(var(--foreground));
}

.after\:bg-primary::after {
  content: var(--tw-content);
  background-color: hsl(var(--primary));
}

.after\:bg-secondary::after {
  content: var(--tw-content);
  background-color: hsl(var(--secondary));
}

.after\:bg-success::after {
  content: var(--tw-content);
  --tw-bg-opacity: 1;
  background-color: hsl(var(--nextui-success) / var(--nextui-success-opacity, var(--tw-bg-opacity)));
}

.after\:bg-warning::after {
  content: var(--tw-content);
  --tw-bg-opacity: 1;
  background-color: hsl(var(--nextui-warning) / var(--nextui-warning-opacity, var(--tw-bg-opacity)));
}

.after\:text-background::after {
  content: var(--tw-content);
  color: hsl(var(--background));
}

.after\:text-danger::after {
  content: var(--tw-content);
  --tw-text-opacity: 1;
  color: hsl(var(--nextui-danger) / var(--nextui-danger-opacity, var(--tw-text-opacity)));
}

.after\:text-danger-foreground::after {
  content: var(--tw-content);
  --tw-text-opacity: 1;
  color: hsl(var(--nextui-danger-foreground) / var(--nextui-danger-foreground-opacity, var(--tw-text-opacity)));
}

.after\:text-default-foreground::after {
  content: var(--tw-content);
  --tw-text-opacity: 1;
  color: hsl(var(--nextui-default-foreground) / var(--nextui-default-foreground-opacity, var(--tw-text-opacity)));
}

.after\:text-primary-foreground::after {
  content: var(--tw-content);
  color: hsl(var(--primary-foreground));
}

.after\:text-secondary-foreground::after {
  content: var(--tw-content);
  color: hsl(var(--secondary-foreground));
}

.after\:text-success-foreground::after {
  content: var(--tw-content);
  --tw-text-opacity: 1;
  color: hsl(var(--nextui-success-foreground) / var(--nextui-success-foreground-opacity, var(--tw-text-opacity)));
}

.after\:text-warning-foreground::after {
  content: var(--tw-content);
  --tw-text-opacity: 1;
  color: hsl(var(--nextui-warning-foreground) / var(--nextui-warning-foreground-opacity, var(--tw-text-opacity)));
}

.after\:opacity-0::after {
  content: var(--tw-content);
  opacity: 0;
}

.after\:opacity-100::after {
  content: var(--tw-content);
  opacity: 1;
}

.after\:shadow-\[0_1px_0px_0_rgba\(0\2c 0\2c 0\2c 0\.05\)\]::after {
  content: var(--tw-content);
  --tw-shadow: 0 1px 0px 0 rgba(0,0,0,0.05);
  --tw-shadow-colored: 0 1px 0px 0 var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.after\:shadow-small::after {
  content: var(--tw-content);
  --tw-shadow: var(--nextui-box-shadow-small);
  --tw-shadow-colored: var(--nextui-box-shadow-small);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.after\:transition-all::after {
  content: var(--tw-content);
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.after\:transition-none::after {
  content: var(--tw-content);
  transition-property: none;
}

.after\:transition-transform::after {
  content: var(--tw-content);
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.after\:\!duration-200::after {
  content: var(--tw-content);
  transition-duration: 200ms !important;
}

.after\:duration-150::after {
  content: var(--tw-content);
  transition-duration: 150ms;
}

.after\:\!ease-linear::after {
  content: var(--tw-content);
  transition-timing-function: linear !important;
}

.after\:content-\[\'\'\]::after {
  --tw-content: '';
  content: var(--tw-content);
}

.after\:content-\[\'\*\'\]::after {
  --tw-content: '*';
  content: var(--tw-content);
}

.after\:\!duration-200::after {
  content: var(--tw-content);
  animation-duration: 200ms !important;
}

.after\:duration-150::after {
  content: var(--tw-content);
  animation-duration: 150ms;
}

.after\:\!ease-linear::after {
  content: var(--tw-content);
  animation-timing-function: linear !important;
}

.after\:transition-all::after {
  content: var(--tw-content);
  transition-property: all;
  transition-timing-function: ease;
  transition-duration: 250ms;
}

.after\:transition-background::after {
  content: var(--tw-content);
  transition-property: background;
  transition-timing-function: ease;
  transition-duration: 250ms;
}

.after\:transition-width::after {
  content: var(--tw-content);
  transition-property: width;
  transition-timing-function: ease;
  transition-duration: 250ms;
}

.after\:transition-transform::after {
  content: var(--tw-content);
  transition-property: transform;
  transition-timing-function: ease;
  transition-duration: 250ms;
}

.after\:transition-transform-opacity::after {
  content: var(--tw-content);
  transition-property: transform, opacity;
  transition-timing-function: ease;
  transition-duration: 250ms;
}

.first\:rounded-l-lg:first-child {
  border-top-left-radius: var(--radius);
  border-bottom-left-radius: var(--radius);
}

.first\:rounded-s-full:first-child {
  border-start-start-radius: 9999px;
  border-end-start-radius: 9999px;
}

.first\:rounded-s-large:first-child {
  border-start-start-radius: var(--nextui-radius-large);
  border-end-start-radius: var(--nextui-radius-large);
}

.first\:rounded-s-medium:first-child {
  border-start-start-radius: var(--nextui-radius-medium);
  border-end-start-radius: var(--nextui-radius-medium);
}

.first\:rounded-s-none:first-child {
  border-start-start-radius: 0px;
  border-end-start-radius: 0px;
}

.first\:rounded-s-small:first-child {
  border-start-start-radius: var(--nextui-radius-small);
  border-end-start-radius: var(--nextui-radius-small);
}

.first\:before\:rounded-l-lg:first-child::before {
  content: var(--tw-content);
  border-top-left-radius: var(--radius);
  border-bottom-left-radius: var(--radius);
}

.last\:rounded-e-full:last-child {
  border-start-end-radius: 9999px;
  border-end-end-radius: 9999px;
}

.last\:rounded-e-large:last-child {
  border-start-end-radius: var(--nextui-radius-large);
  border-end-end-radius: var(--nextui-radius-large);
}

.last\:rounded-e-medium:last-child {
  border-start-end-radius: var(--nextui-radius-medium);
  border-end-end-radius: var(--nextui-radius-medium);
}

.last\:rounded-e-none:last-child {
  border-start-end-radius: 0px;
  border-end-end-radius: 0px;
}

.last\:rounded-e-small:last-child {
  border-start-end-radius: var(--nextui-radius-small);
  border-end-end-radius: var(--nextui-radius-small);
}

.last\:rounded-r-lg:last-child {
  border-top-right-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
}

.last\:before\:rounded-r-lg:last-child::before {
  content: var(--tw-content);
  border-top-right-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
}

.first-of-type\:rounded-r-none:first-of-type {
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
}

.last-of-type\:rounded-l-none:last-of-type {
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
}

.focus-within\:border-danger:focus-within {
  --tw-border-opacity: 1;
  border-color: hsl(var(--nextui-danger) / var(--nextui-danger-opacity, var(--tw-border-opacity)));
}

.focus-within\:border-primary:focus-within {
  border-color: hsl(var(--primary));
}

.focus-within\:border-secondary:focus-within {
  border-color: hsl(var(--secondary));
}

.focus-within\:border-success:focus-within {
  --tw-border-opacity: 1;
  border-color: hsl(var(--nextui-success) / var(--nextui-success-opacity, var(--tw-border-opacity)));
}

.focus-within\:border-warning:focus-within {
  --tw-border-opacity: 1;
  border-color: hsl(var(--nextui-warning) / var(--nextui-warning-opacity, var(--tw-border-opacity)));
}

.hover\:scale-125:hover {
  --tw-scale-x: 1.25;
  --tw-scale-y: 1.25;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.hover\:border-default:hover {
  --tw-border-opacity: 1;
  border-color: hsl(var(--nextui-default) / var(--nextui-default-opacity, var(--tw-border-opacity)));
}

.hover\:border-default-300:hover {
  --tw-border-opacity: 1;
  border-color: hsl(var(--nextui-default-300) / var(--nextui-default-300-opacity, var(--tw-border-opacity)));
}

.hover\:\!bg-danger:hover {
  --tw-bg-opacity: 1 !important;
  background-color: hsl(var(--nextui-danger) / var(--nextui-danger-opacity, var(--tw-bg-opacity))) !important;
}

.hover\:\!bg-default:hover {
  --tw-bg-opacity: 1 !important;
  background-color: hsl(var(--nextui-default) / var(--nextui-default-opacity, var(--tw-bg-opacity))) !important;
}

.hover\:\!bg-foreground:hover {
  background-color: hsl(var(--foreground)) !important;
}

.hover\:\!bg-primary:hover {
  background-color: hsl(var(--primary)) !important;
}

.hover\:\!bg-secondary:hover {
  background-color: hsl(var(--secondary)) !important;
}

.hover\:\!bg-success:hover {
  --tw-bg-opacity: 1 !important;
  background-color: hsl(var(--nextui-success) / var(--nextui-success-opacity, var(--tw-bg-opacity))) !important;
}

.hover\:\!bg-warning:hover {
  --tw-bg-opacity: 1 !important;
  background-color: hsl(var(--nextui-warning) / var(--nextui-warning-opacity, var(--tw-bg-opacity))) !important;
}

.hover\:bg-accent:hover {
  background-color: hsl(var(--accent));
}

.hover\:bg-default-100:hover {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--nextui-default-100) / var(--nextui-default-100-opacity, var(--tw-bg-opacity)));
}

.hover\:bg-destructive\/90:hover {
  background-color: hsl(var(--destructive) / 0.9);
}

.hover\:bg-muted\/50:hover {
  background-color: hsl(var(--muted) / 0.5);
}

.hover\:bg-pink-800:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(157 23 77 / var(--tw-bg-opacity));
}

.hover\:bg-primary\/90:hover {
  background-color: hsl(var(--primary) / 0.9);
}

.hover\:bg-secondary:hover {
  background-color: hsl(var(--secondary));
}

.hover\:bg-secondary\/80:hover {
  background-color: hsl(var(--secondary) / 0.8);
}

.hover\:\!text-danger-foreground:hover {
  --tw-text-opacity: 1 !important;
  color: hsl(var(--nextui-danger-foreground) / var(--nextui-danger-foreground-opacity, var(--tw-text-opacity))) !important;
}

.hover\:\!text-primary-foreground:hover {
  color: hsl(var(--primary-foreground)) !important;
}

.hover\:\!text-success-foreground:hover {
  --tw-text-opacity: 1 !important;
  color: hsl(var(--nextui-success-foreground) / var(--nextui-success-foreground-opacity, var(--tw-text-opacity))) !important;
}

.hover\:\!text-warning-foreground:hover {
  --tw-text-opacity: 1 !important;
  color: hsl(var(--nextui-warning-foreground) / var(--nextui-warning-foreground-opacity, var(--tw-text-opacity))) !important;
}

.hover\:text-accent-foreground:hover {
  color: hsl(var(--accent-foreground));
}

.hover\:text-foreground:hover {
  color: hsl(var(--foreground));
}

.hover\:text-secondary-foreground:hover {
  color: hsl(var(--secondary-foreground));
}

.hover\:underline:hover {
  text-decoration-line: underline;
}

.hover\:\!opacity-100:hover {
  opacity: 1 !important;
}

.hover\:opacity-100:hover {
  opacity: 1;
}

.hover\:opacity-80:hover {
  opacity: 0.8;
}

.hover\:after\:bg-danger\/20:hover::after {
  content: var(--tw-content);
  background-color: hsl(var(--nextui-danger) / 0.2);
}

.hover\:after\:bg-foreground\/10:hover::after {
  content: var(--tw-content);
  background-color: hsl(var(--foreground) / 0.1);
}

.hover\:after\:bg-primary\/20:hover::after {
  content: var(--tw-content);
  background-color: hsl(var(--primary) / 0.2);
}

.hover\:after\:bg-secondary\/20:hover::after {
  content: var(--tw-content);
  background-color: hsl(var(--secondary) / 0.2);
}

.hover\:after\:bg-success\/20:hover::after {
  content: var(--tw-content);
  background-color: hsl(var(--nextui-success) / 0.2);
}

.hover\:after\:bg-warning\/20:hover::after {
  content: var(--tw-content);
  background-color: hsl(var(--nextui-warning) / 0.2);
}

.hover\:after\:opacity-100:hover::after {
  content: var(--tw-content);
  opacity: 1;
}

.focus\:border-pink-800:focus {
  --tw-border-opacity: 1;
  border-color: rgb(157 23 77 / var(--tw-border-opacity));
}

.focus\:bg-accent:focus {
  background-color: hsl(var(--accent));
}

.focus\:text-accent-foreground:focus {
  color: hsl(var(--accent-foreground));
}

.focus\:underline:focus {
  text-decoration-line: underline;
}

.focus\:opacity-100:focus {
  opacity: 1;
}

.focus\:outline-none:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.focus\:ring-0:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}

.focus\:ring-2:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}

.focus\:ring-4:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}

.focus\:ring-pink-800:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(157 23 77 / var(--tw-ring-opacity));
}

.focus\:ring-ring:focus {
  --tw-ring-color: hsl(var(--ring));
}

.focus\:ring-offset-2:focus {
  --tw-ring-offset-width: 2px;
}

.focus-visible\:z-10:focus-visible {
  z-index: 10;
}

.focus-visible\:outline-none:focus-visible {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.focus-visible\:outline-2:focus-visible {
  outline-width: 2px;
}

.focus-visible\:outline-offset-2:focus-visible {
  outline-offset: 2px;
}

.focus-visible\:outline-focus:focus-visible {
  outline-color: hsl(var(--nextui-focus) / var(--nextui-focus-opacity, 1));
}

.focus-visible\:ring-2:focus-visible {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}

.focus-visible\:ring-ring:focus-visible {
  --tw-ring-color: hsl(var(--ring));
}

.focus-visible\:ring-offset-2:focus-visible {
  --tw-ring-offset-width: 2px;
}

.active\:bg-default-200:active {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--nextui-default-200) / var(--nextui-default-200-opacity, var(--tw-bg-opacity)));
}

.active\:bg-default-300:active {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--nextui-default-300) / var(--nextui-default-300-opacity, var(--tw-bg-opacity)));
}

.active\:underline:active {
  text-decoration-line: underline;
}

.active\:\!opacity-70:active {
  opacity: 0.7 !important;
}

.active\:opacity-disabled:active {
  opacity: var(--nextui-disabled-opacity);
}

.disabled\:pointer-events-none:disabled {
  pointer-events: none;
}

.disabled\:cursor-not-allowed:disabled {
  cursor: not-allowed;
}

.disabled\:opacity-50:disabled {
  opacity: 0.5;
}

.group:hover .group-hover\:block {
  display: block;
}

.group:hover .group-hover\:hidden {
  display: none;
}

.group:hover .group-hover\:border-current {
  border-color: currentColor;
}

.group:hover .group-hover\:text-current {
  color: currentColor;
}

.group:hover .group-hover\:opacity-100 {
  opacity: 1;
}

.group.is-splitted .group-\[\.is-splitted\]\:rounded-medium {
  border-radius: var(--nextui-radius-medium);
}

.group.destructive .group-\[\.destructive\]\:border-muted\/40 {
  border-color: hsl(var(--muted) / 0.4);
}

.group.is-splitted .group-\[\.is-splitted\]\:bg-content1 {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--nextui-content1) / var(--nextui-content1-opacity, var(--tw-bg-opacity)));
}

.group.is-splitted .group-\[\.is-splitted\]\:px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}

.group.destructive .group-\[\.destructive\]\:text-red-300 {
  --tw-text-opacity: 1;
  color: rgb(252 165 165 / var(--tw-text-opacity));
}

.group.is-splitted .group-\[\.is-splitted\]\:shadow-medium {
  --tw-shadow: var(--nextui-box-shadow-medium);
  --tw-shadow-colored: var(--nextui-box-shadow-medium);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.group.destructive .group-\[\.destructive\]\:hover\:border-destructive\/30:hover {
  border-color: hsl(var(--destructive) / 0.3);
}

.group.destructive .group-\[\.destructive\]\:hover\:bg-destructive:hover {
  background-color: hsl(var(--destructive));
}

.group.destructive .group-\[\.destructive\]\:hover\:text-destructive-foreground:hover {
  color: hsl(var(--destructive-foreground));
}

.group.destructive .group-\[\.destructive\]\:hover\:text-red-50:hover {
  --tw-text-opacity: 1;
  color: rgb(254 242 242 / var(--tw-text-opacity));
}

.group.destructive .group-\[\.destructive\]\:focus\:ring-destructive:focus {
  --tw-ring-color: hsl(var(--destructive));
}

.group.destructive .group-\[\.destructive\]\:focus\:ring-red-400:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(248 113 113 / var(--tw-ring-opacity));
}

.group.destructive .group-\[\.destructive\]\:focus\:ring-offset-red-600:focus {
  --tw-ring-offset-color: #dc2626;
}

.peer:-moz-placeholder-shown ~ .peer-placeholder-shown\:translate-y-0 {
  --tw-translate-y: 0px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.peer:placeholder-shown ~ .peer-placeholder-shown\:translate-y-0 {
  --tw-translate-y: 0px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.peer:-moz-placeholder-shown ~ .peer-placeholder-shown\:scale-100 {
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.peer:placeholder-shown ~ .peer-placeholder-shown\:scale-100 {
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.peer:focus ~ .peer-focus\:left-0 {
  left: 0px;
}

.peer:focus ~ .peer-focus\:-translate-y-6 {
  --tw-translate-y: -1.5rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.peer:focus ~ .peer-focus\:scale-75 {
  --tw-scale-x: .75;
  --tw-scale-y: .75;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.peer:focus ~ .peer-focus\:font-medium {
  font-weight: 500;
}

.peer:focus ~ .peer-focus\:text-\[\#96005a\] {
  --tw-text-opacity: 1;
  color: rgb(150 0 90 / var(--tw-text-opacity));
}

.peer:focus ~ .peer-focus\:text-pink-800 {
  --tw-text-opacity: 1;
  color: rgb(157 23 77 / var(--tw-text-opacity));
}

.aria-expanded\:scale-\[0\.97\][aria-expanded="true"] {
  --tw-scale-x: 0.97;
  --tw-scale-y: 0.97;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.aria-expanded\:opacity-70[aria-expanded="true"] {
  opacity: 0.7;
}

.data-\[disabled\=true\]\:pointer-events-none[data-disabled=true] {
  pointer-events: none;
}

.data-\[disabled\]\:pointer-events-none[data-disabled] {
  pointer-events: none;
}

.data-\[focus-visible\=true\]\:z-10[data-focus-visible=true] {
  z-index: 10;
}

.data-\[focused\=true\]\:z-10[data-focused=true] {
  z-index: 10;
}

.data-\[has-label\=true\]\:mt-\[calc\(theme\(fontSize\.small\)_\+_10px\)\][data-has-label=true] {
  margin-top: calc(var(--nextui-font-size-small) + 10px);
}

.data-\[has-label\=true\]\:mt-\[calc\(theme\(fontSize\.small\)_\+_12px\)\][data-has-label=true] {
  margin-top: calc(var(--nextui-font-size-small) + 12px);
}

.data-\[has-label\=true\]\:mt-\[calc\(theme\(fontSize\.small\)_\+_8px\)\][data-has-label=true] {
  margin-top: calc(var(--nextui-font-size-small) + 8px);
}

.data-\[open\=true\]\:block[data-open=true] {
  display: block;
}

.data-\[open\=true\]\:flex[data-open=true] {
  display: flex;
}

.data-\[justify\=end\]\:flex-grow[data-justify=end] {
  flex-grow: 1;
}

.data-\[justify\=start\]\:flex-grow[data-justify=start] {
  flex-grow: 1;
}

.data-\[justify\=end\]\:basis-0[data-justify=end] {
  flex-basis: 0px;
}

.data-\[justify\=start\]\:basis-0[data-justify=start] {
  flex-basis: 0px;
}

.data-\[focus-visible\=true\]\:-translate-x-3[data-focus-visible=true] {
  --tw-translate-x: -0.75rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.data-\[hover\=true\]\:-translate-x-3[data-hover=true] {
  --tw-translate-x: -0.75rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.data-\[hover\=true\]\:translate-x-0[data-hover=true] {
  --tw-translate-x: 0px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.data-\[side\=bottom\]\:translate-y-1[data-side=bottom] {
  --tw-translate-y: 0.25rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.data-\[side\=left\]\:-translate-x-1[data-side=left] {
  --tw-translate-x: -0.25rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.data-\[side\=right\]\:translate-x-1[data-side=right] {
  --tw-translate-x: 0.25rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.data-\[side\=top\]\:-translate-y-1[data-side=top] {
  --tw-translate-y: -0.25rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.data-\[swipe\=cancel\]\:translate-x-0[data-swipe=cancel] {
  --tw-translate-x: 0px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.data-\[swipe\=end\]\:translate-x-\[var\(--radix-toast-swipe-end-x\)\][data-swipe=end] {
  --tw-translate-x: var(--radix-toast-swipe-end-x);
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.data-\[swipe\=move\]\:translate-x-\[var\(--radix-toast-swipe-move-x\)\][data-swipe=move] {
  --tw-translate-x: var(--radix-toast-swipe-move-x);
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.data-\[before\=true\]\:rotate-180[data-before=true] {
  --tw-rotate: 180deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.data-\[direction\=ascending\]\:rotate-180[data-direction=ascending] {
  --tw-rotate: 180deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.data-\[open\=true\]\:-rotate-90[data-open=true] {
  --tw-rotate: -90deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.data-\[open\=true\]\:rotate-180[data-open=true] {
  --tw-rotate: 180deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.data-\[invisible\=true\]\:scale-0[data-invisible=true] {
  --tw-scale-x: 0;
  --tw-scale-y: 0;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.data-\[pressed\=true\]\:scale-\[0\.97\][data-pressed=true] {
  --tw-scale-x: 0.97;
  --tw-scale-y: 0.97;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.data-\[disabled\=true\]\:cursor-not-allowed[data-disabled=true] {
  cursor: not-allowed;
}

.data-\[dragging\=true\]\:cursor-grabbing[data-dragging=true] {
  cursor: grabbing;
}

.data-\[sortable\=true\]\:cursor-pointer[data-sortable=true] {
  cursor: pointer;
}

.data-\[visible\=true\]\:cursor-pointer[data-visible=true] {
  cursor: pointer;
}

.data-\[orientation\=horizontal\]\:flex-row[data-orientation=horizontal] {
  flex-direction: row;
}

.data-\[has-helper\=true\]\:items-start[data-has-helper=true] {
  align-items: flex-start;
}

.data-\[justify\=start\]\:justify-start[data-justify=start] {
  justify-content: flex-start;
}

.data-\[justify\=end\]\:justify-end[data-justify=end] {
  justify-content: flex-end;
}

.data-\[justify\=center\]\:justify-center[data-justify=center] {
  justify-content: center;
}

.data-\[has-multiple-rows\=true\]\:rounded-large[data-has-multiple-rows=true] {
  border-radius: var(--nextui-radius-large);
}

.data-\[thumb-hidden\=false\]\:border-x-\[calc\(theme\(spacing\.5\)\/2\)\][data-thumb-hidden=false] {
  border-left-width: calc(1.25rem / 2);
  border-right-width: calc(1.25rem / 2);
}

.data-\[thumb-hidden\=false\]\:border-x-\[calc\(theme\(spacing\.6\)\/2\)\][data-thumb-hidden=false] {
  border-left-width: calc(1.5rem / 2);
  border-right-width: calc(1.5rem / 2);
}

.data-\[thumb-hidden\=false\]\:border-x-\[calc\(theme\(spacing\.7\)\/2\)\][data-thumb-hidden=false] {
  border-left-width: calc(1.75rem / 2);
  border-right-width: calc(1.75rem / 2);
}

.data-\[thumb-hidden\=false\]\:border-y-\[calc\(theme\(spacing\.5\)\/2\)\][data-thumb-hidden=false] {
  border-top-width: calc(1.25rem / 2);
  border-bottom-width: calc(1.25rem / 2);
}

.data-\[thumb-hidden\=false\]\:border-y-\[calc\(theme\(spacing\.6\)\/2\)\][data-thumb-hidden=false] {
  border-top-width: calc(1.5rem / 2);
  border-bottom-width: calc(1.5rem / 2);
}

.data-\[thumb-hidden\=false\]\:border-y-\[calc\(theme\(spacing\.7\)\/2\)\][data-thumb-hidden=false] {
  border-top-width: calc(1.75rem / 2);
  border-bottom-width: calc(1.75rem / 2);
}

.data-\[menu-open\=true\]\:border-none[data-menu-open=true] {
  border-style: none;
}

.data-\[active\=true\]\:border-danger[data-active=true] {
  --tw-border-opacity: 1;
  border-color: hsl(var(--nextui-danger) / var(--nextui-danger-opacity, var(--tw-border-opacity)));
}

.data-\[active\=true\]\:border-default-400[data-active=true] {
  --tw-border-opacity: 1;
  border-color: hsl(var(--nextui-default-400) / var(--nextui-default-400-opacity, var(--tw-border-opacity)));
}

.data-\[active\=true\]\:border-primary[data-active=true] {
  border-color: hsl(var(--primary));
}

.data-\[active\=true\]\:border-secondary[data-active=true] {
  border-color: hsl(var(--secondary));
}

.data-\[active\=true\]\:border-success[data-active=true] {
  --tw-border-opacity: 1;
  border-color: hsl(var(--nextui-success) / var(--nextui-success-opacity, var(--tw-border-opacity)));
}

.data-\[active\=true\]\:border-warning[data-active=true] {
  --tw-border-opacity: 1;
  border-color: hsl(var(--nextui-warning) / var(--nextui-warning-opacity, var(--tw-border-opacity)));
}

.data-\[focus\=true\]\:border-danger[data-focus=true] {
  --tw-border-opacity: 1;
  border-color: hsl(var(--nextui-danger) / var(--nextui-danger-opacity, var(--tw-border-opacity)));
}

.data-\[focus\=true\]\:border-default-foreground[data-focus=true] {
  --tw-border-opacity: 1;
  border-color: hsl(var(--nextui-default-foreground) / var(--nextui-default-foreground-opacity, var(--tw-border-opacity)));
}

.data-\[focus\=true\]\:border-primary[data-focus=true] {
  border-color: hsl(var(--primary));
}

.data-\[focus\=true\]\:border-secondary[data-focus=true] {
  border-color: hsl(var(--secondary));
}

.data-\[focus\=true\]\:border-success[data-focus=true] {
  --tw-border-opacity: 1;
  border-color: hsl(var(--nextui-success) / var(--nextui-success-opacity, var(--tw-border-opacity)));
}

.data-\[focus\=true\]\:border-warning[data-focus=true] {
  --tw-border-opacity: 1;
  border-color: hsl(var(--nextui-warning) / var(--nextui-warning-opacity, var(--tw-border-opacity)));
}

.data-\[hover\=true\]\:border-danger[data-hover=true] {
  --tw-border-opacity: 1;
  border-color: hsl(var(--nextui-danger) / var(--nextui-danger-opacity, var(--tw-border-opacity)));
}

.data-\[hover\=true\]\:border-default[data-hover=true] {
  --tw-border-opacity: 1;
  border-color: hsl(var(--nextui-default) / var(--nextui-default-opacity, var(--tw-border-opacity)));
}

.data-\[hover\=true\]\:border-default-400[data-hover=true] {
  --tw-border-opacity: 1;
  border-color: hsl(var(--nextui-default-400) / var(--nextui-default-400-opacity, var(--tw-border-opacity)));
}

.data-\[hover\=true\]\:border-primary[data-hover=true] {
  border-color: hsl(var(--primary));
}

.data-\[hover\=true\]\:border-secondary[data-hover=true] {
  border-color: hsl(var(--secondary));
}

.data-\[hover\=true\]\:border-success[data-hover=true] {
  --tw-border-opacity: 1;
  border-color: hsl(var(--nextui-success) / var(--nextui-success-opacity, var(--tw-border-opacity)));
}

.data-\[hover\=true\]\:border-warning[data-hover=true] {
  --tw-border-opacity: 1;
  border-color: hsl(var(--nextui-warning) / var(--nextui-warning-opacity, var(--tw-border-opacity)));
}

.data-\[open\=true\]\:border-danger[data-open=true] {
  --tw-border-opacity: 1;
  border-color: hsl(var(--nextui-danger) / var(--nextui-danger-opacity, var(--tw-border-opacity)));
}

.data-\[open\=true\]\:border-default-foreground[data-open=true] {
  --tw-border-opacity: 1;
  border-color: hsl(var(--nextui-default-foreground) / var(--nextui-default-foreground-opacity, var(--tw-border-opacity)));
}

.data-\[open\=true\]\:border-primary[data-open=true] {
  border-color: hsl(var(--primary));
}

.data-\[open\=true\]\:border-secondary[data-open=true] {
  border-color: hsl(var(--secondary));
}

.data-\[open\=true\]\:border-success[data-open=true] {
  --tw-border-opacity: 1;
  border-color: hsl(var(--nextui-success) / var(--nextui-success-opacity, var(--tw-border-opacity)));
}

.data-\[open\=true\]\:border-warning[data-open=true] {
  --tw-border-opacity: 1;
  border-color: hsl(var(--nextui-warning) / var(--nextui-warning-opacity, var(--tw-border-opacity)));
}

.data-\[active\=true\]\:bg-danger[data-active=true] {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--nextui-danger) / var(--nextui-danger-opacity, var(--tw-bg-opacity)));
}

.data-\[active\=true\]\:bg-default-400[data-active=true] {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--nextui-default-400) / var(--nextui-default-400-opacity, var(--tw-bg-opacity)));
}

.data-\[active\=true\]\:bg-primary[data-active=true] {
  background-color: hsl(var(--primary));
}

.data-\[active\=true\]\:bg-secondary[data-active=true] {
  background-color: hsl(var(--secondary));
}

.data-\[active\=true\]\:bg-success[data-active=true] {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--nextui-success) / var(--nextui-success-opacity, var(--tw-bg-opacity)));
}

.data-\[active\=true\]\:bg-warning[data-active=true] {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--nextui-warning) / var(--nextui-warning-opacity, var(--tw-bg-opacity)));
}

.data-\[hover\=true\]\:bg-content2[data-hover=true] {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--nextui-content2) / var(--nextui-content2-opacity, var(--tw-bg-opacity)));
}

.data-\[hover\=true\]\:bg-danger[data-hover=true] {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--nextui-danger) / var(--nextui-danger-opacity, var(--tw-bg-opacity)));
}

.data-\[hover\=true\]\:bg-danger-100[data-hover=true] {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--nextui-danger-100) / var(--nextui-danger-100-opacity, var(--tw-bg-opacity)));
}

.data-\[hover\=true\]\:bg-danger\/20[data-hover=true] {
  background-color: hsl(var(--nextui-danger) / 0.2);
}

.data-\[hover\=true\]\:bg-default[data-hover=true] {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--nextui-default) / var(--nextui-default-opacity, var(--tw-bg-opacity)));
}

.data-\[hover\=true\]\:bg-default-100[data-hover=true] {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--nextui-default-100) / var(--nextui-default-100-opacity, var(--tw-bg-opacity)));
}

.data-\[hover\=true\]\:bg-default-200[data-hover=true] {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--nextui-default-200) / var(--nextui-default-200-opacity, var(--tw-bg-opacity)));
}

.data-\[hover\=true\]\:bg-default\/40[data-hover=true] {
  background-color: hsl(var(--nextui-default) / 0.4);
}

.data-\[hover\=true\]\:bg-primary[data-hover=true] {
  background-color: hsl(var(--primary));
}

.data-\[hover\=true\]\:bg-primary-100[data-hover=true] {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--nextui-primary-100) / var(--nextui-primary-100-opacity, var(--tw-bg-opacity)));
}

.data-\[hover\=true\]\:bg-primary\/20[data-hover=true] {
  background-color: hsl(var(--primary) / 0.2);
}

.data-\[hover\=true\]\:bg-secondary[data-hover=true] {
  background-color: hsl(var(--secondary));
}

.data-\[hover\=true\]\:bg-secondary-100[data-hover=true] {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--nextui-secondary-100) / var(--nextui-secondary-100-opacity, var(--tw-bg-opacity)));
}

.data-\[hover\=true\]\:bg-secondary\/20[data-hover=true] {
  background-color: hsl(var(--secondary) / 0.2);
}

.data-\[hover\=true\]\:bg-success[data-hover=true] {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--nextui-success) / var(--nextui-success-opacity, var(--tw-bg-opacity)));
}

.data-\[hover\=true\]\:bg-success-100[data-hover=true] {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--nextui-success-100) / var(--nextui-success-100-opacity, var(--tw-bg-opacity)));
}

.data-\[hover\=true\]\:bg-success\/20[data-hover=true] {
  background-color: hsl(var(--nextui-success) / 0.2);
}

.data-\[hover\=true\]\:bg-transparent[data-hover=true] {
  background-color: transparent;
}

.data-\[hover\=true\]\:bg-warning[data-hover=true] {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--nextui-warning) / var(--nextui-warning-opacity, var(--tw-bg-opacity)));
}

.data-\[hover\=true\]\:bg-warning-100[data-hover=true] {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--nextui-warning-100) / var(--nextui-warning-100-opacity, var(--tw-bg-opacity)));
}

.data-\[hover\=true\]\:bg-warning\/20[data-hover=true] {
  background-color: hsl(var(--nextui-warning) / 0.2);
}

.data-\[in-range\=false\]\:bg-default-200[data-in-range=false] {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--nextui-default-200) / var(--nextui-default-200-opacity, var(--tw-bg-opacity)));
}

.data-\[in-range\=true\]\:bg-background\/50[data-in-range=true] {
  background-color: hsl(var(--background) / 0.5);
}

.data-\[in-range\=true\]\:bg-danger[data-in-range=true] {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--nextui-danger) / var(--nextui-danger-opacity, var(--tw-bg-opacity)));
}

.data-\[in-range\=true\]\:bg-foreground[data-in-range=true] {
  background-color: hsl(var(--foreground));
}

.data-\[in-range\=true\]\:bg-primary[data-in-range=true] {
  background-color: hsl(var(--primary));
}

.data-\[in-range\=true\]\:bg-secondary[data-in-range=true] {
  background-color: hsl(var(--secondary));
}

.data-\[in-range\=true\]\:bg-success[data-in-range=true] {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--nextui-success) / var(--nextui-success-opacity, var(--tw-bg-opacity)));
}

.data-\[in-range\=true\]\:bg-warning[data-in-range=true] {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--nextui-warning) / var(--nextui-warning-opacity, var(--tw-bg-opacity)));
}

.data-\[loaded\=true\]\:\!bg-transparent[data-loaded=true] {
  background-color: transparent !important;
}

.data-\[selected\=true\]\:bg-danger[data-selected=true] {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--nextui-danger) / var(--nextui-danger-opacity, var(--tw-bg-opacity)));
}

.data-\[selected\=true\]\:bg-default[data-selected=true] {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--nextui-default) / var(--nextui-default-opacity, var(--tw-bg-opacity)));
}

.data-\[selected\=true\]\:bg-primary[data-selected=true] {
  background-color: hsl(var(--primary));
}

.data-\[selected\=true\]\:bg-secondary[data-selected=true] {
  background-color: hsl(var(--secondary));
}

.data-\[selected\=true\]\:bg-success[data-selected=true] {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--nextui-success) / var(--nextui-success-opacity, var(--tw-bg-opacity)));
}

.data-\[selected\=true\]\:bg-warning[data-selected=true] {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--nextui-warning) / var(--nextui-warning-opacity, var(--tw-bg-opacity)));
}

.data-\[state\=active\]\:bg-background[data-state=active] {
  background-color: hsl(var(--background));
}

.data-\[state\=open\]\:bg-accent[data-state=open] {
  background-color: hsl(var(--accent));
}

.data-\[state\=selected\]\:bg-muted[data-state=selected] {
  background-color: hsl(var(--muted));
}

.data-\[has-end-content\=true\]\:pe-1\.5[data-has-end-content=true] {
  padding-inline-end: 0.375rem;
}

.data-\[has-start-content\=true\]\:ps-1\.5[data-has-start-content=true] {
  padding-inline-start: 0.375rem;
}

.data-\[has-title\=true\]\:pt-1[data-has-title=true] {
  padding-top: 0.25rem;
}

.data-\[active\=true\]\:font-semibold[data-active=true] {
  font-weight: 600;
}

.data-\[active\=true\]\:text-danger-foreground[data-active=true] {
  --tw-text-opacity: 1;
  color: hsl(var(--nextui-danger-foreground) / var(--nextui-danger-foreground-opacity, var(--tw-text-opacity)));
}

.data-\[active\=true\]\:text-default-foreground[data-active=true] {
  --tw-text-opacity: 1;
  color: hsl(var(--nextui-default-foreground) / var(--nextui-default-foreground-opacity, var(--tw-text-opacity)));
}

.data-\[active\=true\]\:text-primary-foreground[data-active=true] {
  color: hsl(var(--primary-foreground));
}

.data-\[active\=true\]\:text-secondary-foreground[data-active=true] {
  color: hsl(var(--secondary-foreground));
}

.data-\[active\=true\]\:text-success-foreground[data-active=true] {
  --tw-text-opacity: 1;
  color: hsl(var(--nextui-success-foreground) / var(--nextui-success-foreground-opacity, var(--tw-text-opacity)));
}

.data-\[active\=true\]\:text-warning-foreground[data-active=true] {
  --tw-text-opacity: 1;
  color: hsl(var(--nextui-warning-foreground) / var(--nextui-warning-foreground-opacity, var(--tw-text-opacity)));
}

.data-\[disabled\=true\]\:text-default-300[data-disabled=true] {
  --tw-text-opacity: 1;
  color: hsl(var(--nextui-default-300) / var(--nextui-default-300-opacity, var(--tw-text-opacity)));
}

.data-\[hover\=true\]\:text-danger[data-hover=true] {
  --tw-text-opacity: 1;
  color: hsl(var(--nextui-danger) / var(--nextui-danger-opacity, var(--tw-text-opacity)));
}

.data-\[hover\=true\]\:text-danger-foreground[data-hover=true] {
  --tw-text-opacity: 1;
  color: hsl(var(--nextui-danger-foreground) / var(--nextui-danger-foreground-opacity, var(--tw-text-opacity)));
}

.data-\[hover\=true\]\:text-default-500[data-hover=true] {
  --tw-text-opacity: 1;
  color: hsl(var(--nextui-default-500) / var(--nextui-default-500-opacity, var(--tw-text-opacity)));
}

.data-\[hover\=true\]\:text-default-foreground[data-hover=true] {
  --tw-text-opacity: 1;
  color: hsl(var(--nextui-default-foreground) / var(--nextui-default-foreground-opacity, var(--tw-text-opacity)));
}

.data-\[hover\=true\]\:text-foreground-400[data-hover=true] {
  --tw-text-opacity: 1;
  color: hsl(var(--nextui-foreground-400) / var(--nextui-foreground-400-opacity, var(--tw-text-opacity)));
}

.data-\[hover\=true\]\:text-primary[data-hover=true] {
  color: hsl(var(--primary));
}

.data-\[hover\=true\]\:text-primary-foreground[data-hover=true] {
  color: hsl(var(--primary-foreground));
}

.data-\[hover\=true\]\:text-secondary[data-hover=true] {
  color: hsl(var(--secondary));
}

.data-\[hover\=true\]\:text-secondary-foreground[data-hover=true] {
  color: hsl(var(--secondary-foreground));
}

.data-\[hover\=true\]\:text-success[data-hover=true] {
  --tw-text-opacity: 1;
  color: hsl(var(--nextui-success) / var(--nextui-success-opacity, var(--tw-text-opacity)));
}

.data-\[hover\=true\]\:text-success-foreground[data-hover=true] {
  --tw-text-opacity: 1;
  color: hsl(var(--nextui-success-foreground) / var(--nextui-success-foreground-opacity, var(--tw-text-opacity)));
}

.data-\[hover\=true\]\:text-warning[data-hover=true] {
  --tw-text-opacity: 1;
  color: hsl(var(--nextui-warning) / var(--nextui-warning-opacity, var(--tw-text-opacity)));
}

.data-\[hover\=true\]\:text-warning-foreground[data-hover=true] {
  --tw-text-opacity: 1;
  color: hsl(var(--nextui-warning-foreground) / var(--nextui-warning-foreground-opacity, var(--tw-text-opacity)));
}

.data-\[selected\=true\]\:text-danger[data-selected=true] {
  --tw-text-opacity: 1;
  color: hsl(var(--nextui-danger) / var(--nextui-danger-opacity, var(--tw-text-opacity)));
}

.data-\[selected\=true\]\:text-danger-foreground[data-selected=true] {
  --tw-text-opacity: 1;
  color: hsl(var(--nextui-danger-foreground) / var(--nextui-danger-foreground-opacity, var(--tw-text-opacity)));
}

.data-\[selected\=true\]\:text-default-foreground[data-selected=true] {
  --tw-text-opacity: 1;
  color: hsl(var(--nextui-default-foreground) / var(--nextui-default-foreground-opacity, var(--tw-text-opacity)));
}

.data-\[selected\=true\]\:text-primary[data-selected=true] {
  color: hsl(var(--primary));
}

.data-\[selected\=true\]\:text-primary-foreground[data-selected=true] {
  color: hsl(var(--primary-foreground));
}

.data-\[selected\=true\]\:text-secondary[data-selected=true] {
  color: hsl(var(--secondary));
}

.data-\[selected\=true\]\:text-secondary-foreground[data-selected=true] {
  color: hsl(var(--secondary-foreground));
}

.data-\[selected\=true\]\:text-success-600[data-selected=true] {
  --tw-text-opacity: 1;
  color: hsl(var(--nextui-success-600) / var(--nextui-success-600-opacity, var(--tw-text-opacity)));
}

.data-\[selected\=true\]\:text-success-foreground[data-selected=true] {
  --tw-text-opacity: 1;
  color: hsl(var(--nextui-success-foreground) / var(--nextui-success-foreground-opacity, var(--tw-text-opacity)));
}

.data-\[selected\=true\]\:text-warning-600[data-selected=true] {
  --tw-text-opacity: 1;
  color: hsl(var(--nextui-warning-600) / var(--nextui-warning-600-opacity, var(--tw-text-opacity)));
}

.data-\[selected\=true\]\:text-warning-foreground[data-selected=true] {
  --tw-text-opacity: 1;
  color: hsl(var(--nextui-warning-foreground) / var(--nextui-warning-foreground-opacity, var(--tw-text-opacity)));
}

.data-\[state\=active\]\:text-foreground[data-state=active] {
  color: hsl(var(--foreground));
}

.data-\[disabled\=true\]\:opacity-30[data-disabled=true] {
  opacity: 0.3;
}

.data-\[disabled\]\:opacity-50[data-disabled] {
  opacity: 0.5;
}

.data-\[hover-unselected\=true\]\:opacity-disabled[data-hover-unselected=true] {
  opacity: var(--nextui-disabled-opacity);
}

.data-\[hover\=true\]\:opacity-hover[data-hover=true] {
  opacity: var(--nextui-hover-opacity);
}

.data-\[in-range\=true\]\:opacity-100[data-in-range=true] {
  opacity: 1;
}

.data-\[invisible\=true\]\:opacity-0[data-invisible=true] {
  opacity: 0;
}

.data-\[loaded\=true\]\:opacity-100[data-loaded=true] {
  opacity: 1;
}

.data-\[moving\]\:opacity-100[data-moving] {
  opacity: 1;
}

.data-\[pressed\=true\]\:opacity-70[data-pressed=true] {
  opacity: 0.7;
}

.data-\[visible\=true\]\:opacity-100[data-visible=true] {
  opacity: 1;
}

.data-\[active\=true\]\:shadow-md[data-active=true] {
  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.data-\[hover\=true\]\:shadow-lg[data-hover=true] {
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.data-\[state\=active\]\:shadow-sm[data-state=active] {
  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.data-\[active\=true\]\:shadow-danger\/40[data-active=true] {
  --tw-shadow-color: hsl(var(--nextui-danger) / 0.4);
  --tw-shadow: var(--tw-shadow-colored);
}

.data-\[active\=true\]\:shadow-default\/50[data-active=true] {
  --tw-shadow-color: hsl(var(--nextui-default) / 0.5);
  --tw-shadow: var(--tw-shadow-colored);
}

.data-\[active\=true\]\:shadow-primary\/40[data-active=true] {
  --tw-shadow-color: hsl(var(--primary) / 0.4);
  --tw-shadow: var(--tw-shadow-colored);
}

.data-\[active\=true\]\:shadow-secondary\/40[data-active=true] {
  --tw-shadow-color: hsl(var(--secondary) / 0.4);
  --tw-shadow: var(--tw-shadow-colored);
}

.data-\[active\=true\]\:shadow-success\/40[data-active=true] {
  --tw-shadow-color: hsl(var(--nextui-success) / 0.4);
  --tw-shadow: var(--tw-shadow-colored);
}

.data-\[active\=true\]\:shadow-warning\/40[data-active=true] {
  --tw-shadow-color: hsl(var(--nextui-warning) / 0.4);
  --tw-shadow: var(--tw-shadow-colored);
}

.data-\[hover\=true\]\:shadow-danger\/30[data-hover=true] {
  --tw-shadow-color: hsl(var(--nextui-danger) / 0.3);
  --tw-shadow: var(--tw-shadow-colored);
}

.data-\[hover\=true\]\:shadow-default\/50[data-hover=true] {
  --tw-shadow-color: hsl(var(--nextui-default) / 0.5);
  --tw-shadow: var(--tw-shadow-colored);
}

.data-\[hover\=true\]\:shadow-primary\/30[data-hover=true] {
  --tw-shadow-color: hsl(var(--primary) / 0.3);
  --tw-shadow: var(--tw-shadow-colored);
}

.data-\[hover\=true\]\:shadow-secondary\/30[data-hover=true] {
  --tw-shadow-color: hsl(var(--secondary) / 0.3);
  --tw-shadow: var(--tw-shadow-colored);
}

.data-\[hover\=true\]\:shadow-success\/30[data-hover=true] {
  --tw-shadow-color: hsl(var(--nextui-success) / 0.3);
  --tw-shadow: var(--tw-shadow-colored);
}

.data-\[hover\=true\]\:shadow-warning\/30[data-hover=true] {
  --tw-shadow-color: hsl(var(--nextui-warning) / 0.3);
  --tw-shadow: var(--tw-shadow-colored);
}

.data-\[focus-visible\=true\]\:outline-2[data-focus-visible=true] {
  outline-width: 2px;
}

.data-\[focus-visible\=true\]\:outline-offset-2[data-focus-visible=true] {
  outline-offset: 2px;
}

.data-\[focus-visible\=true\]\:outline-focus[data-focus-visible=true] {
  outline-color: hsl(var(--nextui-focus) / var(--nextui-focus-opacity, 1));
}

.data-\[focus-visible\]\:outline-danger-foreground[data-focus-visible] {
  outline-color: hsl(var(--nextui-danger-foreground) / var(--nextui-danger-foreground-opacity, 1));
}

.data-\[focus-visible\]\:outline-default-foreground[data-focus-visible] {
  outline-color: hsl(var(--nextui-default-foreground) / var(--nextui-default-foreground-opacity, 1));
}

.data-\[focus-visible\]\:outline-primary-foreground[data-focus-visible] {
  outline-color: hsl(var(--primary-foreground));
}

.data-\[focus-visible\]\:outline-secondary-foreground[data-focus-visible] {
  outline-color: hsl(var(--secondary-foreground));
}

.data-\[focus-visible\]\:outline-success-foreground[data-focus-visible] {
  outline-color: hsl(var(--nextui-success-foreground) / var(--nextui-success-foreground-opacity, 1));
}

.data-\[focus-visible\]\:outline-warning-foreground[data-focus-visible] {
  outline-color: hsl(var(--nextui-warning-foreground) / var(--nextui-warning-foreground-opacity, 1));
}

.data-\[menu-open\=true\]\:backdrop-blur-xl[data-menu-open=true] {
  --tw-backdrop-blur: blur(24px);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}

.data-\[hover\=true\]\:transition-colors[data-hover=true] {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.data-\[moving\=true\]\:transition-transform[data-moving=true] {
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.data-\[sortable\=true\]\:transition-colors[data-sortable=true] {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.data-\[swipe\=move\]\:transition-none[data-swipe=move] {
  transition-property: none;
}

.data-\[state\=open\]\:animate-in[data-state=open] {
  animation-name: enter;
  animation-duration: 150ms;
  --tw-enter-opacity: initial;
  --tw-enter-scale: initial;
  --tw-enter-rotate: initial;
  --tw-enter-translate-x: initial;
  --tw-enter-translate-y: initial;
}

.data-\[state\=closed\]\:animate-out[data-state=closed] {
  animation-name: exit;
  animation-duration: 150ms;
  --tw-exit-opacity: initial;
  --tw-exit-scale: initial;
  --tw-exit-rotate: initial;
  --tw-exit-translate-x: initial;
  --tw-exit-translate-y: initial;
}

.data-\[swipe\=end\]\:animate-out[data-swipe=end] {
  animation-name: exit;
  animation-duration: 150ms;
  --tw-exit-opacity: initial;
  --tw-exit-scale: initial;
  --tw-exit-rotate: initial;
  --tw-exit-translate-x: initial;
  --tw-exit-translate-y: initial;
}

.data-\[state\=closed\]\:fade-out-0[data-state=closed] {
  --tw-exit-opacity: 0;
}

.data-\[state\=closed\]\:fade-out-80[data-state=closed] {
  --tw-exit-opacity: 0.8;
}

.data-\[state\=open\]\:fade-in-0[data-state=open] {
  --tw-enter-opacity: 0;
}

.data-\[state\=closed\]\:zoom-out-95[data-state=closed] {
  --tw-exit-scale: .95;
}

.data-\[state\=open\]\:zoom-in-95[data-state=open] {
  --tw-enter-scale: .95;
}

.data-\[side\=bottom\]\:slide-in-from-top-2[data-side=bottom] {
  --tw-enter-translate-y: -0.5rem;
}

.data-\[side\=left\]\:slide-in-from-right-2[data-side=left] {
  --tw-enter-translate-x: 0.5rem;
}

.data-\[side\=right\]\:slide-in-from-left-2[data-side=right] {
  --tw-enter-translate-x: -0.5rem;
}

.data-\[side\=top\]\:slide-in-from-bottom-2[data-side=top] {
  --tw-enter-translate-y: 0.5rem;
}

.data-\[state\=closed\]\:slide-out-to-left-1\/2[data-state=closed] {
  --tw-exit-translate-x: -50%;
}

.data-\[state\=closed\]\:slide-out-to-right-full[data-state=closed] {
  --tw-exit-translate-x: 100%;
}

.data-\[state\=closed\]\:slide-out-to-top-\[48\%\][data-state=closed] {
  --tw-exit-translate-y: -48%;
}

.data-\[state\=open\]\:slide-in-from-left-1\/2[data-state=open] {
  --tw-enter-translate-x: -50%;
}

.data-\[state\=open\]\:slide-in-from-top-\[48\%\][data-state=open] {
  --tw-enter-translate-y: -48%;
}

.data-\[state\=open\]\:slide-in-from-top-full[data-state=open] {
  --tw-enter-translate-y: -100%;
}

.data-\[hover\=true\]\:transition-colors[data-hover=true] {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: ease;
  transition-duration: 250ms;
}

.data-\[sortable\=true\]\:transition-colors[data-sortable=true] {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: ease;
  transition-duration: 250ms;
}

.data-\[moving\=true\]\:transition-transform[data-moving=true] {
  transition-property: transform;
  transition-timing-function: ease;
  transition-duration: 250ms;
}

.data-\[hide-scroll\=true\]\:scrollbar-hide[data-hide-scroll=true] {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.data-\[hide-scroll\=true\]\:scrollbar-hide[data-hide-scroll=true]::-webkit-scrollbar {
  display: none;
}

.data-\[bottom-scroll\=true\]\:\[mask-image\:linear-gradient\(180deg\2c \#000_calc\(100\%_-_var\(--scroll-shadow-size\)\)\2c transparent\)\][data-bottom-scroll=true] {
  -webkit-mask-image: linear-gradient(180deg,#000 calc(100% - var(--scroll-shadow-size)),transparent);
  mask-image: linear-gradient(180deg,#000 calc(100% - var(--scroll-shadow-size)),transparent);
}

.data-\[left-right-scroll\=true\]\:\[mask-image\:linear-gradient\(to_right\2c \#000\2c \#000\2c transparent_0\2c \#000_var\(--scroll-shadow-size\)\2c \#000_calc\(100\%_-_var\(--scroll-shadow-size\)\)\2c transparent\)\][data-left-right-scroll=true] {
  -webkit-mask-image: linear-gradient(to right,#000,#000,transparent 0,#000 var(--scroll-shadow-size),#000 calc(100% - var(--scroll-shadow-size)),transparent);
  mask-image: linear-gradient(to right,#000,#000,transparent 0,#000 var(--scroll-shadow-size),#000 calc(100% - var(--scroll-shadow-size)),transparent);
}

.data-\[left-scroll\=true\]\:\[mask-image\:linear-gradient\(270deg\2c \#000_calc\(100\%_-_var\(--scroll-shadow-size\)\)\2c transparent\)\][data-left-scroll=true] {
  -webkit-mask-image: linear-gradient(270deg,#000 calc(100% - var(--scroll-shadow-size)),transparent);
  mask-image: linear-gradient(270deg,#000 calc(100% - var(--scroll-shadow-size)),transparent);
}

.data-\[right-scroll\=true\]\:\[mask-image\:linear-gradient\(90deg\2c \#000_calc\(100\%_-_var\(--scroll-shadow-size\)\)\2c transparent\)\][data-right-scroll=true] {
  -webkit-mask-image: linear-gradient(90deg,#000 calc(100% - var(--scroll-shadow-size)),transparent);
  mask-image: linear-gradient(90deg,#000 calc(100% - var(--scroll-shadow-size)),transparent);
}

.data-\[top-bottom-scroll\=true\]\:\[mask-image\:linear-gradient\(\#000\2c \#000\2c transparent_0\2c \#000_var\(--scroll-shadow-size\)\2c \#000_calc\(100\%_-_var\(--scroll-shadow-size\)\)\2c transparent\)\][data-top-bottom-scroll=true] {
  -webkit-mask-image: linear-gradient(#000,#000,transparent 0,#000 var(--scroll-shadow-size),#000 calc(100% - var(--scroll-shadow-size)),transparent);
  mask-image: linear-gradient(#000,#000,transparent 0,#000 var(--scroll-shadow-size),#000 calc(100% - var(--scroll-shadow-size)),transparent);
}

.data-\[top-scroll\=true\]\:\[mask-image\:linear-gradient\(0deg\2c \#000_calc\(100\%_-_var\(--scroll-shadow-size\)\)\2c transparent\)\][data-top-scroll=true] {
  -webkit-mask-image: linear-gradient(0deg,#000 calc(100% - var(--scroll-shadow-size)),transparent);
  mask-image: linear-gradient(0deg,#000 calc(100% - var(--scroll-shadow-size)),transparent);
}

.data-\[placement\=bottom-end\]\:before\:-top-\[calc\(theme\(spacing\.5\)\/4_-_1\.5px\)\][data-placement=bottom-end]::before {
  content: var(--tw-content);
  top: calc(calc(1.25rem / 4 - 1.5px) * -1);
}

.data-\[placement\=bottom-end\]\:before\:right-3[data-placement=bottom-end]::before {
  content: var(--tw-content);
  right: 0.75rem;
}

.data-\[placement\=bottom-start\]\:before\:-top-\[calc\(theme\(spacing\.5\)\/4_-_1\.5px\)\][data-placement=bottom-start]::before {
  content: var(--tw-content);
  top: calc(calc(1.25rem / 4 - 1.5px) * -1);
}

.data-\[placement\=bottom-start\]\:before\:left-3[data-placement=bottom-start]::before {
  content: var(--tw-content);
  left: 0.75rem;
}

.data-\[placement\=bottom\]\:before\:-top-\[calc\(theme\(spacing\.5\)\/4_-_1\.5px\)\][data-placement=bottom]::before {
  content: var(--tw-content);
  top: calc(calc(1.25rem / 4 - 1.5px) * -1);
}

.data-\[placement\=bottom\]\:before\:left-1\/2[data-placement=bottom]::before {
  content: var(--tw-content);
  left: 50%;
}

.data-\[placement\=left-end\]\:before\:-right-\[calc\(theme\(spacing\.5\)\/4_-_3px\)\][data-placement=left-end]::before {
  content: var(--tw-content);
  right: calc(calc(1.25rem / 4 - 3px) * -1);
}

.data-\[placement\=left-end\]\:before\:bottom-1\/4[data-placement=left-end]::before {
  content: var(--tw-content);
  bottom: 25%;
}

.data-\[placement\=left-start\]\:before\:-right-\[calc\(theme\(spacing\.5\)\/4_-_3px\)\][data-placement=left-start]::before {
  content: var(--tw-content);
  right: calc(calc(1.25rem / 4 - 3px) * -1);
}

.data-\[placement\=left-start\]\:before\:top-1\/4[data-placement=left-start]::before {
  content: var(--tw-content);
  top: 25%;
}

.data-\[placement\=left\]\:before\:-right-\[calc\(theme\(spacing\.5\)\/4_-_2px\)\][data-placement=left]::before {
  content: var(--tw-content);
  right: calc(calc(1.25rem / 4 - 2px) * -1);
}

.data-\[placement\=left\]\:before\:top-1\/2[data-placement=left]::before {
  content: var(--tw-content);
  top: 50%;
}

.data-\[placement\=right-end\]\:before\:-left-\[calc\(theme\(spacing\.5\)\/4_-_3px\)\][data-placement=right-end]::before {
  content: var(--tw-content);
  left: calc(calc(1.25rem / 4 - 3px) * -1);
}

.data-\[placement\=right-end\]\:before\:bottom-1\/4[data-placement=right-end]::before {
  content: var(--tw-content);
  bottom: 25%;
}

.data-\[placement\=right-start\]\:before\:-left-\[calc\(theme\(spacing\.5\)\/4_-_3px\)\][data-placement=right-start]::before {
  content: var(--tw-content);
  left: calc(calc(1.25rem / 4 - 3px) * -1);
}

.data-\[placement\=right-start\]\:before\:top-1\/4[data-placement=right-start]::before {
  content: var(--tw-content);
  top: 25%;
}

.data-\[placement\=right\]\:before\:-left-\[calc\(theme\(spacing\.5\)\/4_-_2px\)\][data-placement=right]::before {
  content: var(--tw-content);
  left: calc(calc(1.25rem / 4 - 2px) * -1);
}

.data-\[placement\=right\]\:before\:top-1\/2[data-placement=right]::before {
  content: var(--tw-content);
  top: 50%;
}

.data-\[placement\=top-end\]\:before\:-bottom-\[calc\(theme\(spacing\.5\)\/4_-_1\.5px\)\][data-placement=top-end]::before {
  content: var(--tw-content);
  bottom: calc(calc(1.25rem / 4 - 1.5px) * -1);
}

.data-\[placement\=top-end\]\:before\:right-3[data-placement=top-end]::before {
  content: var(--tw-content);
  right: 0.75rem;
}

.data-\[placement\=top-start\]\:before\:-bottom-\[calc\(theme\(spacing\.5\)\/4_-_1\.5px\)\][data-placement=top-start]::before {
  content: var(--tw-content);
  bottom: calc(calc(1.25rem / 4 - 1.5px) * -1);
}

.data-\[placement\=top-start\]\:before\:left-3[data-placement=top-start]::before {
  content: var(--tw-content);
  left: 0.75rem;
}

.data-\[placement\=top\]\:before\:-bottom-\[calc\(theme\(spacing\.5\)\/4_-_1\.5px\)\][data-placement=top]::before {
  content: var(--tw-content);
  bottom: calc(calc(1.25rem / 4 - 1.5px) * -1);
}

.data-\[placement\=top\]\:before\:left-1\/2[data-placement=top]::before {
  content: var(--tw-content);
  left: 50%;
}

.data-\[arrow\=true\]\:before\:block[data-arrow=true]::before {
  content: var(--tw-content);
  display: block;
}

.data-\[placement\=bottom\]\:before\:-translate-x-1\/2[data-placement=bottom]::before {
  content: var(--tw-content);
  --tw-translate-x: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.data-\[placement\=left\]\:before\:-translate-y-1\/2[data-placement=left]::before {
  content: var(--tw-content);
  --tw-translate-y: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.data-\[placement\=right\]\:before\:-translate-y-1\/2[data-placement=right]::before {
  content: var(--tw-content);
  --tw-translate-y: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.data-\[placement\=top\]\:before\:-translate-x-1\/2[data-placement=top]::before {
  content: var(--tw-content);
  --tw-translate-x: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.data-\[loaded\=true\]\:before\:animate-none[data-loaded=true]::before {
  content: var(--tw-content);
  animation: none;
}

.data-\[loaded\=true\]\:before\:opacity-0[data-loaded=true]::before {
  content: var(--tw-content);
  opacity: 0;
}

.data-\[selected\=true\]\:before\:opacity-100[data-selected=true]::before {
  content: var(--tw-content);
  opacity: 1;
}

.data-\[focus\=true\]\:after\:w-full[data-focus=true]::after {
  content: var(--tw-content);
  width: 100%;
}

.data-\[open\=true\]\:after\:w-full[data-open=true]::after {
  content: var(--tw-content);
  width: 100%;
}

.data-\[dragging\=true\]\:after\:scale-100[data-dragging=true]::after {
  content: var(--tw-content);
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.data-\[dragging\=true\]\:after\:scale-80[data-dragging=true]::after {
  content: var(--tw-content);
  --tw-scale-x: 0.8;
  --tw-scale-y: 0.8;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.data-\[selected\=true\]\:after\:bg-danger[data-selected=true]::after {
  content: var(--tw-content);
  --tw-bg-opacity: 1;
  background-color: hsl(var(--nextui-danger) / var(--nextui-danger-opacity, var(--tw-bg-opacity)));
}

.data-\[selected\=true\]\:after\:bg-foreground[data-selected=true]::after {
  content: var(--tw-content);
  background-color: hsl(var(--foreground));
}

.data-\[selected\=true\]\:after\:bg-primary[data-selected=true]::after {
  content: var(--tw-content);
  background-color: hsl(var(--primary));
}

.data-\[selected\=true\]\:after\:bg-secondary[data-selected=true]::after {
  content: var(--tw-content);
  background-color: hsl(var(--secondary));
}

.data-\[selected\=true\]\:after\:bg-success[data-selected=true]::after {
  content: var(--tw-content);
  --tw-bg-opacity: 1;
  background-color: hsl(var(--nextui-success) / var(--nextui-success-opacity, var(--tw-bg-opacity)));
}

.data-\[selected\=true\]\:after\:bg-warning[data-selected=true]::after {
  content: var(--tw-content);
  --tw-bg-opacity: 1;
  background-color: hsl(var(--nextui-warning) / var(--nextui-warning-opacity, var(--tw-bg-opacity)));
}

.data-\[loaded\=true\]\:after\:opacity-0[data-loaded=true]::after {
  content: var(--tw-content);
  opacity: 0;
}

.data-\[selected\=true\]\:after\:opacity-100[data-selected=true]::after {
  content: var(--tw-content);
  opacity: 1;
}

.data-\[selectable\=true\]\:focus\:border-danger:focus[data-selectable=true] {
  --tw-border-opacity: 1;
  border-color: hsl(var(--nextui-danger) / var(--nextui-danger-opacity, var(--tw-border-opacity)));
}

.data-\[selectable\=true\]\:focus\:border-default:focus[data-selectable=true] {
  --tw-border-opacity: 1;
  border-color: hsl(var(--nextui-default) / var(--nextui-default-opacity, var(--tw-border-opacity)));
}

.data-\[selectable\=true\]\:focus\:border-primary:focus[data-selectable=true] {
  border-color: hsl(var(--primary));
}

.data-\[selectable\=true\]\:focus\:border-secondary:focus[data-selectable=true] {
  border-color: hsl(var(--secondary));
}

.data-\[selectable\=true\]\:focus\:border-success:focus[data-selectable=true] {
  --tw-border-opacity: 1;
  border-color: hsl(var(--nextui-success) / var(--nextui-success-opacity, var(--tw-border-opacity)));
}

.data-\[selectable\=true\]\:focus\:border-warning:focus[data-selectable=true] {
  --tw-border-opacity: 1;
  border-color: hsl(var(--nextui-warning) / var(--nextui-warning-opacity, var(--tw-border-opacity)));
}

.data-\[selectable\=true\]\:focus\:bg-danger:focus[data-selectable=true] {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--nextui-danger) / var(--nextui-danger-opacity, var(--tw-bg-opacity)));
}

.data-\[selectable\=true\]\:focus\:bg-danger\/20:focus[data-selectable=true] {
  background-color: hsl(var(--nextui-danger) / 0.2);
}

.data-\[selectable\=true\]\:focus\:bg-default:focus[data-selectable=true] {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--nextui-default) / var(--nextui-default-opacity, var(--tw-bg-opacity)));
}

.data-\[selectable\=true\]\:focus\:bg-default-100:focus[data-selectable=true] {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--nextui-default-100) / var(--nextui-default-100-opacity, var(--tw-bg-opacity)));
}

.data-\[selectable\=true\]\:focus\:bg-default\/40:focus[data-selectable=true] {
  background-color: hsl(var(--nextui-default) / 0.4);
}

.data-\[selectable\=true\]\:focus\:bg-primary:focus[data-selectable=true] {
  background-color: hsl(var(--primary));
}

.data-\[selectable\=true\]\:focus\:bg-primary\/20:focus[data-selectable=true] {
  background-color: hsl(var(--primary) / 0.2);
}

.data-\[selectable\=true\]\:focus\:bg-secondary:focus[data-selectable=true] {
  background-color: hsl(var(--secondary));
}

.data-\[selectable\=true\]\:focus\:bg-secondary\/20:focus[data-selectable=true] {
  background-color: hsl(var(--secondary) / 0.2);
}

.data-\[selectable\=true\]\:focus\:bg-success:focus[data-selectable=true] {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--nextui-success) / var(--nextui-success-opacity, var(--tw-bg-opacity)));
}

.data-\[selectable\=true\]\:focus\:bg-success\/20:focus[data-selectable=true] {
  background-color: hsl(var(--nextui-success) / 0.2);
}

.data-\[selectable\=true\]\:focus\:bg-warning:focus[data-selectable=true] {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--nextui-warning) / var(--nextui-warning-opacity, var(--tw-bg-opacity)));
}

.data-\[selectable\=true\]\:focus\:bg-warning\/20:focus[data-selectable=true] {
  background-color: hsl(var(--nextui-warning) / 0.2);
}

.data-\[selectable\=true\]\:focus\:text-danger:focus[data-selectable=true] {
  --tw-text-opacity: 1;
  color: hsl(var(--nextui-danger) / var(--nextui-danger-opacity, var(--tw-text-opacity)));
}

.data-\[selectable\=true\]\:focus\:text-danger-foreground:focus[data-selectable=true] {
  --tw-text-opacity: 1;
  color: hsl(var(--nextui-danger-foreground) / var(--nextui-danger-foreground-opacity, var(--tw-text-opacity)));
}

.data-\[selectable\=true\]\:focus\:text-default-500:focus[data-selectable=true] {
  --tw-text-opacity: 1;
  color: hsl(var(--nextui-default-500) / var(--nextui-default-500-opacity, var(--tw-text-opacity)));
}

.data-\[selectable\=true\]\:focus\:text-default-foreground:focus[data-selectable=true] {
  --tw-text-opacity: 1;
  color: hsl(var(--nextui-default-foreground) / var(--nextui-default-foreground-opacity, var(--tw-text-opacity)));
}

.data-\[selectable\=true\]\:focus\:text-primary:focus[data-selectable=true] {
  color: hsl(var(--primary));
}

.data-\[selectable\=true\]\:focus\:text-primary-foreground:focus[data-selectable=true] {
  color: hsl(var(--primary-foreground));
}

.data-\[selectable\=true\]\:focus\:text-secondary:focus[data-selectable=true] {
  color: hsl(var(--secondary));
}

.data-\[selectable\=true\]\:focus\:text-secondary-foreground:focus[data-selectable=true] {
  color: hsl(var(--secondary-foreground));
}

.data-\[selectable\=true\]\:focus\:text-success:focus[data-selectable=true] {
  --tw-text-opacity: 1;
  color: hsl(var(--nextui-success) / var(--nextui-success-opacity, var(--tw-text-opacity)));
}

.data-\[selectable\=true\]\:focus\:text-success-foreground:focus[data-selectable=true] {
  --tw-text-opacity: 1;
  color: hsl(var(--nextui-success-foreground) / var(--nextui-success-foreground-opacity, var(--tw-text-opacity)));
}

.data-\[selectable\=true\]\:focus\:text-warning:focus[data-selectable=true] {
  --tw-text-opacity: 1;
  color: hsl(var(--nextui-warning) / var(--nextui-warning-opacity, var(--tw-text-opacity)));
}

.data-\[selectable\=true\]\:focus\:text-warning-foreground:focus[data-selectable=true] {
  --tw-text-opacity: 1;
  color: hsl(var(--nextui-warning-foreground) / var(--nextui-warning-foreground-opacity, var(--tw-text-opacity)));
}

.data-\[selectable\=true\]\:focus\:shadow-danger\/30:focus[data-selectable=true] {
  --tw-shadow-color: hsl(var(--nextui-danger) / 0.3);
  --tw-shadow: var(--tw-shadow-colored);
}

.data-\[selectable\=true\]\:focus\:shadow-default\/50:focus[data-selectable=true] {
  --tw-shadow-color: hsl(var(--nextui-default) / 0.5);
  --tw-shadow: var(--tw-shadow-colored);
}

.data-\[selectable\=true\]\:focus\:shadow-primary\/30:focus[data-selectable=true] {
  --tw-shadow-color: hsl(var(--primary) / 0.3);
  --tw-shadow: var(--tw-shadow-colored);
}

.data-\[selectable\=true\]\:focus\:shadow-secondary\/30:focus[data-selectable=true] {
  --tw-shadow-color: hsl(var(--secondary) / 0.3);
  --tw-shadow: var(--tw-shadow-colored);
}

.data-\[selectable\=true\]\:focus\:shadow-success\/30:focus[data-selectable=true] {
  --tw-shadow-color: hsl(var(--nextui-success) / 0.3);
  --tw-shadow: var(--tw-shadow-colored);
}

.data-\[selectable\=true\]\:focus\:shadow-warning\/30:focus[data-selectable=true] {
  --tw-shadow-color: hsl(var(--nextui-warning) / 0.3);
  --tw-shadow: var(--tw-shadow-colored);
}

.group[data-filled-within=true] .group-data-\[filled-within\=true\]\:pointer-events-auto {
  pointer-events: auto;
}

.group[data-filled=true] .group-data-\[filled\=true\]\:pointer-events-auto {
  pointer-events: auto;
}

.group[data-filled-within=true] .group-data-\[filled-within\=true\]\:left-0 {
  left: 0px;
}

.group[data-filled=true] .group-data-\[filled\=true\]\:left-0 {
  left: 0px;
}

.group[data-focus-visible=true] .group-data-\[focus-visible\=true\]\:z-10 {
  z-index: 10;
}

.group[data-selected=true] .group-data-\[selected\=true\]\:ml-4 {
  margin-left: 1rem;
}

.group[data-selected=true] .group-data-\[selected\=true\]\:ml-5 {
  margin-left: 1.25rem;
}

.group[data-selected=true] .group-data-\[selected\=true\]\:ml-6 {
  margin-left: 1.5rem;
}

.group[data-selected][data-pressed] .group-data-\[selected\]\:group-data-\[pressed\]\:ml-3 {
  margin-left: 0.75rem;
}

.group[data-selected][data-pressed] .group-data-\[selected\]\:group-data-\[pressed\]\:ml-4 {
  margin-left: 1rem;
}

.group[data-selected][data-pressed] .group-data-\[selected\]\:group-data-\[pressed\]\:ml-5 {
  margin-left: 1.25rem;
}

.group[data-focus-visible=true] .group-data-\[focus-visible\=true\]\:block {
  display: block;
}

.group[data-has-helper=true] .group-data-\[has-helper\=true\]\:flex {
  display: flex;
}

.group[data-focus-visible=true] .group-data-\[focus-visible\=true\]\:hidden {
  display: none;
}

.group[data-pressed=true] .group-data-\[pressed\=true\]\:w-5 {
  width: 1.25rem;
}

.group[data-pressed=true] .group-data-\[pressed\=true\]\:w-6 {
  width: 1.5rem;
}

.group[data-pressed=true] .group-data-\[pressed\=true\]\:w-7 {
  width: 1.75rem;
}

.group[data-filled-within=true] .group-data-\[filled-within\=true\]\:-translate-y-\[calc\(100\%_\+_theme\(fontSize\.small\)\/2_\+_20px\)\] {
  --tw-translate-y: calc(calc(100% + var(--nextui-font-size-small) / 2 + 20px) * -1);
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.group[data-filled-within=true] .group-data-\[filled-within\=true\]\:-translate-y-\[calc\(100\%_\+_theme\(fontSize\.small\)\/2_\+_24px\)\] {
  --tw-translate-y: calc(calc(100% + var(--nextui-font-size-small) / 2 + 24px) * -1);
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.group[data-filled-within=true] .group-data-\[filled-within\=true\]\:-translate-y-\[calc\(100\%_\+_theme\(fontSize\.tiny\)\/2_\+_16px\)\] {
  --tw-translate-y: calc(calc(100% + var(--nextui-font-size-tiny) / 2 + 16px) * -1);
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.group[data-filled-within=true] .group-data-\[filled-within\=true\]\:-translate-y-\[calc\(50\%_\+_theme\(fontSize\.small\)\/2_-_3\.5px\)\] {
  --tw-translate-y: calc(calc(50% + var(--nextui-font-size-small) / 2 - 3.5px) * -1);
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.group[data-filled-within=true] .group-data-\[filled-within\=true\]\:-translate-y-\[calc\(50\%_\+_theme\(fontSize\.small\)\/2_-_4px\)\] {
  --tw-translate-y: calc(calc(50% + var(--nextui-font-size-small) / 2 - 4px) * -1);
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.group[data-filled-within=true] .group-data-\[filled-within\=true\]\:-translate-y-\[calc\(50\%_\+_theme\(fontSize\.small\)\/2_-_6px\)\] {
  --tw-translate-y: calc(calc(50% + var(--nextui-font-size-small) / 2 - 6px) * -1);
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.group[data-filled-within=true] .group-data-\[filled-within\=true\]\:-translate-y-\[calc\(50\%_\+_theme\(fontSize\.small\)\/2_-_6px_-_theme\(borderWidth\.medium\)\)\] {
  --tw-translate-y: calc(calc(50% + var(--nextui-font-size-small) / 2 - 6px - var(--nextui-border-width-medium)) * -1);
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.group[data-filled-within=true] .group-data-\[filled-within\=true\]\:-translate-y-\[calc\(50\%_\+_theme\(fontSize\.small\)\/2_-_8px\)\] {
  --tw-translate-y: calc(calc(50% + var(--nextui-font-size-small) / 2 - 8px) * -1);
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.group[data-filled-within=true] .group-data-\[filled-within\=true\]\:-translate-y-\[calc\(50\%_\+_theme\(fontSize\.small\)\/2_-_8px_-_theme\(borderWidth\.medium\)\)\] {
  --tw-translate-y: calc(calc(50% + var(--nextui-font-size-small) / 2 - 8px - var(--nextui-border-width-medium)) * -1);
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.group[data-filled-within=true] .group-data-\[filled-within\=true\]\:-translate-y-\[calc\(50\%_\+_theme\(fontSize\.tiny\)\/2_-_5px\)\] {
  --tw-translate-y: calc(calc(50% + var(--nextui-font-size-tiny) / 2 - 5px) * -1);
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.group[data-filled-within=true] .group-data-\[filled-within\=true\]\:-translate-y-\[calc\(50\%_\+_theme\(fontSize\.tiny\)\/2_-_8px\)\] {
  --tw-translate-y: calc(calc(50% + var(--nextui-font-size-tiny) / 2 - 8px) * -1);
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.group[data-filled-within=true] .group-data-\[filled-within\=true\]\:-translate-y-\[calc\(50\%_\+_theme\(fontSize\.tiny\)\/2_-_8px_-_theme\(borderWidth\.medium\)\)\] {
  --tw-translate-y: calc(calc(50% + var(--nextui-font-size-tiny) / 2 - 8px - var(--nextui-border-width-medium)) * -1);
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.group[data-filled=true] .group-data-\[filled\=true\]\:-translate-y-\[calc\(100\%_\+_theme\(fontSize\.small\)\/2_\+_20px\)\] {
  --tw-translate-y: calc(calc(100% + var(--nextui-font-size-small) / 2 + 20px) * -1);
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.group[data-filled=true] .group-data-\[filled\=true\]\:-translate-y-\[calc\(100\%_\+_theme\(fontSize\.small\)\/2_\+_24px\)\] {
  --tw-translate-y: calc(calc(100% + var(--nextui-font-size-small) / 2 + 24px) * -1);
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.group[data-filled=true] .group-data-\[filled\=true\]\:-translate-y-\[calc\(100\%_\+_theme\(fontSize\.tiny\)\/2_\+_16px\)\] {
  --tw-translate-y: calc(calc(100% + var(--nextui-font-size-tiny) / 2 + 16px) * -1);
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.group[data-filled=true] .group-data-\[filled\=true\]\:-translate-y-\[calc\(50\%_\+_theme\(fontSize\.small\)\/2_-_3\.5px\)\] {
  --tw-translate-y: calc(calc(50% + var(--nextui-font-size-small) / 2 - 3.5px) * -1);
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.group[data-filled=true] .group-data-\[filled\=true\]\:-translate-y-\[calc\(50\%_\+_theme\(fontSize\.small\)\/2_-_4px\)\] {
  --tw-translate-y: calc(calc(50% + var(--nextui-font-size-small) / 2 - 4px) * -1);
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.group[data-filled=true] .group-data-\[filled\=true\]\:-translate-y-\[calc\(50\%_\+_theme\(fontSize\.small\)\/2_-_6px\)\] {
  --tw-translate-y: calc(calc(50% + var(--nextui-font-size-small) / 2 - 6px) * -1);
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.group[data-filled=true] .group-data-\[filled\=true\]\:-translate-y-\[calc\(50\%_\+_theme\(fontSize\.small\)\/2_-_6px_-_theme\(borderWidth\.medium\)\)\] {
  --tw-translate-y: calc(calc(50% + var(--nextui-font-size-small) / 2 - 6px - var(--nextui-border-width-medium)) * -1);
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.group[data-filled=true] .group-data-\[filled\=true\]\:-translate-y-\[calc\(50\%_\+_theme\(fontSize\.small\)\/2_-_8px\)\] {
  --tw-translate-y: calc(calc(50% + var(--nextui-font-size-small) / 2 - 8px) * -1);
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.group[data-filled=true] .group-data-\[filled\=true\]\:-translate-y-\[calc\(50\%_\+_theme\(fontSize\.small\)\/2_-_8px_-_theme\(borderWidth\.medium\)\)\] {
  --tw-translate-y: calc(calc(50% + var(--nextui-font-size-small) / 2 - 8px - var(--nextui-border-width-medium)) * -1);
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.group[data-filled=true] .group-data-\[filled\=true\]\:-translate-y-\[calc\(50\%_\+_theme\(fontSize\.tiny\)\/2_-_5px\)\] {
  --tw-translate-y: calc(calc(50% + var(--nextui-font-size-tiny) / 2 - 5px) * -1);
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.group[data-filled=true] .group-data-\[filled\=true\]\:-translate-y-\[calc\(50\%_\+_theme\(fontSize\.tiny\)\/2_-_8px\)\] {
  --tw-translate-y: calc(calc(50% + var(--nextui-font-size-tiny) / 2 - 8px) * -1);
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.group[data-filled=true] .group-data-\[filled\=true\]\:-translate-y-\[calc\(50\%_\+_theme\(fontSize\.tiny\)\/2_-_8px_-_theme\(borderWidth\.medium\)\)\] {
  --tw-translate-y: calc(calc(50% + var(--nextui-font-size-tiny) / 2 - 8px - var(--nextui-border-width-medium)) * -1);
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.group[data-selected=true] .group-data-\[selected\=true\]\:translate-x-3 {
  --tw-translate-x: 0.75rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.group[data-copied=true] .group-data-\[copied\=true\]\:scale-100 {
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.group[data-copied=true] .group-data-\[copied\=true\]\:scale-50 {
  --tw-scale-x: .5;
  --tw-scale-y: .5;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.group[data-filled-within=true] .group-data-\[filled-within\=true\]\:scale-85 {
  --tw-scale-x: 0.85;
  --tw-scale-y: 0.85;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.group[data-filled=true] .group-data-\[filled\=true\]\:scale-85 {
  --tw-scale-x: 0.85;
  --tw-scale-y: 0.85;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.group[data-pressed=true] .group-data-\[pressed\=true\]\:scale-95 {
  --tw-scale-x: .95;
  --tw-scale-y: .95;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.group[data-selected=true] .group-data-\[selected\=true\]\:scale-100 {
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.group[data-has-label=true] .group-data-\[has-label\=true\]\:items-start {
  align-items: flex-start;
}

.group[data-has-label=true] .group-data-\[has-label\=true\]\:items-end {
  align-items: flex-end;
}

.group[data-focus=true] .group-data-\[focus\=true\]\:border-danger {
  --tw-border-opacity: 1;
  border-color: hsl(var(--nextui-danger) / var(--nextui-danger-opacity, var(--tw-border-opacity)));
}

.group[data-focus=true] .group-data-\[focus\=true\]\:border-default-foreground {
  --tw-border-opacity: 1;
  border-color: hsl(var(--nextui-default-foreground) / var(--nextui-default-foreground-opacity, var(--tw-border-opacity)));
}

.group[data-focus=true] .group-data-\[focus\=true\]\:border-primary {
  border-color: hsl(var(--primary));
}

.group[data-focus=true] .group-data-\[focus\=true\]\:border-secondary {
  border-color: hsl(var(--secondary));
}

.group[data-focus=true] .group-data-\[focus\=true\]\:border-success {
  --tw-border-opacity: 1;
  border-color: hsl(var(--nextui-success) / var(--nextui-success-opacity, var(--tw-border-opacity)));
}

.group[data-focus=true] .group-data-\[focus\=true\]\:border-warning {
  --tw-border-opacity: 1;
  border-color: hsl(var(--nextui-warning) / var(--nextui-warning-opacity, var(--tw-border-opacity)));
}

.group[data-selected=true] .group-data-\[selected\=true\]\:border-danger {
  --tw-border-opacity: 1;
  border-color: hsl(var(--nextui-danger) / var(--nextui-danger-opacity, var(--tw-border-opacity)));
}

.group[data-selected=true] .group-data-\[selected\=true\]\:border-default-500 {
  --tw-border-opacity: 1;
  border-color: hsl(var(--nextui-default-500) / var(--nextui-default-500-opacity, var(--tw-border-opacity)));
}

.group[data-selected=true] .group-data-\[selected\=true\]\:border-primary {
  border-color: hsl(var(--primary));
}

.group[data-selected=true] .group-data-\[selected\=true\]\:border-secondary {
  border-color: hsl(var(--secondary));
}

.group[data-selected=true] .group-data-\[selected\=true\]\:border-success {
  --tw-border-opacity: 1;
  border-color: hsl(var(--nextui-success) / var(--nextui-success-opacity, var(--tw-border-opacity)));
}

.group[data-selected=true] .group-data-\[selected\=true\]\:border-warning {
  --tw-border-opacity: 1;
  border-color: hsl(var(--nextui-warning) / var(--nextui-warning-opacity, var(--tw-border-opacity)));
}

.group[data-focus=true] .group-data-\[focus\=true\]\:bg-danger-50 {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--nextui-danger-50) / var(--nextui-danger-50-opacity, var(--tw-bg-opacity)));
}

.group[data-focus=true] .group-data-\[focus\=true\]\:bg-default-100 {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--nextui-default-100) / var(--nextui-default-100-opacity, var(--tw-bg-opacity)));
}

.group[data-focus=true] .group-data-\[focus\=true\]\:bg-primary-50 {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--nextui-primary-50) / var(--nextui-primary-50-opacity, var(--tw-bg-opacity)));
}

.group[data-focus=true] .group-data-\[focus\=true\]\:bg-secondary-50 {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--nextui-secondary-50) / var(--nextui-secondary-50-opacity, var(--tw-bg-opacity)));
}

.group[data-focus=true] .group-data-\[focus\=true\]\:bg-success-50 {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--nextui-success-50) / var(--nextui-success-50-opacity, var(--tw-bg-opacity)));
}

.group[data-focus=true] .group-data-\[focus\=true\]\:bg-warning-50 {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--nextui-warning-50) / var(--nextui-warning-50-opacity, var(--tw-bg-opacity)));
}

.group[data-hover-unselected=true] .group-data-\[hover-unselected\=true\]\:bg-default-100 {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--nextui-default-100) / var(--nextui-default-100-opacity, var(--tw-bg-opacity)));
}

.group[data-selected=true] .group-data-\[selected\=true\]\:bg-danger {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--nextui-danger) / var(--nextui-danger-opacity, var(--tw-bg-opacity)));
}

.group[data-selected=true] .group-data-\[selected\=true\]\:bg-default-400 {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--nextui-default-400) / var(--nextui-default-400-opacity, var(--tw-bg-opacity)));
}

.group[data-selected=true] .group-data-\[selected\=true\]\:bg-primary {
  background-color: hsl(var(--primary));
}

.group[data-selected=true] .group-data-\[selected\=true\]\:bg-secondary {
  background-color: hsl(var(--secondary));
}

.group[data-selected=true] .group-data-\[selected\=true\]\:bg-success {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--nextui-success) / var(--nextui-success-opacity, var(--tw-bg-opacity)));
}

.group[data-selected=true] .group-data-\[selected\=true\]\:bg-warning {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--nextui-warning) / var(--nextui-warning-opacity, var(--tw-bg-opacity)));
}

.group[data-has-helper=true] .group-data-\[has-helper\=true\]\:pt-2 {
  padding-top: 0.5rem;
}

.group[data-has-helper=true] .group-data-\[has-helper\=true\]\:pt-3 {
  padding-top: 0.75rem;
}

.group[data-has-helper=true] .group-data-\[has-helper\=true\]\:pt-4 {
  padding-top: 1rem;
}

.group[data-has-label=true] .group-data-\[has-label\=true\]\:pt-4 {
  padding-top: 1rem;
}

.group[data-has-label=true] .group-data-\[has-label\=true\]\:pt-5 {
  padding-top: 1.25rem;
}

.group[data-disabled=true] .group-data-\[disabled\=true\]\:text-foreground-300 {
  --tw-text-opacity: 1;
  color: hsl(var(--nextui-foreground-300) / var(--nextui-foreground-300-opacity, var(--tw-text-opacity)));
}

.group[data-filled-within=true] .group-data-\[filled-within\=true\]\:text-default-600 {
  --tw-text-opacity: 1;
  color: hsl(var(--nextui-default-600) / var(--nextui-default-600-opacity, var(--tw-text-opacity)));
}

.group[data-filled-within=true] .group-data-\[filled-within\=true\]\:text-foreground {
  color: hsl(var(--foreground));
}

.group[data-filled=true] .group-data-\[filled\=true\]\:text-default-600 {
  --tw-text-opacity: 1;
  color: hsl(var(--nextui-default-600) / var(--nextui-default-600-opacity, var(--tw-text-opacity)));
}

.group[data-filled=true] .group-data-\[filled\=true\]\:text-foreground {
  color: hsl(var(--foreground));
}

.group[data-has-value=true] .group-data-\[has-value\=true\]\:text-default-foreground {
  --tw-text-opacity: 1;
  color: hsl(var(--nextui-default-foreground) / var(--nextui-default-foreground-opacity, var(--tw-text-opacity)));
}

.group[data-has-value=true] .group-data-\[has-value\=true\]\:text-foreground {
  color: hsl(var(--foreground));
}

.group[data-invalid=true] .group-data-\[invalid\=true\]\:text-danger {
  --tw-text-opacity: 1;
  color: hsl(var(--nextui-danger) / var(--nextui-danger-opacity, var(--tw-text-opacity)));
}

.group[data-selected=true] .group-data-\[selected\=true\]\:text-danger {
  --tw-text-opacity: 1;
  color: hsl(var(--nextui-danger) / var(--nextui-danger-opacity, var(--tw-text-opacity)));
}

.group[data-selected=true] .group-data-\[selected\=true\]\:text-danger-foreground {
  --tw-text-opacity: 1;
  color: hsl(var(--nextui-danger-foreground) / var(--nextui-danger-foreground-opacity, var(--tw-text-opacity)));
}

.group[data-selected=true] .group-data-\[selected\=true\]\:text-default-foreground {
  --tw-text-opacity: 1;
  color: hsl(var(--nextui-default-foreground) / var(--nextui-default-foreground-opacity, var(--tw-text-opacity)));
}

.group[data-selected=true] .group-data-\[selected\=true\]\:text-foreground {
  color: hsl(var(--foreground));
}

.group[data-selected=true] .group-data-\[selected\=true\]\:text-primary {
  color: hsl(var(--primary));
}

.group[data-selected=true] .group-data-\[selected\=true\]\:text-primary-foreground {
  color: hsl(var(--primary-foreground));
}

.group[data-selected=true] .group-data-\[selected\=true\]\:text-secondary {
  color: hsl(var(--secondary));
}

.group[data-selected=true] .group-data-\[selected\=true\]\:text-secondary-foreground {
  color: hsl(var(--secondary-foreground));
}

.group[data-selected=true] .group-data-\[selected\=true\]\:text-success {
  --tw-text-opacity: 1;
  color: hsl(var(--nextui-success) / var(--nextui-success-opacity, var(--tw-text-opacity)));
}

.group[data-selected=true] .group-data-\[selected\=true\]\:text-success-foreground {
  --tw-text-opacity: 1;
  color: hsl(var(--nextui-success-foreground) / var(--nextui-success-foreground-opacity, var(--tw-text-opacity)));
}

.group[data-selected=true] .group-data-\[selected\=true\]\:text-warning {
  --tw-text-opacity: 1;
  color: hsl(var(--nextui-warning) / var(--nextui-warning-opacity, var(--tw-text-opacity)));
}

.group[data-selected=true] .group-data-\[selected\=true\]\:text-warning-foreground {
  --tw-text-opacity: 1;
  color: hsl(var(--nextui-warning-foreground) / var(--nextui-warning-foreground-opacity, var(--tw-text-opacity)));
}

.group[data-copied=true] .group-data-\[copied\=true\]\:opacity-0 {
  opacity: 0;
}

.group[data-copied=true] .group-data-\[copied\=true\]\:opacity-100 {
  opacity: 1;
}

.group[data-hover=true] .group-data-\[hover\=true\]\:opacity-100 {
  opacity: 1;
}

.group[data-loaded=true] .group-data-\[loaded\=true\]\:opacity-100 {
  opacity: 1;
}

.group[data-pressed=true] .group-data-\[pressed\=true\]\:opacity-70 {
  opacity: 0.7;
}

.group[data-selected=true] .group-data-\[selected\=true\]\:opacity-0 {
  opacity: 0;
}

.group[data-selected=true] .group-data-\[selected\=true\]\:opacity-100 {
  opacity: 1;
}

.group[data-selected=true] .group-data-\[selected\=true\]\:opacity-60 {
  opacity: 0.6;
}

.group[data-focus-visible=true] .group-data-\[focus-visible\=true\]\:ring-2 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}

.group[data-focus-visible=true] .group-data-\[focus-visible\=true\]\:ring-focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: hsl(var(--nextui-focus) / var(--nextui-focus-opacity, var(--tw-ring-opacity)));
}

.group[data-focus-visible=true] .group-data-\[focus-visible\=true\]\:ring-offset-2 {
  --tw-ring-offset-width: 2px;
}

.group[data-focus-visible=true] .group-data-\[focus-visible\=true\]\:ring-offset-background {
  --tw-ring-offset-color: hsl(var(--background));
}

.group[data-selected=true] .group-data-\[selected\=true\]\:before\:w-full::before {
  content: var(--tw-content);
  width: 100%;
}

.group[data-open=true] .group-data-\[open\=true\]\:before\:translate-y-px::before {
  content: var(--tw-content);
  --tw-translate-y: 1px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.group[data-open=true] .group-data-\[open\=true\]\:before\:rotate-45::before {
  content: var(--tw-content);
  --tw-rotate: 45deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.group[data-middle=true] .group-data-\[middle\=true\]\:before\:rounded-none::before {
  content: var(--tw-content);
  border-radius: 0px;
}

.group[data-hover=true] .group-data-\[hover\=true\]\:before\:bg-default-100::before {
  content: var(--tw-content);
  --tw-bg-opacity: 1;
  background-color: hsl(var(--nextui-default-100) / var(--nextui-default-100-opacity, var(--tw-bg-opacity)));
}

.group[data-odd=true] .group-data-\[odd\=true\]\:before\:bg-default-100::before {
  content: var(--tw-content);
  --tw-bg-opacity: 1;
  background-color: hsl(var(--nextui-default-100) / var(--nextui-default-100-opacity, var(--tw-bg-opacity)));
}

.group[data-odd=true] .group-data-\[odd\=true\]\:before\:opacity-100::before {
  content: var(--tw-content);
  opacity: 1;
}

.group[data-focus=true] .group-data-\[focus\=true\]\:after\:w-full::after {
  content: var(--tw-content);
  width: 100%;
}

.group[data-open=true] .group-data-\[open\=true\]\:after\:translate-y-0::after {
  content: var(--tw-content);
  --tw-translate-y: 0px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.group[data-open=true] .group-data-\[open\=true\]\:after\:-rotate-45::after {
  content: var(--tw-content);
  --tw-rotate: -45deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.group[data-selected=true] .group-data-\[selected\=true\]\:after\:scale-100::after {
  content: var(--tw-content);
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.group[data-selected=true] .group-data-\[selected\=true\]\:after\:opacity-100::after {
  content: var(--tw-content);
  opacity: 1;
}

.group[data-first=true] .group-data-\[first\=true\]\:first\:before\:rounded-none:first-child::before {
  content: var(--tw-content);
  border-radius: 0px;
}

.group[data-last=true] .group-data-\[last\=true\]\:first\:before\:rounded-none:first-child::before {
  content: var(--tw-content);
  border-radius: 0px;
}

.group[data-first=true] .group-data-\[first\=true\]\:first\:before\:rounded-tl-lg:first-child::before {
  content: var(--tw-content);
  border-top-left-radius: var(--radius);
}

.group[data-last=true] .group-data-\[last\=true\]\:first\:before\:rounded-bl-lg:first-child::before {
  content: var(--tw-content);
  border-bottom-left-radius: var(--radius);
}

.group[data-first=true] .group-data-\[first\=true\]\:last\:before\:rounded-none:last-child::before {
  content: var(--tw-content);
  border-radius: 0px;
}

.group[data-last=true] .group-data-\[last\=true\]\:last\:before\:rounded-none:last-child::before {
  content: var(--tw-content);
  border-radius: 0px;
}

.group[data-first=true] .group-data-\[first\=true\]\:last\:before\:rounded-tr-lg:last-child::before {
  content: var(--tw-content);
  border-top-right-radius: var(--radius);
}

.group[data-last=true] .group-data-\[last\=true\]\:last\:before\:rounded-br-lg:last-child::before {
  content: var(--tw-content);
  border-bottom-right-radius: var(--radius);
}

.group[aria-selected=false][data-hover=true] .group-aria-\[selected\=false\]\:group-data-\[hover\=true\]\:before\:bg-default-100::before {
  content: var(--tw-content);
  --tw-bg-opacity: 1;
  background-color: hsl(var(--nextui-default-100) / var(--nextui-default-100-opacity, var(--tw-bg-opacity)));
}

.group[aria-selected=false][data-hover=true] .group-aria-\[selected\=false\]\:group-data-\[hover\=true\]\:before\:opacity-70::before {
  content: var(--tw-content);
  opacity: 0.7;
}

.peer[data-filled=true] ~ .peer-data-\[filled\=true\]\:block {
  display: block;
}

.peer[data-filled=true] ~ .peer-data-\[filled\=true\]\:opacity-70 {
  opacity: 0.7;
}

:is([dir="rtl"] .rtl\:-rotate-180) {
  --tw-rotate: -180deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

:is([dir="rtl"] .rtl\:data-\[open\=true\]\:-rotate-90[data-open=true]) {
  --tw-rotate: -90deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

@media (prefers-reduced-motion: reduce) {
  .motion-reduce\:transition-none {
    transition-property: none;
  }

  .motion-reduce\:after\:transition-none::after {
    content: var(--tw-content);
    transition-property: none;
  }
}

:is(.dark .dark\:border-gray-600) {
  --tw-border-opacity: 1;
  border-color: rgb(75 85 99 / var(--tw-border-opacity));
}

:is(.dark .dark\:bg-background\/20) {
  background-color: hsl(var(--background) / 0.2);
}

:is(.dark .dark\:bg-content2) {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--nextui-content2) / var(--nextui-content2-opacity, var(--tw-bg-opacity)));
}

:is(.dark .dark\:bg-default) {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--nextui-default) / var(--nextui-default-opacity, var(--tw-bg-opacity)));
}

:is(.dark .dark\:bg-pink-800) {
  --tw-bg-opacity: 1;
  background-color: rgb(157 23 77 / var(--tw-bg-opacity));
}

:is(.dark .dark\:bg-transparent) {
  background-color: transparent;
}

:is(.dark .dark\:text-danger-500) {
  --tw-text-opacity: 1;
  color: hsl(var(--nextui-danger-500) / var(--nextui-danger-500-opacity, var(--tw-text-opacity)));
}

:is(.dark .dark\:text-gray-400) {
  --tw-text-opacity: 1;
  color: rgb(156 163 175 / var(--tw-text-opacity));
}

:is(.dark .dark\:text-success) {
  --tw-text-opacity: 1;
  color: hsl(var(--nextui-success) / var(--nextui-success-opacity, var(--tw-text-opacity)));
}

:is(.dark .dark\:text-warning) {
  --tw-text-opacity: 1;
  color: hsl(var(--nextui-warning) / var(--nextui-warning-opacity, var(--tw-text-opacity)));
}

:is(.dark .dark\:text-white) {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}

:is(.dark .dark\:placeholder\:text-danger-500)::-moz-placeholder {
  --tw-text-opacity: 1;
  color: hsl(var(--nextui-danger-500) / var(--nextui-danger-500-opacity, var(--tw-text-opacity)));
}

:is(.dark .dark\:placeholder\:text-danger-500)::placeholder {
  --tw-text-opacity: 1;
  color: hsl(var(--nextui-danger-500) / var(--nextui-danger-500-opacity, var(--tw-text-opacity)));
}

:is(.dark .dark\:placeholder\:text-success)::-moz-placeholder {
  --tw-text-opacity: 1;
  color: hsl(var(--nextui-success) / var(--nextui-success-opacity, var(--tw-text-opacity)));
}

:is(.dark .dark\:placeholder\:text-success)::placeholder {
  --tw-text-opacity: 1;
  color: hsl(var(--nextui-success) / var(--nextui-success-opacity, var(--tw-text-opacity)));
}

:is(.dark .dark\:placeholder\:text-warning)::-moz-placeholder {
  --tw-text-opacity: 1;
  color: hsl(var(--nextui-warning) / var(--nextui-warning-opacity, var(--tw-text-opacity)));
}

:is(.dark .dark\:placeholder\:text-warning)::placeholder {
  --tw-text-opacity: 1;
  color: hsl(var(--nextui-warning) / var(--nextui-warning-opacity, var(--tw-text-opacity)));
}

:is(.dark .dark\:before\:via-default-700\/10)::before {
  content: var(--tw-content);
  --tw-gradient-to: hsl(var(--nextui-default-700) / 0)  var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), hsl(var(--nextui-default-700) / 0.1) var(--tw-gradient-via-position), var(--tw-gradient-to);
}

:is(.dark .dark\:after\:bg-content2)::after {
  content: var(--tw-content);
  --tw-bg-opacity: 1;
  background-color: hsl(var(--nextui-content2) / var(--nextui-content2-opacity, var(--tw-bg-opacity)));
}

:is(.dark .dark\:hover\:bg-pink-800:hover) {
  --tw-bg-opacity: 1;
  background-color: rgb(157 23 77 / var(--tw-bg-opacity));
}

:is(.dark .dark\:focus\:border-pink-800:focus) {
  --tw-border-opacity: 1;
  border-color: rgb(157 23 77 / var(--tw-border-opacity));
}

:is(.dark .dark\:focus\:ring-pink-800:focus) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(157 23 77 / var(--tw-ring-opacity));
}

.peer:focus ~ :is(.dark .peer-focus\:dark\:text-\[\#96005a\]) {
  --tw-text-opacity: 1;
  color: rgb(150 0 90 / var(--tw-text-opacity));
}

.peer:focus ~ :is(.dark .peer-focus\:dark\:text-pink-800) {
  --tw-text-opacity: 1;
  color: rgb(157 23 77 / var(--tw-text-opacity));
}

:is(.dark .dark\:data-\[hover\=true\]\:bg-content2[data-hover=true]) {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--nextui-content2) / var(--nextui-content2-opacity, var(--tw-bg-opacity)));
}

:is(.dark .dark\:data-\[selected\=true\]\:text-danger-500[data-selected=true]) {
  --tw-text-opacity: 1;
  color: hsl(var(--nextui-danger-500) / var(--nextui-danger-500-opacity, var(--tw-text-opacity)));
}

:is(.dark .dark\:data-\[selected\=true\]\:text-success[data-selected=true]) {
  --tw-text-opacity: 1;
  color: hsl(var(--nextui-success) / var(--nextui-success-opacity, var(--tw-text-opacity)));
}

:is(.dark .dark\:data-\[selected\=true\]\:text-warning[data-selected=true]) {
  --tw-text-opacity: 1;
  color: hsl(var(--nextui-warning) / var(--nextui-warning-opacity, var(--tw-text-opacity)));
}

@media (min-width: 640px) {
  .sm\:bottom-0 {
    bottom: 0px;
  }

  .sm\:right-0 {
    right: 0px;
  }

  .sm\:top-auto {
    top: auto;
  }

  .sm\:mx-0 {
    margin-left: 0px;
    margin-right: 0px;
  }

  .sm\:mx-6 {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }

  .sm\:my-0 {
    margin-top: 0px;
    margin-bottom: 0px;
  }

  .sm\:my-16 {
    margin-top: 4rem;
    margin-bottom: 4rem;
  }

  .sm\:mt-0 {
    margin-top: 0px;
  }

  .sm\:flex {
    display: flex;
  }

  .sm\:w-auto {
    width: auto;
  }

  .sm\:max-w-\[44\%\] {
    max-width: 44%;
  }

  .sm\:grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .sm\:grid-rows-2 {
    grid-template-rows: repeat(2, minmax(0, 1fr));
  }

  .sm\:flex-row {
    flex-direction: row;
  }

  .sm\:flex-col {
    flex-direction: column;
  }

  .sm\:items-start {
    align-items: flex-start;
  }

  .sm\:items-end {
    align-items: flex-end;
  }

  .sm\:items-center {
    align-items: center;
  }

  .sm\:justify-end {
    justify-content: flex-end;
  }

  .sm\:space-x-2 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-x-reverse: 0;
    margin-right: calc(0.5rem * var(--tw-space-x-reverse));
    margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));
  }

  .sm\:rounded-lg {
    border-radius: var(--radius);
  }

  .sm\:text-left {
    text-align: left;
  }

  .sm\:\[--scale-enter\:100\%\] {
    --scale-enter: 100%;
  }

  .sm\:\[--scale-exit\:103\%\] {
    --scale-exit: 103%;
  }

  .sm\:\[--slide-enter\:0px\] {
    --slide-enter: 0px;
  }

  .sm\:\[--slide-exit\:0px\] {
    --slide-exit: 0px;
  }

  .sm\:data-\[visible\=true\]\:opacity-0[data-visible=true] {
    opacity: 0;
  }

  .data-\[state\=open\]\:sm\:slide-in-from-bottom-full[data-state=open] {
    --tw-enter-translate-y: 100%;
  }

  .group[data-hover=true] .sm\:group-data-\[hover\=true\]\:data-\[visible\=true\]\:opacity-100[data-visible=true] {
    opacity: 1;
  }
}

@media (min-width: 768px) {
  .md\:mb-0 {
    margin-bottom: 0px;
  }

  .md\:w-8\/12 {
    width: 66.666667%;
  }

  .md\:w-9\/12 {
    width: 75%;
  }

  .md\:max-w-\[420px\] {
    max-width: 420px;
  }

  .md\:shrink-0 {
    flex-shrink: 0;
  }

  .md\:grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .md\:gap-6 {
    gap: 1.5rem;
  }
}

@media (min-width: 1024px) {
  .lg\:w-5\/12 {
    width: 41.666667%;
  }

  .lg\:w-6\/12 {
    width: 50%;
  }

  .lg\:grid-cols-5 {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }

  .lg\:grid-rows-3 {
    grid-template-rows: repeat(3, minmax(0, 1fr));
  }

  .lg\:justify-between {
    justify-content: space-between;
  }
}

@media (min-width: 1280px) {
  .xl\:w-5\/12 {
    width: 41.666667%;
  }

  .xl\:w-6\/12 {
    width: 50%;
  }
}

.\[\&\+\.border-medium\.border-danger\]\:ms-\[calc\(theme\(borderWidth\.medium\)\*-1\)\]+.border-medium.border-danger {
  margin-inline-start: calc(var(--nextui-border-width-medium) * -1);
}

.\[\&\+\.border-medium\.border-default\]\:ms-\[calc\(theme\(borderWidth\.medium\)\*-1\)\]+.border-medium.border-default {
  margin-inline-start: calc(var(--nextui-border-width-medium) * -1);
}

.\[\&\+\.border-medium\.border-primary\]\:ms-\[calc\(theme\(borderWidth\.medium\)\*-1\)\]+.border-medium.border-primary {
  margin-inline-start: calc(var(--nextui-border-width-medium) * -1);
}

.\[\&\+\.border-medium\.border-secondary\]\:ms-\[calc\(theme\(borderWidth\.medium\)\*-1\)\]+.border-medium.border-secondary {
  margin-inline-start: calc(var(--nextui-border-width-medium) * -1);
}

.\[\&\+\.border-medium\.border-success\]\:ms-\[calc\(theme\(borderWidth\.medium\)\*-1\)\]+.border-medium.border-success {
  margin-inline-start: calc(var(--nextui-border-width-medium) * -1);
}

.\[\&\+\.border-medium\.border-warning\]\:ms-\[calc\(theme\(borderWidth\.medium\)\*-1\)\]+.border-medium.border-warning {
  margin-inline-start: calc(var(--nextui-border-width-medium) * -1);
}

.\[\&\:has\(\[role\=checkbox\]\)\]\:pr-0:has([role=checkbox]) {
  padding-right: 0px;
}

.\[\&\:not\(\:first-child\)\:not\(\:last-child\)\]\:rounded-none:not(:first-child):not(:last-child) {
  border-radius: 0px;
}

.\[\&\:not\(\:first-of-type\)\:not\(\:last-of-type\)\]\:rounded-none:not(:first-of-type):not(:last-of-type) {
  border-radius: 0px;
}

.\[\&\:not\(\:first-of-type\)\]\:ml-\[calc\(theme\(borderWidth\.2\)\*-1\)\]:not(:first-of-type) {
  margin-left: calc(2px * -1);
}

.\[\&\>\*\]\:relative>* {
  position: relative;
}

.\[\&\>svg\]\:max-w-\[theme\(spacing\.unit-8\)\]>svg {
  max-width: var(--nextui-spacing-unit-8);
}

.\[\&\>tr\]\:first\:rounded-lg:first-child>tr {
  border-radius: var(--radius);
}

.\[\&\>tr\]\:first\:shadow-small:first-child>tr {
  --tw-shadow: var(--nextui-box-shadow-small);
  --tw-shadow-colored: var(--nextui-box-shadow-small);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.\[\&\[data-hover\=true\]\:not\(\[data-active\=true\]\)\]\:bg-default-100[data-hover=true]:not([data-active=true]) {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--nextui-default-100) / var(--nextui-default-100-opacity, var(--tw-bg-opacity)));
}

.\[\&\[data-hover\=true\]\:not\(\[data-active\=true\]\)\]\:bg-default-200[data-hover=true]:not([data-active=true]) {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--nextui-default-200) / var(--nextui-default-200-opacity, var(--tw-bg-opacity)));
}

.\[\&_tr\:last-child\]\:border-0 tr:last-child {
  border-width: 0px;
}

.\[\&_tr\]\:border-b tr {
  border-bottom-width: 1px;
}